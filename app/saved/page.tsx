import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function SavedOpportunitiesPage() {
  const supabase = await createClient();
  const { data: { user } } = await (await supabase).auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch saved opportunities for the user, joining with projects and profiles
  const { data: savedOpps } = await (await supabase)
    .from('saved_opportunities')
    .select('*, project:projects(*, founder:profiles(*))')
    .eq('user_id', user.id);

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-10"></div>
      
      <Navbar />
      <DashboardSidebar />

      {/* Main Content Canvas */}
      <main className="xl:mr-64 pt-32 pb-32 px-6 max-w-7xl mx-auto z-10 relative">
        {/* Page Header */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              الفرص المحفوظة
            </h1>
            <p className="font-body text-slate-400 mt-2 max-w-xl text-lg">
              قائمة المراقبة الخاصة بك: صفقات ذكاء اصطناعي منسقة وجاهزة للتنفيذ.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-data text-xs text-slate-500 uppercase font-bold">فرز حسب:</span>
            <select className="bg-surface-container-high border-none text-xs font-data uppercase text-primary-container focus:ring-0 focus:outline-none py-2 pr-8 pl-4 cursor-pointer">
              <option>تغلق قريباً</option>
              <option>تقييم AI عالي</option>
              <option>نسبة التمويل</option>
            </select>
          </div>
        </header>

        {/* Opportunity Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {savedOpps && savedOpps.map((save: { id: string; project: { id: string; title: string; category: string; status: string; ai_score: number | null; funding_goal: number; amount_raised: number | null; img: string | null; founder: { full_name: string } | null } | null }) => {
            const opp = save.project;
            if (!opp) return null;
            return (
              <div key={save.id} className="relative group bg-surface-container-high/40 border border-outline-variant/10 backdrop-blur-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="l-bracket-tr"></div>
                <div className="l-bracket-bl"></div>
                <div className="relative h-48 overflow-hidden">
                  <Image alt={opp.title} width={400} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={opp.img || '/images/default-project.jpg'} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#10131a]/80 backdrop-blur-md border border-primary-container/30 px-3 py-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#00ffd1]"></span>
                      <span className="font-headline text-[10px] text-primary-container font-black uppercase tracking-widest">{opp.status}</span>
                    </div>
                  </div>
                  {/* TODO: Add unsave server action wiring here */}
                  <form action={async () => {
                    'use server';
                    const db = await createClient();
                    await db.from('saved_opportunities').delete().eq('id', save.id);
                  }}>
                    <button type="submit" className="absolute top-4 right-4 bg-red-500/10 hover:bg-red-500 hover:text-white text-red-500 p-2 transition-all duration-300">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </form>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline text-xl font-bold text-white"><Link href={`/opportunities/${opp.id}`}>{opp.title}</Link></h3>
                      <p className="text-[10px] text-slate-400 font-data uppercase">{opp.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-headline text-[10px] text-secondary-container font-bold uppercase mb-1">AI Score</p>
                      <span className="font-data text-2xl font-black text-secondary-container">{opp.ai_score || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-[10px] font-headline uppercase font-bold text-slate-400 mb-2">
                        <span>التمويل المنجز</span>
                        <span className="text-primary-container">{opp.amount_raised ? Math.round((opp.amount_raised / opp.funding_goal) * 100) : 0}%</span>
                      </div>
                      <div className="h-1 w-full bg-surface-container-highest">
                        <div className="h-full bg-primary-container shadow-[0_0_10px_#00ffd1]" style={{ width: `${opp.amount_raised ? Math.min(100, (opp.amount_raised / opp.funding_goal) * 100) : 0}%` }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-slate-500 font-data uppercase">الهدف</span>
                      <span className="font-data text-sm text-white">${(opp.funding_goal / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] text-slate-500 font-data uppercase">صاحب الفكرة</span>
                      <span className="font-data text-sm text-tertiary-fixed-dim">{opp.founder?.full_name || 'غير معروف'}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {(!savedOpps || savedOpps.length === 0) && (
            <div className="col-span-full py-12 text-center text-slate-400">
              لا توجد فرص محفوظة حالياً.
            </div>
          )}

          {/* Add More Module */}
          <div className="relative group bg-surface-container-low border border-outline-variant/10 p-6 flex flex-col justify-center items-center text-center hover:bg-surface-container-high transition-all">
            <div className="w-16 h-16 rounded-full border border-primary-container/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary-container/50 transition-all">
              <span className="material-symbols-outlined text-primary-container text-4xl">add_circle</span>
            </div>
            <h4 className="font-headline text-lg font-bold text-white uppercase tracking-tight">إضافة المزيد</h4>
            <p className="text-xs text-slate-500 mt-2">تصفح أحدث الفرص في السوق ووسع قائمة مراقبتك.</p>
            <Link className="mt-6 font-headline text-[10px] text-primary-container font-black uppercase tracking-widest border-b border-primary-container hover:opacity-70 transition-opacity" href="/opportunities">
              استكشاف السوق
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
