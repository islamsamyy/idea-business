import React from 'react';
import { Navbar } from '@/components/layout/Navbar';

export default function InvestorDashboardPage() {
  const stats = [
    { label: 'إجمالي المحفظة', value: '1,420,000', unit: 'SAR', color: 'border-teal-400' },
    { label: 'فرص مهتم بها', value: '12', color: 'border-secondary-container' },
    { label: 'اجتماعات قادمة', value: '03', color: 'border-tertiary-fixed-dim' },
    { label: 'رسائل جديدة', value: '08', color: 'border-teal-400' },
  ];

  const recommendations = [
    {
      id: 1,
      tag: 'TECH_FINANCE',
      score: '98%',
      title: 'منصة نقد الرقمية',
      desc: 'توسيع نطاق الدفع الفوري في دول مجلس التعاون الخليجي باستخدام بلوكتشين.',
      target: '5,000,000 SAR',
      color: 'teal-400'
    },
    {
      id: 2,
      tag: 'GREEN_ENERGY',
      score: '92%',
      title: 'طاقة الصحراء',
      desc: 'مشروع متكامل لتخزين الطاقة الشمسية في المناطق النائية بتقنيات متطورة.',
      target: '12,500,000 SAR',
      color: 'secondary-container'
    },
    {
      id: 3,
      tag: 'HEALTH_AI',
      score: '89%',
      title: 'روبوتيك ميد',
      desc: 'أنظمة جراحية مساعدة بالذكاء الاصطناعي للمستشفيات التخصصية الحديثة.',
      target: '8,200,000 SAR',
      color: 'teal-400'
    }
  ];

  const archives = [
    { id: 'A1', title: 'شركة الخدمات السحابية المتطورة', date: '2023.10.12', category: 'CLOUD_COMPUTING', round: 'Series B', status: 'نشطة', color: 'teal-400' },
    { id: 'B4', title: 'المصانع الذكية للأغذية', date: '2023.10.10', category: 'AGRI_TECH', round: 'Seed Round', status: 'قيد المراجعة', color: 'tertiary-fixed-dim' },
    { id: 'C9', title: 'إيكو ترافل هب', date: '2023.10.08', category: 'TRAVEL_TECH', round: 'Series A', status: 'نشطة', color: 'teal-400' },
  ];

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <div className="fixed inset-0 hex-grid pointer-events-none opacity-5"></div>
      <div className="fixed inset-0 scanline pointer-events-none opacity-5"></div>
      
      <Navbar />

      <div className="relative pt-20 flex">
        {/* Sidebar */}
        <aside className="fixed right-0 top-0 h-screen z-50 flex flex-col bg-slate-950/60 backdrop-blur-xl border-l border-teal-400/15 w-64 pt-20">
          <div className="p-8 border-b border-teal-400/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-400/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-teal-400" style={{ fontVariationSettings: "'FILL' 1" }}>shield_person</span>
              </div>
              <div>
                <div className="font-headline font-bold text-teal-400">قائد القيادة</div>
                <div className="text-xs text-slate-400">المستثمر المعتمد</div>
              </div>
            </div>
          </div>
          <nav className="flex-1 py-8 flex flex-col gap-1">
            <a className="flex items-center gap-3 px-4 py-3 text-teal-400 border-r-4 border-teal-400 bg-teal-400/5 font-headline" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span>لوحة التحكم</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-teal-300 transition-colors hover:bg-slate-900/50 font-headline" href="#">
              <span className="material-symbols-outlined">account_balance_wallet</span>
              <span>المحفظة</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-teal-300 transition-colors hover:bg-slate-900/50 font-headline" href="#">
              <span className="material-symbols-outlined">lightbulb</span>
              <span>المشاريع</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-teal-300 transition-colors hover:bg-slate-900/50 font-headline" href="#">
              <span className="material-symbols-outlined">forum</span>
              <span>الرسائل</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-teal-300 transition-colors hover:bg-slate-900/50 font-headline" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span>الإعدادات</span>
            </a>
          </nav>
          <div className="p-4 mt-auto">
            <div className="bg-surface-container-high p-4 border border-teal-400/10">
              <p className="text-[10px] text-slate-500 mb-2 uppercase tracking-widest font-data">System Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_#00ffd1]"></div>
                <span className="text-xs text-teal-400 font-data uppercase">Connected</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="mr-64 w-full p-8 min-h-screen">
          {/* Stats Grid */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className={`bg-surface-container-low p-6 relative border-r-4 ${stat.color} shadow-[0_0_24px_rgba(0,255,209,0.05)]`}>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-400/20"></div>
                  <div className="text-slate-400 text-sm mb-2 font-headline">{stat.label}</div>
                  <div className="text-3xl font-data text-white flex items-baseline gap-2">
                    {stat.unit && <span className="text-sm text-teal-400">{stat.unit}</span>}
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Recommendations */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold font-headline border-r-4 border-teal-400 pr-4">توصيات الذكاء الاصطناعي</h2>
              <div className="text-xs font-data text-teal-400 tracking-tighter uppercase">AI_Engine_v4.2 // Scan_Active</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {recommendations.map((rec) => (
                <div key={rec.id} className="bg-surface-container-high p-1 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-${rec.color}`}></div>
                  <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-${rec.color}`}></div>
                  <div className="p-6 bg-slate-950/40 h-full">
                    <div className="flex justify-between mb-4">
                      <span className={`bg-${rec.color}/10 text-${rec.color === 'teal-400' ? 'teal-400' : 'secondary'} text-[10px] px-2 py-1 font-data`}>{rec.tag}</span>
                      <div className="flex items-center gap-1">
                        <span className={`material-symbols-outlined text-${rec.color === 'teal-400' ? 'teal-400' : 'secondary'} text-sm`} style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                        <span className="font-data text-lg text-white">{rec.score}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 font-headline">{rec.title}</h3>
                    <p className="text-sm text-slate-400 mb-6 Tajawal">{rec.desc}</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] text-slate-500 font-data">TARGET</div>
                        <div className={`font-data text-sm text-${rec.color === 'teal-400' ? 'teal-400' : 'secondary'}`}>{rec.target}</div>
                      </div>
                      <button className={`bg-${rec.color === 'teal-400' ? 'teal-400' : 'secondary-container'} ${rec.color === 'teal-400' ? 'text-slate-950' : 'text-white'} px-4 py-2 text-xs font-bold hover:bg-white hover:text-slate-950 transition-all transform active:scale-95`}>عرض الفرصة</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Archives */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold font-headline border-r-4 border-teal-400 pr-4">الفرص المحفوظة مؤخراً</h2>
              <button className="text-xs text-slate-400 hover:text-teal-400 transition-colors uppercase font-data tracking-widest">View All Archives</button>
            </div>
            <div className="space-y-4">
              {archives.map((item, i) => (
                <div key={i} className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-4 flex items-center gap-6 group relative">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className={`w-12 h-12 bg-slate-900 flex items-center justify-center font-data text-${item.color} border border-${item.color}/20`}>{item.id}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white font-headline">{item.title}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-slate-500 font-data uppercase">Date: {item.date}</span>
                      <span className="text-xs text-slate-500 font-data uppercase">Category: {item.category}</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-data text-slate-400 mb-1 uppercase text-left">Current Round</div>
                    <div className="font-data text-sm text-white">{item.round}</div>
                  </div>
                  <div className="px-6">
                    <span className={`px-3 py-1 bg-${item.color}/10 text-${item.color === 'teal-400' ? 'teal-400' : 'tertiary-fixed-dim'} text-[10px] font-bold uppercase tracking-widest`}>{item.status}</span>
                  </div>
                  <button className="p-2 hover:bg-teal-400/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-400">more_vert</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-surface-container-highest flex z-[60]">
        <div className="h-full bg-teal-400" style={{ width: '65%' }}></div>
        <div className="h-full bg-secondary-container" style={{ width: '20%' }}></div>
        <div className="h-full bg-tertiary-fixed-dim" style={{ width: '15%' }}></div>
      </div>
    </div>
  );
}
