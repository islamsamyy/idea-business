'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function FounderDashboardPage() {
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="text-right">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-white uppercase tracking-tight">لوحة تحكم صاحب الفكرة</h2>
            <p className="text-slate-400 font-body mt-2 max-w-md">مرحباً بك مجدداً. إليك نظرة شاملة على أداء مشروعك الحالي وتفاعلات المستثمرين.</p>
          </div>
          <div className="flex gap-4">
            <button className="clip-button bg-surface-container-high/40 backdrop-blur-md px-6 py-3 border border-outline-variant/10 text-primary-container font-headline font-bold flex items-center gap-2 hover:bg-surface-container-high transition-all uppercase tracking-widest text-xs">
              <span className="material-symbols-outlined text-sm">edit</span>
              <span>تعديل الفكرة</span>
            </button>
            <button className="clip-button bg-primary-container text-background px-6 py-3 font-headline font-black flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_24px_rgba(0,255,209,0.15)] uppercase tracking-widest text-xs">
              <span className="material-symbols-outlined text-sm">bar_chart</span>
              <span>عرض التقرير المفصل</span>
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Main Project Card (Large) */}
          <div className="col-span-12 lg:col-span-8 relative bg-surface-container-low/40 backdrop-blur-md p-8 border border-outline-variant/10 overflow-hidden group">
            <div className="l-bracket-tr"></div>
            <div className="l-bracket-bl"></div>
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="w-full md:w-1/3 aspect-square bg-[#0a0e15] border border-primary-container/20 relative overflow-hidden">
                <img alt="Project" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5p6jddd4OQSxg67LnQIVhUda0Y2pOr_AjPkrJ93BXz1EIA4ZsXAheymzHLRcVk0QN46J4PREB4ttiLvyT2h4ygvu7PvvhRcYAFNDF99ZJ4N0ExGJx-PiixJcbZXwEoYgkPEfVGFLfRkTB3hWj6de8zoUxAYlj6OcMwYXzalSNjLFjk8GohCvRygHH_mA6tbF1vYTDzX8n-Gc1hFZq3aPP90CKWKd5eW5-LUn3qCj6R4CihvHKjgf2a3426DOi7MzCuIos9tVZK7M"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-primary-container/10 text-primary-container text-[10px] px-3 py-1 border border-primary-container/30 font-headline font-black uppercase tracking-widest">قيد التطوير</span>
                </div>
              </div>
              <div className="flex-1 text-right">
                <h3 className="font-headline text-2xl font-bold text-primary-container mb-4 uppercase tracking-tight">منصة مزادات العقارات بالذكاء الاصطناعي</h3>
                <p className="text-slate-400 font-body leading-relaxed mb-6">
                  نظام ذكي يستخدم خوارزميات التعلم الآلي للتنبؤ بأسعار العقارات وتنظيم المزادات الرقمية بشكل مؤتمت بالكامل، مما يضمن الشفافية والعدالة لجميع الأطراف.
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-outline-variant/10 pt-6">
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-headline font-bold mb-1">مشاهدات الملف</p>
                    <div className="flex items-end justify-end gap-2">
                      <span className="text-primary-container text-[10px] mb-1 font-data font-bold">+12%</span>
                      <span className="font-data text-2xl font-black text-white">1,248</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-headline font-bold mb-1">اهتمام المستثمرين</p>
                    <div className="flex items-end justify-end gap-2 text-right">
                      <span className="text-primary-container text-[10px] mb-1 font-data font-bold">+5</span>
                      <span className="font-data text-2xl font-black text-white">84</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-headline font-bold mb-1">تقييم AI</p>
                    <div className="flex items-end justify-end gap-2">
                      <span className="text-secondary-container text-[10px] mb-1 font-data font-bold">TOP 3%</span>
                      <span className="font-data text-2xl font-black text-secondary-container">A+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Gauge Card */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-high/40 backdrop-blur-md p-8 border border-outline-variant/10 relative overflow-hidden flex flex-col items-center justify-center group">
            <div className="l-bracket-tr"></div>
            <div className="l-bracket-bl"></div>
            <h4 className="font-headline text-slate-400 text-sm font-bold mb-8 uppercase tracking-widest">مقياس نجاح الاستثمار</h4>
            <div className="relative w-48 h-48 mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-background" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="4"></circle>
                <circle className="text-primary-container" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="138" strokeWidth="8" style={{ filter: 'drop-shadow(0 0 8px #00ffd1)' }}></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-data text-4xl font-black text-primary-container">88%</span>
                <span className="text-[10px] text-slate-500 font-headline font-black uppercase tracking-widest">Recommended</span>
              </div>
            </div>
            <p className="text-center text-sm text-slate-400 font-body">تحليل AI يشير إلى جاهزية عالية للتمويل بنسبة نمو متوقعة 40% سنوياً.</p>
          </div>

          {/* Latest Activity Feed */}
          <div className="col-span-12 lg:col-span-7 bg-surface-container-low/40 backdrop-blur-md p-6 border border-outline-variant/10 relative">
            <div className="flex items-center justify-between mb-6">
              <a className="text-[10px] text-slate-500 hover:text-primary-container underline underline-offset-4 uppercase font-headline font-black" href="#">عرض الكل</a>
              <h4 className="font-headline font-bold text-primary-container flex items-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined">history</span>
                آخر التحديثات
              </h4>
            </div>
            <div className="space-y-4">
              {[
                { title: 'طلب تواصل من صندوق الريادة', meta: 'منذ ساعتين • استثمار محتمل', icon: 'contact_mail', color: 'text-secondary-container', bg: 'bg-secondary-container/10' },
                { title: 'تم تحديث الـ AI Score', meta: 'منذ 5 ساعات • تحسين في معايير المخاطر', icon: 'auto_awesome', color: 'text-primary-container', bg: 'bg-primary-container/10' },
                { title: 'اكتمال التحقق من الهوية العقارية', meta: 'أمس • تم توثيق الأصول', icon: 'verified', color: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim/10' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-surface-container-high/30 hover:bg-surface-container-high transition-colors group">
                  <span className="material-symbols-outlined text-slate-600 group-hover:text-primary-container transition-colors">arrow_forward_ios</span>
                  <div className="flex-1 text-right">
                    <p className="font-headline text-sm font-bold text-white uppercase tracking-tight">{item.title}</p>
                    <p className="text-[11px] text-slate-500 font-body">{item.meta}</p>
                  </div>
                  <div className={`w-10 h-10 ${item.bg} flex items-center justify-center border border-white/5`}>
                    <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insight Card */}
          <div className="col-span-12 lg:col-span-5 bg-surface-container-high p-6 relative flex flex-col justify-between group overflow-hidden border border-outline-variant/10">
            <div className="absolute top-0 left-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">trending_up</span>
            </div>
            <div className="text-right">
              <span className="bg-secondary-container text-white text-[10px] font-headline font-black px-3 py-1 mb-4 inline-block uppercase tracking-widest">رؤية استثمارية</span>
              <h4 className="font-headline text-xl font-bold text-white mb-4 uppercase tracking-tight">نشاط سوق العقار الرقمي في ارتفاع</h4>
              <p className="text-slate-400 text-sm font-body leading-relaxed mb-6">تشير البيانات الحالية إلى زيادة بنسبة 18% في عمليات الشراء عبر المنصات الرقمية في منطقة الخليج خلال الربع الأخير.</p>
            </div>
            <div className="bg-background/40 backdrop-blur-md p-4 border-r-2 border-secondary-container text-right">
              <p className="text-secondary-container font-black font-data text-2xl mb-1">+18.5%</p>
              <p className="text-[10px] text-slate-500 font-headline font-bold uppercase tracking-widest border-t border-white/5 pt-1">فرصة التوسع المتاحة لمشروعك</p>
            </div>
          </div>
        </div>

        {/* Footer Stats Bar */}
        <div className="mt-12 bg-surface-container-lowest/50 border border-outline-variant/10 p-6 flex flex-wrap justify-between items-center gap-8 backdrop-blur-md">
          <div className="flex gap-8 order-2 md:order-1">
            <div className="text-center">
              <p className="text-[10px] text-slate-500 mb-1 font-headline font-bold uppercase">رأس المال المطلوب</p>
              <p className="font-data font-black text-primary-container">$2.5M</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-slate-500 mb-1 font-headline font-bold uppercase">الوثائق المرفوعة</p>
              <p className="font-data font-black text-white">08</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-slate-500 mb-1 font-headline font-bold uppercase">إجمالي النقاشات</p>
              <p className="font-data font-black text-white">12</p>
            </div>
          </div>
          <div className="flex items-center gap-6 order-1 md:order-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-sm">schedule</span>
              <span className="font-data text-[10px] text-slate-400">LAST SYNC: 14:32:01</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00ffd1]"></span>
              <span className="font-headline text-[10px] font-black text-slate-400 uppercase tracking-widest">حالة النظام: متصل</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
