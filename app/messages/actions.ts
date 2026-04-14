'use server'

import { createClient } from '@/lib/supabase/server'
import { createNotification } from '@/lib/notifications'
import { sanitizeText } from '@/lib/sanitize'
import { revalidatePath } from 'next/cache'

export async function sendMessage(formData: FormData) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return { error: 'غير مصرح' }
    }

    const receiverId = formData.get('receiver_id') as string
    const content = formData.get('content') as string

    if (!receiverId || !content) {
      return { error: 'معلومات الرسالة ناقصة' }
    }

    const sanitizedContent = sanitizeText(content)
    if (!sanitizedContent) {
      return { error: 'الرسالة فارغة' }
    }

    // Insert message into database
    const { error } = await supabase.from('messages').insert({
      sender_id: user.id,
      receiver_id: receiverId,
      content: sanitizedContent,
      read: false,
    })

    if (error) {
      console.error('Message insert error:', error)
      return { error: 'فشل إرسال الرسالة' }
    }

    // Notify receiver
    await createNotification(
      receiverId,
      'message',
      'رسالة جديدة',
      `لديك رسالة جديدة من ${user.email}`,
      '/messages'
    )

    revalidatePath('/messages')
    return { success: true }
  } catch (error) {
    console.error('Send message error:', error)
    return { error: 'حدث خطأ غير متوقع' }
  }
}

export async function markMessagesRead(senderId: string) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return { error: 'غير مصرح' }
    }

    // Mark all messages from senderId that are addressed to currentUser as read
    const { error } = await supabase
      .from('messages')
      .update({ read: true })
      .eq('receiver_id', user.id)
      .eq('sender_id', senderId)

    if (error) {
      console.error('Mark read error:', error)
    }

    revalidatePath('/messages')
  } catch (error) {
    console.error('Mark messages read error:', error)
  }
}
