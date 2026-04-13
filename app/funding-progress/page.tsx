'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function FundingProgressPage() {
  const investors = [
    {
      name: 'خالد بن عبدالعزيز',
      since: '2022',
      status: 'Paid',
      statusColor: 'text-[#00ffd1]',
      statusBg: 'bg-[#00ffd1]/5',
      statusBorder: 'border-[#00ffd1]/30',
      commitment: '500,000 SAR',
      icon: 'person',
      iconColor: 'text-[#00ffd1]',
      iconBg: 'bg-[#00ffd1]/10',
      iconBorder: 'border-[#00ffd1]/30'
    },
    {
      name: 'مجموعة الراجحي الدولية',
      since: 'Enterprise Tier',
      status: 'Committed',
      statusColor: 'text-tertiary-fixed-dim',
      statusBg: 'bg-tertiary-fixed-dim/5',
      statusBorder: 'border-tertiary-fixed-dim/30',
      commitment: '2,500,000 SAR',
      icon: 'business',
      iconColor: 'text-secondary-container',
      iconBg: 'bg-secondary-container/10',
      iconBorder: 'border-secondary-container/30'
    },
    {
      name: 'سارة المهنا',
      since: 'Verified Individual',
      status: 'Requested info',
      statusColor: 'text-slate-400',
      statusBg: 'bg-slate-400/5',
      statusBorder: 'border-slate-400/30',
      commitment: 'Pending',
      icon: 'person_search',
      iconColor: 'text-slate-500',
      iconBg: 'bg-slate-500/10',
      iconBorder: 'border-slate-500/30'
    }
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0"></div>
      
      <Navbar />
      <DashboardSidebar />

      {/* Main Content Canvas */}
      <main className="xl:mr-64 pt-32 pb-32 px-6 max-w-7xl mx-auto z-10 relative">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <nav className="flex text-sm text-[#00ffd1]/60 mb-2 font-data">
              <span>FUNDING</span>
              <span className="mx-2">/</span>
              <span className="text-[#00ffd1]">NEO-RIYADH VERTICALS</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-white">تفاصيل تقدم التمويل</h1>
            <p className="text-slate-400 mt-2 max-w-xl">مراقبة حية لتدفقات رأس المال والتزامات المستثمرين لمشروع نيوم-الرياض الرأسي الفئة (أ).</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-high p-4 border-r border-[#00ffd1]/30 relative min-w-[200px]">
              <div className="l-bracket-tr"></div>
              <p className="text-[10px] text-slate-500 uppercase font-data mb-1">Round Status</p>
              <p className="text-xl font-bold text-[#00ffd1] font-headline">ACTIVE COMMAND</p>
            </div>
          </div>
        </header>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Progress & Stats Section */}
          <section className="lg:col-span-8 space-y-8">
            {/* Main Funding Bar Card */}
            <div className="bg-surface-container-low p-8 relative overflow-hidden">
              <div className="l-bracket-tr"></div>
              <div className="l-bracket-bl"></div>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest font-data mb-1">Total Capital Raised</h3>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-black font-data text-[#00ffd1]">8,420,000</span>
                    <span className="text-xl text-[#00ffd1]/60 font-headline">SAR</span>
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest font-data mb-1">Target Goal</h3>
                  <div className="flex items-baseline gap-2 justify-end">
                    <span className="text-2xl font-bold font-data text-white">12,000,000</span>
                    <span className="text-sm text-slate-400 font-headline">SAR</span>
                  </div>
                </div>
              </div>
              
              {/* Visual Progress Bar */}
              <div className="relative h-12 bg-surface-container-highest/50 border border-outline-variant/15 flex items-center p-1">
                <div className="h-full bg-gradient-to-r from-[#00ffd1] to-[#00ffd1]/60 relative flex items-center justify-end px-4" style={{ width: '70.1%' }}>
                  <span className="text-[#00382c] font-black font-data text-sm">70.1%</span>
                </div>
                <div className="absolute inset-0 grid grid-cols-12 gap-0 pointer-events-none opacity-10">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-l border-[#00ffd1]"></div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="border-r border-[#00ffd1]/10 pr-4">
                  <p className="text-[10px] text-slate-500 font-bold uppercase font-data">Days Remaining</p>
                  <p className="text-xl font-bold font-data text-white">14</p>
                </div>
                <div className="border-r border-[#00ffd1]/10 pr-4">
                  <p className="text-[10px] text-slate-500 font-bold uppercase font-data">Active Interests</p>
                  <p className="text-xl font-bold font-data text-white">242</p>
                </div>
                <div className="pr-4">
                  <p className="text-[10px] text-slate-500 font-bold uppercase font-data">Avg. Ticket</p>
                  <p className="text-xl font-bold font-data text-white">35K</p>
                </div>
              </div>
            </div>

            {/* Investor List Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-headline flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00ffd1]"></span>
                سجل المستثمرين المهتمين
              </h2>
              <div className="space-y-px">
                {investors.map((inv, idx) => (
                  <div key={idx} className="group flex items-center justify-between bg-surface-container p-4 hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 ${inv.iconBg} border ${inv.iconBorder} flex items-center justify-center`}>
                        <span className={`material-symbols-outlined ${inv.iconColor}`}>{inv.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{inv.name}</h4>
                        <p className="text-[10px] text-slate-500 font-data uppercase">{inv.since}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="hidden md:block">
                        <p className="text-[10px] text-slate-500 uppercase text-left font-data">Status</p>
                        <span className={`${inv.statusColor} text-[10px] font-bold px-2 py-0.5 border ${inv.statusBorder} ${inv.statusBg}`}>{inv.status}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-slate-500 uppercase font-data">Commitment</p>
                        <p className="font-data font-bold text-white text-sm">{inv.commitment}</p>
                      </div>
                      <button className="h-10 w-10 flex items-center justify-center bg-surface-container-highest text-[#00ffd1] group-hover:bg-[#00ffd1] group-hover:text-[#00382c] transition-all">
                        <span className="material-symbols-outlined">chat</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Communication & Actions Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Communication Log Card */}
            <div className="bg-surface-container-high p-6 border-r-4 border-secondary-container relative">
              <h3 className="text-lg font-bold font-headline mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container">forum</span>
                سجل التفاعلات الأخير
              </h3>
              <div className="space-y-6">
                <div className="relative pr-6 border-r border-outline-variant/30 pb-6 text-right">
                  <div className="absolute -right-[5px] top-0 w-[9px] h-[9px] bg-secondary-container"></div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-white">خالد بن عبدالعزيز</span>
                    <span className="text-[10px] font-data text-slate-500">14:20 GMT</span>
                  </div>
                  <p className="text-sm text-slate-300">تم تأكيد استلام الدفعة الأولى. يرجى تزويدي بالجدول الزمني المعدل للمرحلة الثانية.</p>
                  <div className="mt-3 flex gap-2 justify-end">
                    <button className="text-[10px] font-bold text-[#00ffd1] uppercase font-data hover:underline">Mark as Read</button>
                    <button className="text-[10px] font-bold text-secondary-container uppercase font-data hover:underline">Reply</button>
                  </div>
                </div>
                <div className="relative pr-6 border-r border-outline-variant/30 pb-6 text-right">
                  <div className="absolute -right-[5px] top-0 w-[9px] h-[9px] bg-slate-500"></div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-white">مجموعة الراجحي</span>
                    <span className="text-[10px] font-data text-slate-500">11:05 GMT</span>
                  </div>
                  <p className="text-sm text-slate-400 italic">تم إرسال طلب للحصول على الملف الضريبي للمشروع...</p>
                </div>
              </div>
              <button className="w-full py-4 mt-4 bg-secondary-container text-white font-bold text-sm clip-button hover:brightness-110 active:scale-95 transition-all uppercase">
                تواصل مع المستثمر
              </button>
            </div>

            {/* AI Insight Pod */}
            <div className="bg-surface-container-highest p-6 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary-container/10 rounded-full blur-2xl"></div>
              <p className="text-[10px] font-bold text-secondary-container uppercase mb-2 font-data">AI Intelligence Projection</p>
              <p className="text-white text-sm leading-relaxed">بناءً على وتيرة الالتزام الحالية، من المتوقع اكتمال الجولة خلال <span className="text-secondary-container font-data">4.2</span> أيام. نوصي بتفعيل حزمة &quot;الإغلاق السريع&quot; للمستثمرين المتبقين.</p>
            </div>
          </aside>
        </div>
      </main>
      
      {/* Live Stats Ticker Footer */}
      <div className="fixed bottom-0 right-0 left-0 xl:right-64 h-8 bg-surface-container-highest/90 backdrop-blur-sm z-30 hidden md:flex items-center px-6 overflow-hidden border-t border-outline-variant/10">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#00ffd1] rounded-full"></span>
            <span className="text-[10px] font-bold font-data text-slate-400 uppercase">TASI INDEX</span>
            <span className="text-[10px] font-data text-[#00ffd1]">12,450.21 (+0.45%)</span>
          </div>
          <div className="flex items-center gap-2 border-r border-outline-variant px-8">
            <span className="w-1.5 h-1.5 bg-secondary-container rounded-full"></span>
            <span className="text-[10px] font-bold font-data text-slate-400 uppercase">OIL BRENT</span>
            <span className="text-[10px] font-data text-secondary-container">$82.14 (-1.12%)</span>
          </div>
          <div className="flex items-center gap-2 border-r border-outline-variant px-8">
            <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-full"></span>
            <span className="text-[10px] font-bold font-data text-slate-400 uppercase">NEO-VERTICALS ROUND</span>
            <span className="text-[10px] font-data text-white">70.1% FILLED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
