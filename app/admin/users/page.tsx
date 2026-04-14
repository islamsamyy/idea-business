import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { DashboardSidebar } from '@/components/layout/DashboardSidebar'

export const metadata = {
  title: 'User Management - Admin Panel',
}

export default async function AdminUsersPage() {
  const supabase = await createClient()

  // Fetch users
  const { data: users } = await supabase
    .from('profiles')
    .select('id, full_name, email, role, tier, kyc_status, created_at')
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
            إدارة المستخدمين
          </h1>
          <p className="text-slate-400">عرض وإدارة حسابات المستخدمين</p>
        </div>

        {/* Users Table */}
        <div className="bg-[#0A1628] border border-white/5 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 bg-slate-900/50 border-b border-white/5">
            <div className="text-[10px] font-data uppercase text-slate-500 font-black tracking-widest">
              الاسم
            </div>
            <div className="text-[10px] font-data uppercase text-slate-500 font-black tracking-widest">
              الدور
            </div>
            <div className="text-[10px] font-data uppercase text-slate-500 font-black tracking-widest">
              المستوى
            </div>
            <div className="text-[10px] font-data uppercase text-slate-500 font-black tracking-widest">
              KYC
            </div>
            <div className="text-[10px] font-data uppercase text-slate-500 font-black tracking-widest">
              التاريخ
            </div>
          </div>

          {/* Table Rows */}
          {users && users.length > 0 ? (
            users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className="text-sm text-white font-headline font-bold">
                  {user.full_name || 'مستخدم'}
                </div>
                <div>
                  <span
                    className={`text-[10px] font-data font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      user.role === 'admin'
                        ? 'bg-red-500/20 text-red-400'
                        : user.role === 'investor'
                          ? 'bg-primary-container/20 text-primary-container'
                          : 'bg-slate-700/20 text-slate-400'
                    }`}
                  >
                    {user.role}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-data font-black uppercase tracking-widest text-slate-400">
                    {user.tier}
                  </span>
                </div>
                <div>
                  <span
                    className={`text-[10px] font-data font-black uppercase tracking-widest px-2 py-1 rounded ${
                      user.kyc_status === 'verified'
                        ? 'bg-primary-container/20 text-primary-container'
                        : user.kyc_status === 'pending'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-slate-700/20 text-slate-400'
                    }`}
                  >
                    {user.kyc_status}
                  </span>
                </div>
                <div className="text-[10px] font-data text-slate-500">
                  {new Date(user.created_at).toLocaleDateString('ar-SA')}
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-400">
              لا توجد مستخدمون
            </div>
          )}
        </div>

        {/* Note */}
        <div className="mt-8 p-6 bg-slate-900/50 border border-white/10 rounded-lg">
          <p className="text-sm text-slate-400">
            <span className="material-symbols-outlined text-base mr-2">info</span>
            لتعديل دور المستخدمين أو مستوياتهم، استخدم قاعدة البيانات مباشرة أو طلب من فريق التطوير.
          </p>
        </div>
      </main>
    </div>
  )
}
