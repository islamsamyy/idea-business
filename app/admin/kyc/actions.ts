'use server'

import { createClient } from '@/lib/supabase/server'
import { createNotification } from '@/lib/notifications'
import { revalidatePath } from 'next/cache'

export async function approveKyc(userId: string) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return { error: 'غير مصرح' }
    }

    // Verify user is admin
    const { data: adminProfile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (adminProfile?.role !== 'admin') {
      return { error: 'غير مصرح' }
    }

    // Update user's KYC status to verified
    const { error } = await supabase
      .from('profiles')
      .update({ kyc_status: 'verified' })
      .eq('id', userId)

    if (error) {
      return { error: 'فشل تحديث الحالة' }
    }

    // Notify user
    await createNotification(
      userId,
      'kyc_update',
      'تم التحقق من هويتك',
      'تهانينا! تم الموافقة على طلب التحقق من هويتك ويمكنك الآن الاستثمار.',
      '/dashboard/investor'
    )

    revalidatePath('/admin/kyc')
    return { success: true }
  } catch (error) {
    console.error('Approve KYC error:', error)
    return { error: 'حدث خطأ غير متوقع' }
  }
}

export async function rejectKyc(userId: string, reason: string) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return { error: 'غير مصرح' }
    }

    // Verify user is admin
    const { data: adminProfile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (adminProfile?.role !== 'admin') {
      return { error: 'غير مصرح' }
    }

    // Get current KYC data
    const { data: profile } = await supabase
      .from('profiles')
      .select('kyc_data')
      .eq('id', userId)
      .single()

    // Update status back to unverified with rejection reason
    const { error } = await supabase.from('profiles').update({
      kyc_status: 'unverified',
      kyc_data: {
        ...profile?.kyc_data,
        rejectionReason: reason,
        rejectedAt: new Date().toISOString(),
      },
    }).eq('id', userId)

    if (error) {
      return { error: 'فشل تحديث الحالة' }
    }

    // Notify user
    await createNotification(
      userId,
      'kyc_update',
      'لم يتم قبول طلب التحقق',
      `للأسف، لم يتم الموافقة على طلب التحقق من الهوية. السبب: ${reason}. يرجى المحاولة مجدداً.`,
      '/kyc'
    )

    revalidatePath('/admin/kyc')
    return { success: true }
  } catch (error) {
    console.error('Reject KYC error:', error)
    return { error: 'حدث خطأ غير متوقع' }
  }
}
