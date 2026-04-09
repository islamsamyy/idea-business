'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

export default function OpportunityDetail({ params }: { params: { id: string } }) {
  // Mock detail data
  const project = {
    title: 'نظام إدارة الطاقة الذكي - GreenPulse',
    type: 'تكنولوجيا الطاقة ونظم التحكم',
    status: 'مُتحقق - جولة تمويلية أ',
    founded: 'أكتوبر ٢٠٢٣',
    location: 'الرياض، السعودية',
    fundingTarget: '٢,٠٠٠,٠٠٠ ريال',
    raised: '٨٥٠,٠٠٠ ريال',
    description: `نظام متكامل يعتمد على الذكاء الاصطناعي لتحليل استهلاك الطاقة في المنشآت الصناعية وتقديم توصيات لحظية لتقليل الهدر بنسبة تصل إلى ٣٠٪. المشروع لديه ٣ عقود تجريبية قائمة مع مصانع في المنطقة الصناعية الثانية.`,
    highlights: [
      'تقليل تكاليف الطاقة بنسبة ٣٠٪ عبر الأتمتة.',
      'تكامل سهل مع أنظمة ERP القائمة.',
      'فريق عمل يضم خبراء في هندسة الطاقة وبرمجيات الـ IoT.',
      'سوق مستهدف ضخم يقدّر بـ ٥٠٠ مليون ريال سنوياً في المنطقة.'
    ],
    stats: [
      { label: 'العائد السنوي المتوقع', value: '١٨٪', color: 'text-primary-container' },
      { label: 'التقييم الحالي', value: '١٢M ريال', color: 'text-secondary-fixed-dim' },
      { label: 'فترة الاسترداد', value: '٣ سنوات', color: 'text-tertiary-fixed-dim' },
    ]
  };

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none"></div>
      
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-grow space-y-12">
            <header>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-container/10 text-primary-container text-[10px] font-black px-3 py-1 border border-primary-container/20 uppercase tracking-widest">{project.type}</span>
                <span className="flex items-center gap-1 text-secondary-container text-[10px] font-black uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  {project.status}
                </span>
              </div>
              <h1 className="font-headline text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tight">{project.title}</h1>
              <div className="flex flex-wrap gap-8 text-slate-500 font-data text-xs uppercase tracking-widest border-y border-white/5 py-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {project.location}
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  تأسس: {project.founded}
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">group</span>
                  ٢٤ مستثمر مهتم
                </div>
              </div>
            </header>

            <section className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="l-bracket-tr opacity-10"></div>
              <h3 className="text-xl font-black text-white mb-6 font-headline uppercase tracking-tight">// ملخص الفكرة</h3>
              <p className="text-slate-400 leading-relaxed text-lg font-body">{project.description}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.stats.map((stat, i) => (
                <div key={i} className="bg-slate-900 border border-white/5 p-6 text-center rounded-xl">
                  <span className={`block text-4xl font-black font-data mb-2 ${stat.color}`}>{stat.value}</span>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>

            <section>
              <h3 className="text-xl font-black text-white mb-8 font-headline uppercase tracking-tight decoration-primary-container/30 decoration-4 underline-offset-8 underline">أبرز المميزات</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-primary-container mt-1 shrink-0">check_circle</span>
                    <span className="text-slate-400 font-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar - Investment Widget */}
          <aside className="lg:w-[450px] space-y-8">
            <div className="bg-[#0A1628] border border-primary-container/20 p-8 clip-button relative shadow-[0_0_50px_rgba(0,255,209,0.05)]">
              <div className="l-bracket-tr"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-primary-container to-secondary-container"></div>
              
              <h3 className="text-2xl font-black text-white mb-8 font-headline text-center uppercase">بيانات التمويل</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-slate-500 text-xs font-black uppercase tracking-widest">إجمالي التمويل المستهدف</span>
                  <span className="text-white font-data text-2xl font-black">{project.fundingTarget}</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden flex">
                  <div className="h-full bg-primary-container shadow-[0_0_10px_#00ffd1]" style={{ width: '42%' }}></div>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-primary-container">تم جمع ٤٢٪</span>
                  <span className="text-slate-500">متبقي ١,١٥٠,٠٠٠ ريال</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <p className="text-slate-400 text-sm font-body leading-relaxed italic">
                  * الحد الأدنى للاستثمار في هذا المشروع: ٢٥,٠٠٠ ريال.
                </p>
                <div className="p-4 bg-secondary-container/5 border border-secondary-container/20 rounded-xl flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary-container">shield_with_heart</span>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    هذا المشروع مشمول بحماية NDA. سيُطلب منك التوقيع الكترونياً قبل الحصول على الملفات الفنية الكاملة.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link href="/checkout" className="w-full bg-primary-container text-background font-black py-5 text-xl clip-button text-center shadow-[0_0_30px_rgba(0,255,209,0.2)] hover:brightness-110 active:scale-95 transition-all">
                  استثمر الآن
                </Link>
                <button className="w-full border border-white/10 text-white font-black py-5 text-xl clip-button hover:bg-white/5 active:scale-95 transition-all">
                  طلب عقد NDA
                </button>
              </div>
            </div>

            {/* Founder Info */}
            <div className="bg-[#0A1628] border border-white/5 p-8 relative grayscale hover:grayscale-0 transition-all cursor-pointer group">
              <div className="flex gap-6 items-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/10 overflow-hidden shrink-0 group-hover:border-primary-container transition-colors">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white font-headline">م. أحمد الصالح</h4>
                  <p className="text-slate-500 text-sm mb-2">مؤسس تقني - خبرة ١٠ سنوات</p>
                  <span className="text-primary-container font-data text-[10px] font-black uppercase tracking-widest border border-primary-container/30 px-2 py-0.5">Verified Founder</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
