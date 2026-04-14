import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import MessagesClient from './MessagesClient'
import type { Message } from '@/lib/types'

export default async function MessagesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch all messages involving the current user
  const { data: allMessages } = await supabase
    .from('messages')
    .select('*, sender:profiles!sender_id(id, full_name, avatar_url), receiver:profiles!receiver_id(id, full_name, avatar_url)')
    .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`)
    .order('created_at', { ascending: true })

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex relative overflow-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 blur-[150px] rounded-full -z-10"></div>

      <MessagesClient currentUserId={user.id} initialMessages={(allMessages || []) as Message[]} />
    </div>
  )
}
