import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Leaderboard - IDEA BUSINESS',
}

export default async function LeaderboardPage() {
  const supabase = await createClient()

  // Top investors by investment count & amount
  const { data: topInvestors } = await supabase
    .from('profiles')
    .select(`
      id, full_name, avatar_url, kyc_status,
      investments(amount, status)
    `)
    .eq('role', 'investor')
    .limit(10)

  // Top founders by amount raised
  const { data: topFounders } = await supabase
    .from('profiles')
    .select(`
      id, full_name, avatar_url, kyc_status,
      projects(amount_raised, status)
    `)
    .eq('role', 'founder')
    .limit(10)

  const investorsWithStats = (topInvestors || []).map(inv => ({
    ...inv,
    totalInvested: (inv.investments || []).reduce((sum: number, i: any) => sum + (i.amount || 0), 0),
    dealCount: (inv.investments || []).filter((i: any) => i.status === 'paid').length,
  })).sort((a, b) => b.totalInvested - a.totalInvested)

  const foundersWithStats = (topFounders || []).map(f => ({
    ...f,
    totalRaised: (f.projects || []).reduce((sum: number, p: any) => sum + (p.amount_raised || 0), 0),
    activeProjects: (f.projects || []).filter((p: any) => p.status === 'active').length,
  })).sort((a, b) => b.totalRaised - a.totalRaised)

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none z-0" />
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <header className="mb-16 text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">
            لائحة الصدارة
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">أفضل المستثمرين والمؤسسين على المنصة</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Top Investors */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-primary-container" />
              <h2 className="text-2xl font-black text-white font-headline uppercase tracking-tight">أفضل المستثمرين</h2>
            </div>

            <div className="space-y-4">
              {investorsWithStats.map((inv, i) => (
                <Link
                  key={inv.id}
                  href={`/profile/${inv.id}`}
                  className="bg-[#0A1628] border border-white/5 p-6 rounded-lg hover:border-primary-container/30 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-container/20 border border-primary-container/30 font-black text-primary-container text-sm">
                      {i + 1}
                    </div>
                    <Image
                      src={inv.avatar_url || `https://api.dicebear.com/7.x/bottts/svg?seed=${inv.id}`}
                      alt={inv.full_name || 'مستثمر'}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <p className="text-white font-bold group-hover:text-primary-container transition-colors">{inv.full_name}</p>
                      <p className="text-xs text-slate-500">{inv.dealCount} صفقة</p>
                    </div>
                    {inv.kyc_status === 'verified' && (
                      <span className="material-symbols-outlined text-primary-container text-lg">verified</span>
                    )}
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-slate-500">إجمالي الاستثمار</span>
                    <span className="text-primary-container font-data font-black text-lg">{inv.totalInvested.toLocaleString()} ريال</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Top Founders */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-secondary-container" />
              <h2 className="text-2xl font-black text-white font-headline uppercase tracking-tight">أفضل المؤسسين</h2>
            </div>

            <div className="space-y-4">
              {foundersWithStats.map((founder, i) => (
                <Link
                  key={founder.id}
                  href={`/profile/${founder.id}`}
                  className="bg-[#0A1628] border border-white/5 p-6 rounded-lg hover:border-secondary-container/30 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-container/20 border border-secondary-container/30 font-black text-secondary-container text-sm">
                      {i + 1}
                    </div>
                    <Image
                      src={founder.avatar_url || `https://api.dicebear.com/7.x/bottts/svg?seed=${founder.id}`}
                      alt={founder.full_name || 'مؤسس'}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <p className="text-white font-bold group-hover:text-secondary-container transition-colors">{founder.full_name}</p>
                      <p className="text-xs text-slate-500">{founder.activeProjects} مشاريع نشطة</p>
                    </div>
                    {founder.kyc_status === 'verified' && (
                      <span className="material-symbols-outlined text-secondary-container text-lg">verified</span>
                    )}
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-slate-500">إجمالي التمويل المجمع</span>
                    <span className="text-secondary-container font-data font-black text-lg">{founder.totalRaised.toLocaleString()} ريال</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
