import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { DashboardSidebar } from '@/components/layout/DashboardSidebar'
import Link from 'next/link'

export const metadata = {
  title: 'Admin Panel - IDEA BUSINESS',
}

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Fetch key metrics
  const [
    { count: totalUsers },
    { count: pendingKyc },
    { count: activeProjects },
    { data: investments },
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('kyc_status', 'pending'),
    supabase.from('projects').select('*', { count: 'exact', head: true }).eq('status', 'active'),
    supabase.from('investments').select('amount').neq('status', 'cancelled'),
  ])

  const totalInvested = investments?.reduce((sum, inv) => sum + inv.amount, 0) || 0

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
            لوحة التحكم
          </h1>
          <p className="text-slate-400">إدارة منصة IDEA BUSINESS</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Users */}
          <div className="bg-[#0A1628] border border-white/5 p-8 relative overflow-hidden group hover:border-primary-container/30 transition-all">
            <div className="l-bracket-tr opacity-20"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-all"></div>
            <div className="relative z-10">
              <p className="text-[10px] font-data uppercase text-slate-500 tracking-widest mb-4">
                إجمالي المستخدمين
              </p>
              <div className="flex items-end gap-4">
                <span className="font-data text-4xl font-black text-primary-container">
                  {totalUsers || 0}
                </span>
                <span className="material-symbols-outlined text-5xl opacity-20">people</span>
              </div>
            </div>
          </div>

          {/* Pending KYC */}
          <div className="bg-[#0A1628] border border-white/5 p-8 relative overflow-hidden group hover:border-secondary-fixed-dim/30 transition-all">
            <div className="l-bracket-bl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-fixed-dim/5 rounded-full blur-3xl group-hover:bg-secondary-fixed-dim/10 transition-all"></div>
            <div className="relative z-10">
              <p className="text-[10px] font-data uppercase text-slate-500 tracking-widest mb-4">
                طلبات KYC معلقة
              </p>
              <div className="flex items-end gap-4">
                <span className="font-data text-4xl font-black text-secondary-fixed-dim">
                  {pendingKyc || 0}
                </span>
                <span className="material-symbols-outlined text-5xl opacity-20">pending_actions</span>
              </div>
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-[#0A1628] border border-white/5 p-8 relative overflow-hidden group hover:border-tertiary-fixed-dim/30 transition-all">
            <div className="l-bracket-tr opacity-20"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary-fixed-dim/5 rounded-full blur-3xl group-hover:bg-tertiary-fixed-dim/10 transition-all"></div>
            <div className="relative z-10">
              <p className="text-[10px] font-data uppercase text-slate-500 tracking-widest mb-4">
                مشاريع نشطة
              </p>
              <div className="flex items-end gap-4">
                <span className="font-data text-4xl font-black text-tertiary-fixed-dim">
                  {activeProjects || 0}
                </span>
                <span className="material-symbols-outlined text-5xl opacity-20">business_center</span>
              </div>
            </div>
          </div>

          {/* Total Invested */}
          <div className="bg-[#0A1628] border border-white/5 p-8 relative overflow-hidden group hover:border-primary-container/30 transition-all">
            <div className="l-bracket-bl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-all"></div>
            <div className="relative z-10">
              <p className="text-[10px] font-data uppercase text-slate-500 tracking-widest mb-4">
                إجمالي الاستثمارات
              </p>
              <div className="flex items-end gap-4">
                <span className="font-data text-3xl font-black text-primary-container">
                  {(totalInvested / 1000000).toFixed(1)}M
                </span>
                <span className="material-symbols-outlined text-5xl opacity-20">trending_up</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#0A1628] border border-white/5 p-8">
          <h2 className="font-headline text-xl font-black text-white mb-6">الإجراءات السريعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/admin/kyc"
              className="p-6 bg-slate-900/50 border border-white/10 hover:border-primary-container/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center group-hover:bg-primary-container/20 transition-colors">
                  <span className="material-symbols-outlined text-primary-container">verified_user</span>
                </span>
                <h3 className="font-headline font-bold text-white">مراجعة KYC</h3>
              </div>
              <p className="text-[10px] text-slate-400">
                {pendingKyc || 0} طلب معلق بانتظار المراجعة
              </p>
            </Link>

            <Link
              href="/admin/users"
              className="p-6 bg-slate-900/50 border border-white/10 hover:border-secondary-fixed-dim/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-secondary-fixed-dim/10 rounded-lg flex items-center justify-center group-hover:bg-secondary-fixed-dim/20 transition-colors">
                  <span className="material-symbols-outlined text-secondary-fixed-dim">people_alt</span>
                </span>
                <h3 className="font-headline font-bold text-white">إدارة المستخدمين</h3>
              </div>
              <p className="text-[10px] text-slate-400">
                إدارة أدوار ومستويات المستخدمين
              </p>
            </Link>

            <div className="p-6 bg-slate-900/50 border border-white/10 opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-500">assessment</span>
                </span>
                <h3 className="font-headline font-bold text-white">التقارير</h3>
              </div>
              <p className="text-[10px] text-slate-400">
                قادم قريباً
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
