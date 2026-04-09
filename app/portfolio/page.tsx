'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function PortfolioPage() {
  const stats = [
    { label: 'إجمالي المبالغ المستثمرة', value: '1,245,000', change: '+12.5%', icon: 'account_balance', color: 'primary-container' },
    { label: 'معدل العائد على الاستثمار', value: '24.8%', icon: 'insights', color: 'secondary-container' },
    { label: 'المشاريع النشطة', value: '12', icon: 'inventory_2', color: 'tertiary-fixed-dim' },
  ];

  const projects = [
    { name: 'نيوم لابتيكس', invested: '450,000', current: '620,000', status: 'ACTIVE', stage: 'جولة التمويل B' },
    { name: 'الرياح للطاقة المتجددة', invested: '280,000', current: '315,000', status: 'ACTIVE', stage: 'بدء التشغيل التجاري' },
    { name: 'فينتيك سولوشنز', invested: '150,000', current: '200,000', status: 'EXITED', stage: 'تم التخارج بنجاح' },
    { name: 'مدار للأمن السيبراني', invested: '365,000', current: '485,000', status: 'ACTIVE', stage: 'الاستحواذ المقترح' },
  ];

  const reports = [
    { time: '2 hours ago', title: 'تقرير الربع الثالث: نيوم لابتيكس', color: 'secondary-container', description: 'تجاوزت الإيرادات التوقعات بنسبة 15% مع توسع جديد في السوق الخليجي.' },
    { time: 'Yesterday', title: 'تحديث تنظيمي: قطاع الطاقة', color: 'slate-700', description: 'تشريعات جديدة تدعم حوافز الاستثمار في المشاريع الخضراء.' },
    { time: '3 days ago', title: 'تحليل مخاطر: مدار للأمن', color: 'tertiary-fixed-dim', description: 'تحسينات أمنية جديدة ترفع تقييم المخاطر إلى المستوى الممتاز.' },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0 opacity-10"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-10"></div>

      <Navbar />
      <DashboardSidebar />

      <main className="xl:mr-64 pt-32 pb-20 px-8 min-h-screen z-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h1 className="font-headline text-4xl font-bold text-white mb-2 tracking-tight">محفظتي الاستثمارية</h1>
              <p className="text-on-surface-variant max-w-md">نظرة عامة شاملة على استثماراتك النشطة وأداء أصولك في الوقت الفعلي.</p>
            </div>
            <div className="bg-surface-container-high px-6 py-3 border border-outline-variant/30 flex flex-col items-center">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-data">Status</span>
              <span className="flex items-center gap-2 text-primary-container font-data">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                CONNECTED
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-surface-container-low p-8 relative overflow-hidden group border border-white/5">
                <div className="l-bracket-tr"></div>
                <div className="l-bracket-bl"></div>
                <div className="relative z-10">
                  <p className="font-headline text-on-surface-variant text-sm mb-4">{stat.label}</p>
                  <h2 className="font-data text-4xl text-white font-black tracking-tighter">
                    {stat.value.includes('$') || stat.value.includes('%') ? stat.value : <><span className="text-primary-container">$</span> {stat.value}</>}
                  </h2>
                  {stat.change && (
                    <div className="mt-4 flex items-center gap-2 text-primary-container text-sm">
                      <span className="material-symbols-outlined text-sm">trending_up</span>
                      <span className="font-data">{stat.change}</span>
                      <span className="font-body text-slate-500 text-xs mr-2">منذ الشهر الماضي</span>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-4 -left-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-9xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table & Reports */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Portfolio Table */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-xl font-bold flex items-center gap-3">
                  <span className="w-1 h-6 bg-primary-container"></span>
                  تحليل المشاريع النشطة
                </h3>
                <button className="text-sm font-data text-primary-container hover:underline uppercase tracking-widest">Download Full Report</button>
              </div>
              <div className="bg-surface-container overflow-x-auto border border-outline-variant/10 backdrop-blur-md">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-surface-container-highest/50 border-b border-outline-variant/20">
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-tighter">اسم المشروع</th>
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-tighter">المبلغ المستثمر</th>
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-tighter">التقييم الحالي</th>
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-tighter">الحالة</th>
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-tighter">المرحلة القادمة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {projects.map((proj, i) => (
                      <tr key={i} className="hover:bg-surface-container-high/50 transition-colors group">
                        <td className="px-6 py-5 font-headline font-bold text-white group-hover:text-primary-container transition-colors">{proj.name}</td>
                        <td className="px-6 py-5 font-data text-sm">${proj.invested}</td>
                        <td className={`px-6 py-5 font-data text-sm ${proj.status === 'EXITED' ? 'text-slate-500' : 'text-primary-container'}`}>${proj.current}</td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 text-[10px] font-bold border ${proj.status === 'ACTIVE' ? 'bg-primary-container/10 text-primary-container border-primary-container/30' : 'bg-slate-500/10 text-slate-400 border-slate-500/30'}`}>
                            {proj.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm text-on-surface-variant font-body">{proj.stage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar Reports */}
            <div className="lg:col-span-1">
              <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-secondary-container"></span>
                تقارير حديثة
              </h3>
              <div className="space-y-4">
                {reports.map((report, i) => (
                  <div key={i} className={`bg-surface-container-low p-5 border-l-2 border-${report.color} hover:bg-surface-container-high transition-all cursor-pointer group`}>
                    <span className={`text-[10px] font-data text-${report.color} uppercase font-bold`}>{report.time}</span>
                    <h4 className="font-headline font-bold text-sm mt-1 mb-2 group-hover:text-white transition-colors">{report.title}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed font-body">{report.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Distribution Chart Mockup */}
            <div className="bg-surface-container-low p-8 relative overflow-hidden">
              <div className="l-bracket-tr"></div>
              <h4 className="font-headline font-bold mb-8 text-white">توزيع المحفظة حسب القطاع</h4>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#1c2027" strokeWidth="12"></circle>
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#00ffd1" strokeDasharray="100 251" strokeDashoffset="0" strokeWidth="12"></circle>
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#6800ec" strokeDasharray="80 251" strokeDashoffset="-100" strokeWidth="12"></circle>
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#ffba3a" strokeDasharray="71 251" strokeDashoffset="-180" strokeWidth="12"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-data text-2xl font-black">100%</span>
                    <span className="text-[10px] font-data text-slate-500 uppercase">Allocated</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-primary-container"></span>
                    <span className="text-sm font-headline">التقنية الحيوية (40%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-secondary-container"></span>
                    <span className="text-sm font-headline">الطاقة المتجددة (32%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-tertiary-fixed-dim"></span>
                    <span className="text-sm font-headline">الأمن السيبراني (28%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Progression Mockup */}
            <div className="bg-surface-container-low p-8 relative overflow-hidden">
              <div className="l-bracket-tr"></div>
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-headline font-bold text-white">تطور العائد الاستثماري</h4>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-high text-xs font-data text-slate-400">1Y</span>
                  <span className="px-2 py-1 bg-primary-container/20 text-xs font-data text-primary-container">MAX</span>
                </div>
              </div>
              <div className="h-40 relative flex items-end gap-2">
                {[30, 45, 40, 65, 55, 80, 70, 95].map((h, i) => (
                  <div key={i} className={`flex-1 ${i === 7 ? 'bg-primary-container shadow-[0_0_15px_rgba(0,255,209,0.5)]' : 'bg-secondary-container/30'} group relative transition-all duration-500`} style={{ height: `${h}%` }}>
                    {i === 7 && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-primary-container text-black text-[10px] font-data px-2 font-bold whitespace-nowrap">
                        24.8%
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 font-data text-[10px] text-slate-500 uppercase tracking-widest">
                <span>Jan 2023</span>
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <div className="fixed bottom-12 right-12 z-40">
        <button className="w-16 h-16 bg-primary-container text-on-primary shadow-[0_0_24px_rgba(0,255,209,0.4)] clip-path-sharp flex items-center justify-center active:scale-95 transition-all group overflow-hidden">
          <span className="material-symbols-outlined text-3xl font-bold group-hover:rotate-90 transition-transform duration-300">add</span>
        </button>
      </div>
    </div>
  );
}
