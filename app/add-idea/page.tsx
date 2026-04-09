'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function AddIdeaPage() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-10"></div>
      
      <Navbar />
      <DashboardSidebar />

      {/* Main Content Area */}
      <main className="xl:mr-64 pt-32 pb-32 px-6 max-w-4xl mx-auto z-10 relative">
        {/* Breadcrumbs */}
        <div className="flex items-center justify-end gap-2 text-xs text-slate-500 mb-6">
          <span className="text-primary-container font-headline font-bold uppercase tracking-widest">إضافة فكرة جديدة</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="hover:text-primary-container cursor-pointer transition-colors font-headline font-bold uppercase tracking-widest">المشاريع</span>
        </div>

        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6 text-right w-full">
          <div className="hidden lg:block text-right self-end">
            <span className="text-xs text-slate-500 block mb-1 font-headline font-bold uppercase tracking-widest">معرف المعاملة</span>
            <span className="font-data text-primary-container text-sm">TX-8829-IDEA</span>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-headline font-black text-white mb-2 tracking-tight uppercase">أضف فكرتك الاستثمارية</h1>
            <p className="text-slate-400 text-lg font-body">قم بتحويل رؤيتك إلى واقع رقمي مدعوم بالذكاء الاصطناعي</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2"></div>
          <div className="relative flex justify-between items-center">
            {/* Step 3 */}
            <div className="flex flex-col items-center gap-3 relative z-10">
              <div className="w-12 h-12 bg-[#0a0e15] border-2 border-outline-variant/30 text-slate-500 flex items-center justify-center font-black font-data">3</div>
              <span className="text-sm font-headline font-black text-slate-500 uppercase tracking-widest">الملفات</span>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center gap-3 relative z-10">
              <div className="w-12 h-12 bg-[#0a0e15] border-2 border-outline-variant/30 text-slate-500 flex items-center justify-center font-black font-data">2</div>
              <span className="text-sm font-headline font-black text-slate-500 uppercase tracking-widest">الأرقام</span>
            </div>
            {/* Step 1: Active */}
            <div className="flex flex-col items-center gap-3 relative z-10">
              <div className="w-12 h-12 bg-primary-container text-background flex items-center justify-center font-black font-data shadow-[0_0_15px_#00ffd1]">1</div>
              <span className="text-sm font-headline font-black text-primary-container uppercase tracking-widest">بيانات المشروع</span>
            </div>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/15 relative p-10 group shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          {/* Decorative L-Brackets */}
          <div className="l-bracket-tr"></div>
          <div className="l-bracket-bl"></div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Row 1: Idea Name & Sector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group/field">
                <label className="absolute -top-3 right-4 px-2 bg-surface-container-low text-[10px] font-headline font-black text-primary-container uppercase tracking-[0.2em] z-10">اسم الفكرة</label>
                <input className="w-full bg-transparent border border-outline-variant/50 focus:border-primary-container focus:ring-0 px-5 py-4 text-white font-body transition-all placeholder:text-slate-700 text-right" placeholder="مثال: تطبيق التداول الذكي" type="text"/>
              </div>
              <div className="relative group/field">
                <label className="absolute -top-3 right-4 px-2 bg-surface-container-low text-[10px] font-headline font-black text-primary-container uppercase tracking-[0.2em] z-10">القطاع</label>
                <select className="w-full bg-transparent border border-outline-variant/50 focus:border-primary-container focus:ring-0 px-5 py-4 text-white font-body transition-all appearance-none cursor-pointer text-right">
                  <option disabled selected className="bg-background">اختر القطاع المناسب</option>
                  <option value="fintech" className="bg-background">التكنولوجيا المالية (FinTech)</option>
                  <option value="realestate" className="bg-background">العقارات</option>
                  <option value="ai" className="bg-background">الذكاء الاصطناعي</option>
                  <option value="health" className="bg-background">الرعاية الصحية</option>
                </select>
                <span className="material-symbols-outlined absolute left-4 top-4 text-slate-500 pointer-events-none group-focus-within/field:text-primary-container transition-colors">expand_more</span>
              </div>
            </div>

            {/* Row 2: Short Description */}
            <div className="relative group/field">
              <label className="absolute -top-3 right-4 px-2 bg-surface-container-low text-[10px] font-headline font-black text-primary-container uppercase tracking-[0.2em] z-10">وصف مختصر</label>
              <div className="relative">
                <textarea className="w-full bg-transparent border border-outline-variant/50 focus:border-primary-container focus:ring-0 px-5 py-4 text-white font-body transition-all placeholder:text-slate-700 min-h-[150px] text-right" placeholder="اشرح فكرتك بإيجاز للمستثمرين..."></textarea>
                <button className="absolute bottom-4 left-4 flex items-center gap-2 bg-secondary-container/10 hover:bg-secondary-container/30 text-secondary-container border border-secondary-container/50 px-3 py-1.5 transition-all clip-button text-[10px] font-headline font-black uppercase tracking-widest" type="button">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  <span>AI Optimize</span>
                </button>
              </div>
            </div>

            {/* Row 3: Funding Required */}
            <div className="relative group/field">
              <label className="absolute -top-3 right-4 px-2 bg-surface-container-low text-[10px] font-headline font-black text-primary-container uppercase tracking-[0.2em] z-10">التمويل المطلوب (USD)</label>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative flex-1 w-full text-right">
                  <input className="w-full bg-transparent border border-outline-variant/50 focus:border-primary-container focus:ring-0 px-5 py-4 text-primary-container font-data text-2xl transition-all text-right pr-20" type="text" defaultValue="500,000.00"/>
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-700 font-data">USD</span>
                </div>
                <div className="w-full md:w-64 h-20 bg-background/50 border border-outline-variant/10 flex flex-col justify-center items-center backdrop-blur-md">
                  <span className="text-[10px] text-slate-500 font-headline font-bold uppercase tracking-widest mb-1">نقاط التقييم الأولي</span>
                  <span className="font-data text-tertiary-fixed-dim text-xl">7.8 / 10</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 flex justify-between items-center">
              <button className="bg-primary-container hover:bg-primary-fixed text-background font-headline font-black px-10 py-4 clip-button transition-all flex items-center gap-3 uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(0,255,209,0.2)]" type="submit">
                <span>الخطوة التالية</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="text-slate-500 hover:text-white transition-colors font-headline font-black px-6 py-3 flex items-center gap-2 uppercase tracking-widest text-xs" type="button">
                <span>إلغاء</span>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-container-low/40 backdrop-blur-md p-6 border-r-4 border-primary-container border border-outline-variant/10 text-right">
            <span className="text-[10px] text-slate-500 font-headline font-black uppercase tracking-widest block mb-1">المستثمرون النشطون</span>
            <span className="font-data text-white text-2xl">1,284</span>
          </div>
          <div className="bg-surface-container-low/40 backdrop-blur-md p-6 border-r-4 border-secondary-container border border-outline-variant/10 text-right">
            <span className="text-[10px] text-slate-500 font-headline font-black uppercase tracking-widest block mb-1">إجمالي التمويلات</span>
            <span className="font-data text-white text-2xl">$4.2M</span>
          </div>
          <div className="bg-surface-container-low/40 backdrop-blur-md p-6 border-r-4 border-tertiary-fixed-dim border border-outline-variant/10 text-right">
            <span className="text-[10px] text-slate-500 font-headline font-black uppercase tracking-widest block mb-1">نسبة النجاح المتوقعة</span>
            <span className="font-data text-white text-2xl">84%</span>
          </div>
        </div>
      </main>
    </div>
  );
}
