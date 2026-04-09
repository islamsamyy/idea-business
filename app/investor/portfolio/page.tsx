import React from 'react';
import { Navbar } from '@/components/layout/Navbar';

export default function PortfolioPage() {
  const tableData = [
    { name: 'نيوم لابتيكس', invested: '$450,000', current: '$620,000', status: 'ACTIVE', next: 'جولة التمويل B' },
    { name: 'الرياح للطاقة المتجددة', invested: '$280,000', current: '$315,000', status: 'ACTIVE', next: 'بدء التشغيل التجاري' },
    { name: 'فينتيك سولوشنز', invested: '$150,000', current: '$200,000', status: 'EXITED', next: 'تم التخارج بنجاح' },
    { name: 'مدار للأمن السيبراني', invested: '$365,000', current: '$485,000', status: 'ACTIVE', next: 'الاستحواذ المقترح' },
  ];

  const reports = [
    { time: '2 hours ago', title: 'تقرير الربع الثالث: نيوم لابتيكس', desc: 'تجاوزت الإيرادات التوقعات بنسبة 15% مع توسع جديد في السوق الخليجي.', color: '#6800ec' },
    { time: 'Yesterday', title: 'تحديث تنظيمي: قطاع الطاقة', desc: 'تشريعات جديدة تدعم حوافز الاستثمار في المشاريع الخضراء.', color: '#1e293b' },
    { time: '3 days ago', title: 'تحليل مخاطر: مدار للأمن', desc: 'تحسينات أمنية جديدة ترفع تقييم المخاطر إلى المستوى الممتاز.', color: '#ffba3a' },
  ];

  return (
    <div className="bg-surface-dim text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Texture Overlays */}
      <div className="fixed inset-0 pointer-events-none hex-grid opacity-20 z-0"></div>
      <div className="fixed inset-0 pointer-events-none scanline opacity-5 z-0"></div>

      <Navbar />

      <div className="relative pt-16 flex">
        {/* Sidebar (Right) */}
        <aside className="hidden lg:flex flex-col h-screen fixed right-0 top-0 pt-20 w-64 bg-[#0a0e15] border-l border-[#00ffd1]/10 z-40">
          <div className="px-6 py-4 flex flex-col items-center border-b border-[#00ffd1]/10 mb-4">
            <div className="w-16 h-16 rounded-none border-2 border-[#00ffd1] p-1 mb-2">
              <img alt="Investor Avatar" className="w-full h-full bg-surface-container-high object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsueH4BXzeJv6HUuKSbh88KbIzUMsdqww50JyC7FCIrgN1YjczgyBBkNSbIQxokjUcR8LHu5sezQT1D9g-2iYWhVcyKyQk0hNOgu2I8nnvv0rdFWyGnfQZ8s68QmxB4Nwk5QQnYtK9XUnOxriaMiTjvXt8n8gbsWCE-yNv_wkdBJ6pemVPMwzIofCRywSVvPv3o708my2yh-lNK7Q4mAaZ2ElooMkKwAk-F7n1KJp93RiFAwxG0L9MQHJTYAp6XTWanGrbakdccmc" />
            </div>
            <h3 className="font-headline font-bold text-[#00ffd1] text-lg">Sovereign Command</h3>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase">Elite Level</span>
          </div>
          <nav className="flex-1 flex flex-col px-0 font-['Space_Grotesk'] font-bold text-sm">
            <a className="flex items-center gap-4 px-6 py-4 bg-[#00ffd1]/10 text-[#00ffd1] border-r-4 border-[#00ffd1] uppercase" href="#">
              <span className="material-symbols-outlined">account_balance_wallet</span>
              Portfolio
            </a>
            <a className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors uppercase" href="#">
              <span className="material-symbols-outlined">explore</span>
              Opportunities
            </a>
            <a className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors uppercase" href="#">
              <span className="material-symbols-outlined">developer_board</span>
              Projects
            </a>
            <a className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors uppercase" href="#">
              <span className="material-symbols-outlined">trending_up</span>
              Funding
            </a>
            <a className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors uppercase" href="#">
              <span className="material-symbols-outlined">contact_support</span>
              Support
            </a>
          </nav>
          <div className="p-6">
            <button className="w-full py-3 bg-gradient-to-r from-primary-container to-surface-tint text-on-primary font-bold clip-kinetic active:scale-95 transition-transform uppercase text-xs tracking-wider">
              New Investment
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:mr-64 w-full pt-12 pb-20 px-6 max-w-7xl mx-auto z-10 relative">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h1 className="font-headline text-4xl font-bold text-white mb-2 tracking-tight">محفظتي الاستثمارية</h1>
              <p className="text-on-surface-variant max-w-md">نظرة عامة شاملة على استثماراتك النشطة وأداء أصولك في الوقت الفعلي.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-high px-6 py-3 border border-outline-variant/30 flex flex-col items-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-label font-bold mb-1">Status</span>
                <span className="flex items-center gap-2 text-primary-container font-data uppercase text-xs">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  Connected
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Total Invested */}
            <div className="bg-surface-container-low p-8 relative overflow-hidden group border border-transparent hover:border-teal-400/20 transition-all">
              <div className="l-bracket-tr"></div>
              <div className="l-bracket-bl"></div>
              <div className="relative z-10">
                <p className="font-headline text-on-surface-variant text-sm mb-4">إجمالي المبالغ المستثمرة</p>
                <h2 className="font-data text-4xl text-white font-black tracking-tighter">
                  <span className="text-primary-container">$</span> 1,245,000
                </h2>
                <div className="mt-4 flex items-center gap-2 text-primary-container text-sm flex-row-reverse justify-end">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span className="font-data">+12.5%</span>
                  <span className="font-body text-slate-500 text-xs mr-2">منذ الشهر الماضي</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl">account_balance</span>
              </div>
            </div>

            {/* ROI Card */}
            <div className="bg-surface-container-low p-8 relative overflow-hidden group border border-transparent hover:border-teal-400/20 transition-all">
              <div className="l-bracket-tr"></div>
              <div className="l-bracket-bl"></div>
              <div className="relative z-10">
                <p className="font-headline text-on-surface-variant text-sm mb-4">معدل العائد على الاستثمار</p>
                <h2 className="font-data text-4xl text-secondary-container font-black tracking-tighter">
                  24.8<span className="text-white">%</span>
                </h2>
                <div className="mt-4 flex items-center gap-2 text-secondary-container text-sm flex-row-reverse justify-end">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  <span className="font-data uppercase">Optimized</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl">insights</span>
              </div>
            </div>

            {/* Active Projects */}
            <div className="bg-surface-container-low p-8 relative overflow-hidden group border border-transparent hover:border-teal-400/20 transition-all">
              <div className="l-bracket-tr"></div>
              <div className="l-bracket-bl"></div>
              <div className="relative z-10">
                <p className="font-headline text-on-surface-variant text-sm mb-4">المشاريع النشطة</p>
                <h2 className="font-data text-4xl text-tertiary-fixed-dim font-black tracking-tighter uppercase">
                  12 <span className="text-white text-xl">Assets</span>
                </h2>
                <div className="mt-4 flex items-center gap-2 text-tertiary-fixed-dim text-sm flex-row-reverse justify-end">
                  <span className="material-symbols-outlined text-sm">shield</span>
                  <span className="font-data uppercase">Secure</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl">inventory_2</span>
              </div>
            </div>
          </div>

          {/* Secondary Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-xl font-bold flex items-center gap-3">
                  <span className="w-1 h-6 bg-primary-container"></span>
                  تحليل المشاريع النشطة
                </h3>
                <button className="text-sm font-label text-primary-container hover:underline uppercase tracking-widest font-bold">Download Full Report</button>
              </div>
              <div className="bg-surface-container overflow-x-auto border border-outline-variant/10">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-surface-container-highest/50 border-b border-outline-variant/20">
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-widest">اسم المشروع</th>
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-widest">المبلغ المستثمر</th>
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-widest">التقييم الحالي</th>
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-widest">الحالة</th>
                      <th className="px-6 py-4 font-headline text-xs text-slate-400 uppercase tracking-widest">المرحلة القادمة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {tableData.map((row, i) => (
                      <tr key={i} className="hover:bg-surface-container-high/50 transition-colors">
                        <td className="px-6 py-5 font-headline font-bold text-white">{row.name}</td>
                        <td className="px-6 py-5 font-data text-sm">{row.invested}</td>
                        <td className="px-6 py-5 font-data text-sm text-primary-container">{row.current}</td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 text-[10px] font-bold border ${row.status === 'ACTIVE' ? 'bg-primary-container/10 text-primary-container border-primary-container/30' : 'bg-slate-500/10 text-slate-400 border-slate-500/30'}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm text-on-surface-variant font-headline">{row.next}</td>
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
                  <div key={i} className="bg-surface-container-low p-5 border-l-2 hover:bg-surface-container-high transition-all cursor-pointer text-left" style={{ borderLeftColor: report.color }}>
                    <span className="text-[10px] font-label uppercase font-bold" style={{ color: report.color === '#1e293b' ? '#64748b' : report.color }}>{report.time}</span>
                    <h4 className="font-headline font-bold text-sm mt-1 mb-2 text-white">{report.title}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{report.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Sector Distribution Chart Mockup */}
            <div className="bg-surface-container-low p-8 relative">
              <div className="l-bracket-tr"></div>
              <h4 className="font-headline font-bold mb-8 text-white">توزيع المحفظة حسب القطاع</h4>
              <div className="flex items-center justify-center gap-10 flex-row-reverse">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#1c2027" strokeWidth="12"></circle>
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#00ffd1" strokeDasharray="100 251" strokeDashoffset="0" strokeWidth="12"></circle>
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#6800ec" strokeDasharray="80 251" strokeDashoffset="-100" strokeWidth="12"></circle>
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#ffba3a" strokeDasharray="71 251" strokeDashoffset="-180" strokeWidth="12"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-data text-2xl font-black text-white">100%</span>
                    <span className="text-[10px] font-label text-slate-500 uppercase font-bold tracking-widest">Allocated</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <span className="w-3 h-3 bg-primary-container"></span>
                    <span className="text-sm font-headline">التقنية الحيوية (40%)</span>
                  </div>
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <span className="w-3 h-3 bg-secondary-container"></span>
                    <span className="text-sm font-headline">الطاقة المتجددة (32%)</span>
                  </div>
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <span className="w-3 h-3 bg-tertiary-fixed-dim"></span>
                    <span className="text-sm font-headline">الأمن السيبراني (28%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Over Time Mockup */}
            <div className="bg-surface-container-low p-8 relative">
              <div className="l-bracket-tr"></div>
              <div className="flex justify-between items-center mb-8 flex-row-reverse">
                <h4 className="font-headline font-bold text-white text-right">تطور العائد الاستثماري</h4>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-high text-xs font-label text-slate-400 font-bold">1Y</span>
                  <span className="px-2 py-1 bg-primary-container/20 text-xs font-label text-primary-container font-bold">MAX</span>
                </div>
              </div>
              <div className="h-40 relative flex items-end gap-2">
                {[30, 45, 40, 65, 55, 80, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-secondary-container/30 group relative transition-all hover:bg-secondary-container/50" style={{ height: `${h}%` }}>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-secondary-container text-white text-[8px] font-data px-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{h-18}%</div>
                  </div>
                ))}
                <div className="flex-1 bg-primary-container h-[95%] group relative shadow-[0_0_15px_rgba(0,255,209,0.5)]">
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-primary-container text-black text-[10px] font-data px-2 font-bold opacity-100 whitespace-nowrap">24.8%</div>
                </div>
              </div>
              <div className="flex justify-between mt-4 font-label text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                <span>Jan 2023</span>
                <span>Today</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* FAB */}
      <div className="fixed bottom-24 right-6 lg:bottom-12 lg:left-12 z-40">
        <button className="w-16 h-16 bg-primary-container text-on-primary shadow-[0_0_24px_rgba(0,255,209,0.4)] clip-kinetic flex items-center justify-center active:scale-95 transition-all group overflow-hidden">
          <span className="material-symbols-outlined text-3xl font-bold group-hover:rotate-90 transition-transform duration-300">add</span>
        </button>
      </div>

      {/* BottomNavBar (Mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-2 h-16 bg-[#10131a]/80 backdrop-blur-lg border-t border-[#00ffd1]/20">
        {[
          { icon: 'pie_chart', label: 'Portfolio', active: true },
          { icon: 'shutter_speed', label: 'Market', active: false },
          { icon: 'precision_manufacturing', label: 'Manage', active: false },
          { icon: 'insights', label: 'Progress', active: false },
          { icon: 'support_agent', label: 'Help', active: false },
        ].map((item) => (
          <a key={item.label} className={`flex flex-col items-center justify-center p-2 transition-all ${item.active ? 'text-[#00ffd1] bg-[#00ffd1]/10 scale-110' : 'text-slate-500 hover:bg-[#00ffd1]/5'}`} href="#">
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
