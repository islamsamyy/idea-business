import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function InvestorDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch investments for total portfolio
  const { data: investments } = await supabase
    .from('investments')
    .select('amount')
    .eq('investor_id', user.id);

  const totalPortfolio = investments?.reduce((sum, inv) => sum + (Number(inv.amount) || 0), 0) || 0;

  // Fetch saved opportunities
  const { data: savedOppsData } = await supabase
    .from('saved_opportunities')
    .select(`
      id,
      created_at,
      project:projects (
        id, title, category, status
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(3);

  // Fetch unread messages
  const { count: unreadMessages } = await supabase
    .from('messages')
    .select('*', { count: 'exact', head: true })
    .eq('receiver_id', user.id)
    .eq('read', false);
  const stats = [
    { label: 'إجمالي المحفظة', value: totalPortfolio.toLocaleString(), unit: 'SAR', border: 'border-primary-container' },
    { label: 'فرص مهتم بها', value: savedOppsData?.length?.toString() || '0', border: 'border-secondary-container' },
    { label: 'اجتماعات قادمة', value: '0', border: 'border-tertiary-fixed-dim' },
    { label: 'رسائل جديدة', value: unreadMessages?.toString() || '0', border: 'border-primary-container' },
  ];

  const { data: dbProjects } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'active')
    .limit(3);

  const recommendations = dbProjects?.map(project => ({
    title: project.title,
    description: project.description,
    category: project.category || 'عام',
    match: `${project.ai_score || 85}%`,
    target: `${(project.funding_goal / 1000000).toFixed(1)}M SAR`,
    color: 'primary-container',
  })) || [];
  type SavedOp = { id: string; created_at: string; project: { id: string; title: string; category: string; status: string } | { id: string; title: string; category: string; status: string }[] | null };
  const savedOpportunities = savedOppsData?.map((op: SavedOp) => {
    // Supabase can return the joined item as an array if the relation is unclear
    const project = Array.isArray(op.project) ? op.project[0] : op.project;
    
    return {
      id: project?.id?.slice(0, 4)?.toUpperCase() || 'NA',
      fullname: project?.title || 'Unknown',
      date: new Date(op.created_at).toLocaleDateString(),
      category: project?.category || 'عام',
      round: 'تأسيس',
      status: project?.status || 'متاح',
      color: 'primary-container'
    };
  }) || [];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0 opacity-10"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-10"></div>

      <Navbar />
      <DashboardSidebar />

      <main className="xl:mr-64 pt-32 pb-20 px-8 min-h-screen z-10 relative">
        {/* Stats Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className={`bg-surface-container-low p-6 relative border-r-4 ${stat.border} shadow-[0_0_24px_rgba(0,255,209,0.05)]`}>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/5 opacity-20"></div>
                <div className="text-slate-400 text-sm mb-2 font-headline">{stat.label}</div>
                <div className="text-3xl font-data text-white flex items-baseline gap-2">
                  {stat.unit && <span className="text-sm text-primary-container">{stat.unit}</span>}
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Recommendations */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold font-headline border-r-4 border-primary-container pr-4">توصيات الذكاء الاصطناعي</h2>
            <div className="text-xs font-data text-primary-container tracking-tighter">AI_ENGINE_v4.2 // SCAN_ACTIVE</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, i) => (
              <div key={i} className="bg-surface-container-high p-1 relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-${rec.color}`}></div>
                <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-${rec.color}`}></div>
                <div className="p-6 bg-slate-950/40 h-full backdrop-blur-sm">
                  <div className="flex justify-between mb-4">
                    <span className={`bg-${rec.color}/10 text-${rec.color} text-[10px] px-2 py-1 font-data`}>{rec.category}</span>
                    <div className="flex items-center gap-1">
                      <span className={`material-symbols-outlined text-${rec.color} text-sm`} style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                      <span className="font-data text-lg text-white">{rec.match}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-headline">{rec.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 font-body leading-relaxed">{rec.description}</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] text-slate-500 font-data uppercase tracking-widest">Target</div>
                      <div className={`font-data text-sm text-${rec.color}`}>{rec.target}</div>
                    </div>
                    <button className={`bg-${rec.color} text-slate-950 px-4 py-2 text-xs font-bold hover:bg-white transition-all transform active:scale-95 clip-button-sm`}>عرض الفرصة</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Saved Opportunities */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold font-headline border-r-4 border-primary-container pr-4">الفرص المحفوظة مؤخراً</h2>
            <button className="text-xs text-slate-400 hover:text-primary-container transition-colors uppercase font-data tracking-widest">View All Archives</button>
          </div>
          <div className="space-y-4">
            {savedOpportunities.map((op, i) => (
              <div key={i} className="bg-surface-container-low hover:bg-surface-container-high transition-all p-4 flex flex-col md:flex-row items-center gap-6 group relative border border-white/5">
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${op.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`w-12 h-12 bg-slate-900 flex items-center justify-center font-data text-${op.color} border border-${op.color}/20 shrink-0`}>{op.id}</div>
                <div className="flex-1 text-center md:text-right">
                  <h4 className="font-bold text-white font-headline">{op.fullname}</h4>
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-1">
                    <span className="text-xs text-slate-500 font-data">DATE: {op.date}</span>
                    <span className="text-xs text-slate-500 font-data">CATEGORY: {op.category}</span>
                  </div>
                </div>
                <div className="text-center md:text-left shrink-0">
                  <div className="text-xs font-data text-slate-400 mb-1">CURRENT_ROUND</div>
                  <div className="font-data text-sm text-white">{op.round}</div>
                </div>
                <div className="px-6 shrink-0">
                  <span className={`px-3 py-1 bg-${op.color}/10 text-${op.color} text-[10px] font-bold uppercase tracking-widest border border-${op.color}/20`}>
                    {op.status}
                  </span>
                </div>
                <button className="p-2 hover:bg-primary-container/10 transition-colors shrink-0">
                  <span className="material-symbols-outlined text-slate-400">more_vert</span>
                </button>
              </div>
            ))}
            {savedOpportunities.length === 0 && (
              <div className="text-center py-8 text-slate-500 font-body">لا يوجد فرص محفوظة حالياً.</div>
            )}
          </div>
        </section>
      </main>

      {/* Progress Footer */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-surface-container-highest flex z-50">
        <div className="h-full bg-primary-container animate-pulse" style={{ width: '65%' }}></div>
        <div className="h-full bg-secondary-container" style={{ width: '20%' }}></div>
        <div className="h-full bg-tertiary-fixed-dim" style={{ width: '15%' }}></div>
      </div>
    </div>
  );
}
