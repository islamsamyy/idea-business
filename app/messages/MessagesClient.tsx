'use client'

import React, { useState, useEffect, useMemo, useTransition } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { DashboardSidebar } from '@/components/layout/DashboardSidebar'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import type { Message, Profile } from '@/lib/types'
import { sendMessage, markMessagesRead } from './actions'

interface Conversation {
  userId: string
  profile: Profile
  lastMessage: Message
  unreadCount: number
}

interface MessagesClientProps {
  currentUserId: string
  initialMessages: Message[]
}

export default function MessagesClient({ currentUserId, initialMessages }: MessagesClientProps) {
  const supabase = createClient()
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [activeContactId, setActiveContactId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [messageText, setMessageText] = useState('')
  const [isPending, startTransition] = useTransition()

  // Subscribe to real-time messages
  useEffect(() => {
    const channel = supabase
      .channel('messages-room')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `receiver_id=eq.${currentUserId}`,
        },
        (payload) => {
          const newMessage = payload.new as Message
          setMessages((prev) => [...prev, newMessage])
          // Show toast for new message
          toast.success('رسالة جديدة')
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [currentUserId, supabase])

  // Mark messages as read when switching contacts
  useEffect(() => {
    if (activeContactId) {
      startTransition(async () => {
        await markMessagesRead(activeContactId)
      })
    }
  }, [activeContactId])

  // Derive conversations list from messages
  const conversations: Conversation[] = useMemo(() => {
    const conversationMap = new Map<string, Conversation>()

    messages.forEach((msg) => {
      // Determine the "other person" in this conversation
      const otherUserId = msg.sender_id === currentUserId ? msg.receiver_id : msg.sender_id
      const otherProfile =
        msg.sender_id === currentUserId ? msg.receiver : msg.sender

      if (!conversationMap.has(otherUserId)) {
        conversationMap.set(otherUserId, {
          userId: otherUserId,
          profile: otherProfile || {
            id: otherUserId,
            full_name: 'Unknown User',
            role: 'founder' as const,
            avatar_url: null,
            bio: null,
            kyc_status: 'unverified' as const,
            tier: 'basic' as const,
            created_at: new Date().toISOString(),
          },
          lastMessage: msg,
          unreadCount: 0,
        })
      }

      // Update with the latest message
      const conv = conversationMap.get(otherUserId)!
      if (new Date(msg.created_at) > new Date(conv.lastMessage.created_at)) {
        conv.lastMessage = msg
      }

      // Count unread messages from this contact
      if (msg.receiver_id === currentUserId && !msg.read) {
        conv.unreadCount += 1
      }
    })

    // Filter by search query
    const filtered = Array.from(conversationMap.values()).filter((conv) =>
      conv.profile.full_name?.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Sort by most recent message first
    return filtered.sort((a, b) => new Date(b.lastMessage.created_at).getTime() - new Date(a.lastMessage.created_at).getTime())
  }, [messages, currentUserId, searchQuery])

  // Get messages with the active contact
  const activeMessages = useMemo(() => {
    if (!activeContactId) return []
    return messages
      .filter((msg) => (msg.sender_id === currentUserId && msg.receiver_id === activeContactId) || (msg.sender_id === activeContactId && msg.receiver_id === currentUserId))
      .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
  }, [messages, activeContactId, currentUserId])

  const activeContact = conversations.find((c) => c.userId === activeContactId)

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!messageText.trim() || !activeContactId) {
      toast.error('الرسالة مفقودة أو جهة الاتصال غير محددة')
      return
    }

    const formData = new FormData()
    formData.append('receiver_id', activeContactId)
    formData.append('content', messageText)

    startTransition(async () => {
      const result = await sendMessage(formData)
      if (result?.error) {
        toast.error(result.error)
      } else {
        // Optimistically add message to UI
        const optimisticMessage: Message = {
          id: `temp-${Date.now()}`,
          sender_id: currentUserId,
          receiver_id: activeContactId,
          content: messageText,
          read: false,
          created_at: new Date().toISOString(),
          project_id: null,
        }
        setMessages((prev) => [...prev, optimisticMessage])
        setMessageText('')
        toast.success('تم إرسال الرسالة')
      }
    })
  }

  return (
    <div className="flex-grow flex flex-col h-screen relative z-10 w-full">
      <Navbar />
      <DashboardSidebar />

      <main className="flex-grow flex xl:mr-64 p-6 gap-6 overflow-hidden pt-24">
        {/* Chat List */}
        <section className="w-full md:w-96 bg-[#0A1628] border border-white/5 flex flex-col overflow-hidden rounded-lg">
          <header className="p-6 border-b border-white/5 bg-slate-900/50 flex justify-between items-center">
            <h2 className="text-xl font-black text-white font-headline">الرسائل</h2>
            <button className="material-symbols-outlined text-primary-container hover:text-primary-container/80 transition-colors">
              edit_square
            </button>
          </header>

          <div className="p-4 border-b border-white/5">
            <div className="relative">
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                search
              </span>
              <input
                type="text"
                placeholder="بحث في المحادثات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-white/5 pr-10 pl-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-primary-container/30 transition-all font-body"
              />
            </div>
          </div>

          <div className="flex-grow overflow-y-auto no-scrollbar">
            {conversations.length === 0 ? (
              <div className="p-6 text-center text-slate-400">
                <span className="material-symbols-outlined text-4xl block mb-2 opacity-50">
                  mail
                </span>
                <p className="text-sm">لا توجد محادثات بعد</p>
              </div>
            ) : (
              conversations.map((conversation) => (
                <button
                  key={conversation.userId}
                  onClick={() => setActiveContactId(conversation.userId)}
                  className={`w-full p-4 flex gap-4 transition-all border-b border-white/5 last:border-0 hover:bg-white/5 text-right ${
                    activeContactId === conversation.userId ? 'bg-primary-container/10 border-r-4 border-r-primary-container' : ''
                  }`}
                >
                  <div className="relative shrink-0">
                    {conversation.profile.avatar_url ? (
                      <Image
                        width={48}
                        height={48}
                        src={conversation.profile.avatar_url}
                        alt={conversation.profile.full_name || 'User'}
                        className="w-12 h-12 rounded-full object-cover border border-white/10"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-slate-700 border border-white/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-400">person</span>
                      </div>
                    )}
                    {/* Online indicator - can be enhanced with Presence */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-600 rounded-full border-2 border-[#0A1628]"></div>
                  </div>

                  <div className="flex-grow overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className={`text-sm font-bold truncate ${conversation.unreadCount > 0 ? 'text-white font-black' : 'text-slate-300'}`}>
                        {conversation.profile.full_name || 'Unknown'}
                      </h4>
                      <span className="text-[10px] text-slate-500 font-data shrink-0 ml-2">
                        {new Date(conversation.lastMessage.created_at).toLocaleDateString('ar-SA', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <p
                      className={`text-xs truncate ${conversation.unreadCount > 0 ? 'text-primary-container font-black' : 'text-slate-500'}`}
                    >
                      {conversation.lastMessage.content}
                    </p>
                  </div>

                  {conversation.unreadCount > 0 && (
                    <div className="flex items-center justify-center w-5 h-5 bg-primary-container text-background rounded-full text-[10px] font-black shrink-0">
                      {conversation.unreadCount > 9 ? '9+' : conversation.unreadCount}
                    </div>
                  )}
                </button>
              ))
            )}
          </div>
        </section>

        {/* Active Chat Window */}
        <section className="hidden md:flex flex-grow bg-[#0A1628] border border-white/5 flex-col overflow-hidden relative rounded-lg">
          <div className="l-bracket-tr opacity-10"></div>

          {activeContact ? (
            <>
              {/* Chat Header */}
              <header className="p-6 border-b border-white/5 bg-slate-900/50 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {activeContact.profile.avatar_url ? (
                    <Image
                      width={40}
                      height={40}
                      src={activeContact.profile.avatar_url}
                      alt={activeContact.profile.full_name || 'User'}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-400">person</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-white font-bold">{activeContact.profile.full_name || 'Unknown'}</h3>
                    <p className="text-[10px] text-slate-500 font-data uppercase tracking-widest">متصل الآن</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="material-symbols-outlined text-slate-400 hover:text-primary-container transition-colors">
                    call
                  </button>
                  <button className="material-symbols-outlined text-slate-400 hover:text-primary-container transition-colors">
                    info
                  </button>
                </div>
              </header>

              {/* Messages Thread */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4 no-scrollbar flex flex-col-reverse">
                {activeMessages.map((msg) => {
                  const isCurrentUser = msg.sender_id === currentUserId
                  return (
                    <div key={msg.id} className={`flex ${isCurrentUser ? 'justify-start' : 'justify-end'}`}>
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl ${
                          isCurrentUser ? 'bg-primary-container text-background' : 'bg-slate-800 text-white'
                        }`}
                      >
                        <p className="text-sm break-words">{msg.content}</p>
                        <p className={`text-xs mt-1 ${isCurrentUser ? 'opacity-70' : 'text-slate-400'}`}>
                          {new Date(msg.created_at).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-6 border-t border-white/5 bg-slate-900/30">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="اكتب رسالتك..."
                    disabled={isPending}
                    className="flex-grow bg-slate-900 border border-white/5 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-primary-container/30 transition-all font-body disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isPending || !messageText.trim()}
                    className="bg-primary-container text-background px-4 py-3 rounded-xl font-black hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">send</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center gap-4 text-slate-400">
              <span className="material-symbols-outlined text-6xl opacity-20">mail</span>
              <p className="text-center max-w-xs">
                اختر محادثة من القائمة على اليسار لبدء المراسلة
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
