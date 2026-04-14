import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { DashboardSidebar } from '@/components/layout/DashboardSidebar'
import KYCReviewClient from './KYCReviewClient'
import type { Profile } from '@/lib/types'

export const metadata = {
  title: 'KYC Review - Admin Panel',
}

export default async function AdminKYCPage() {
  const supabase = await createClient()

  // Fetch all pending KYC submissions
  const { data: pendingProfiles } = await supabase
    .from('profiles')
    .select('id, full_name, email, kyc_status, kyc_data, created_at')
    .eq('kyc_status', 'pending')
    .order('created_at', { ascending: false })

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0 opacity-10"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-5"></div>

      <Navbar />
      <DashboardSidebar />

      <main className="xl:mr-64 pt-32 pb-32 px-6 max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
            مراجعة التحقق من الهوية
          </h1>
          <p className="text-slate-400">مراجعة طلبات التحقق من الهوية المعلقة</p>
        </div>

        {/* KYC Review List */}
        <KYCReviewClient submissions={pendingProfiles || []} />
      </main>
    </div>
  )
}
