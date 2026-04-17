'use client'

import React, { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { toast } from 'sonner'

interface NotificationItem {
  id: string
  type: string
  title: string
  body: string
  action_url: string | null
  read: boolean
  created_at: string
}

interface NotificationBellProps {
  currentUserId: string
}

export default function NotificationBell({ currentUserId }: NotificationBellProps) {
  const supabase = createClient()
  const [notifications, setNotifications] = useState<NotificationItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch initial notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await supabase
          .from('notifications')
          .select('*')
          .eq('user_id', currentUserId)
          .order('created_at', { ascending: false })
          .limit(20)

        setNotifications(data || [])
      } catch (error) {
        console.error('Failed to fetch notifications:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNotifications()
  }, [currentUserId, supabase])

  // Subscribe to real-time notifications
  useEffect(() => {
    const channel = supabase
      .channel(`notifications-${currentUserId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${currentUserId}`,
        },
        (payload) => {
          const newNotification = payload.new as NotificationItem
          setNotifications((prev) => [newNotification, ...prev])
          toast.success(newNotification.title, { description: newNotification.body })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [currentUserId, supabase])

  const unreadCount = notifications.filter((n) => !n.read).length

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await supabase.from('notifications').update({ read: true }).eq('id', notificationId)
      setNotifications((prev) =>
        prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
      )
    } catch (error) {
      console.error('Failed to mark notification as read:', error)
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'message':
        return 'mail'
      case 'investment':
        return 'trending_up'
      case 'kyc_update':
        return 'verified_user'
      case 'project_update':
        return 'assignment'
      default:
        return 'notifications'
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:text-primary-container transition-colors text-muted-foreground"
        aria-label="Notifications"
      >
        <span className="material-symbols-outlined">notifications</span>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-container text-background text-[10px] font-black flex items-center justify-center rounded-full font-data">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Notification Panel */}
          <div className="absolute left-0 top-full mt-2 w-96 bg-surface-container-low dark:bg-[#0A1628] border border-primary-container/15 dark:border-white/5 z-50 shadow-2xl rounded-xl overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-primary-container/10 dark:border-white/5 bg-surface-container/30 dark:bg-slate-900/30 flex justify-between items-center">
              <h3 className="font-headline text-sm font-bold text-foreground">الإخطارات</h3>
              {unreadCount > 0 && (
                <button
                  onClick={async () => {
                    // Mark all as read
                    for (const notif of notifications.filter((n) => !n.read)) {
                      await handleMarkAsRead(notif.id)
                    }
                  }}
                  className="text-[10px] text-primary-container hover:text-primary-container/80 transition-colors font-black uppercase tracking-widest"
                >
                  اقرأ الكل
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto no-scrollbar">
              {isLoading ? (
                <div className="p-6 text-center text-muted-foreground text-sm">جاري التحميل...</div>
              ) : notifications.length === 0 ? (
                <div className="p-6 text-center text-muted-foreground">
                  <span className="material-symbols-outlined text-3xl block mb-2 opacity-30">
                    notifications_none
                  </span>
                  <p className="text-xs">لا توجد إخطارات بعد</p>
                </div>
              ) : (
                notifications.map((notif) => (
                  <Link
                    key={notif.id}
                    href={notif.action_url || '#'}
                    onClick={() => {
                      handleMarkAsRead(notif.id)
                      setIsOpen(false)
                    }}
                    className={`block p-4 border-b border-primary-container/10 dark:border-white/5 hover:bg-surface-container-high dark:hover:bg-white/5 transition-colors text-right ${
                      !notif.read ? 'bg-primary-container/5' : ''
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="flex-grow min-w-0">
                        <h4
                          className={`text-sm font-bold truncate ${!notif.read ? 'text-foreground' : 'text-muted-foreground'}`}
                        >
                          {notif.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                          {notif.body}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-2 font-data">
                          {new Date(notif.created_at).toLocaleDateString('ar-SA', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-start gap-2">
                        <span className={`material-symbols-outlined text-lg ${!notif.read ? 'text-primary-container' : 'text-muted-foreground'}`}>
                          {getNotificationIcon(notif.type)}
                        </span>
                        {!notif.read && (
                          <div className="w-2 h-2 bg-primary-container rounded-full mt-2"></div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <Link
                href="/notifications"
                onClick={() => setIsOpen(false)}
                className="block p-4 text-center text-primary-container font-headline text-[10px] font-black uppercase tracking-widest border-t border-primary-container/10 dark:border-white/5 hover:bg-surface-container-high dark:hover:bg-white/5 transition-colors"
              >
                عرض جميع الإخطارات
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  )
}
