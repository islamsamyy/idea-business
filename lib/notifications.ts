'use server'

import { createClient } from '@/lib/supabase/server'

type NotificationType = 'message' | 'investment' | 'kyc_update' | 'project_update'

/**
 * Creates a notification for a user in the database
 * Used from server actions and server components only
 */
export async function createNotification(
  userId: string,
  type: NotificationType,
  title: string,
  body: string,
  actionUrl?: string
) {
  try {
    const supabase = await createClient()
    const { error } = await supabase.from('notifications').insert({
      user_id: userId,
      type,
      title,
      body,
      action_url: actionUrl,
      read: false,
    })
    if (error) {
      console.error('Failed to create notification:', error)
    }
  } catch (error) {
    console.error('Notification creation error:', error)
  }
}
