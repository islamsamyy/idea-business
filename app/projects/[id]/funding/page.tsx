'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function FundingProgress() {
  const milestones = [
    { title: 'اكتمال الجولة الأولى', status: 'مكتمل', date: '١٢ مارس ٢٠٢٤', amount: '٥٠٠,٠٠٠ ريال' },
    { title: 'التوسع الإقليمي (المرحلة أ)', status: 'قيد التنفيذ', date: 'جاري', amount: '١,٥٠٠,٠٠٠ ريال' },
    { title: 'تطوير نسخة الويب ٣', status: 'مخطط له', date: 'أكتوبر ٢٠٢٤', amount: '٢,٠٠٠,٠٠٠ ريال' },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex relative overflow-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 scanline opacity-5 pointer-events-none"></div>
      
      <DashboardSidebar />

      <div className="flex-grow flex flex-col h-screen relative z-10 w-full overflow-y-auto">
        <Navbar />

        <main className="flex-grow p-6 pt-24 max-w-5xl mx-auto w-full">
          <header className="mb-12">
            <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50">// تتبع الاستثمار</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">تقدم التمويل</h1>
            <p className="text-slate-500">مشروع GreenPulse - جولة تمويلية المرحلة (أ)</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0A1628] border border-white/5 p-8 relative overflow-hidden">
              <div className="l-bracket-tr opacity-20"></div>
              <h3 className="text-lg font-black text-white mb-8 font-headline uppercase tracking-widest">// حالة الجولة الحالية</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-slate-500 font-data text-xs uppercase">المبلغ المجموعة</span>
                  <span className="text-primary-container font-data text-3xl font-black">٨٥٠,٠٠٠ ريال</span>
                </div>
                <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container shadow-[0_0_20px_#00ffd1]" style={{ width: '٤٢.٥%' }}></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-500">
                  <span>الهدف: ٢,٠٠٠,٠٠٠ ريال</span>
                  <span>٤٢.٥٪ مجمع</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0A1628] border border-white/5 p-8 relative overflow-hidden">
              <div className="l-bracket-tr opacity-20"></div>
              <h3 className="text-lg font-black text-white mb-8 font-headline uppercase tracking-widest">// تفاصيل المستثمرين</h3>
              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-data text-3xl font-black">١٤</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">مستثمر مشارك</span>
                </div>
                <div className="flex-grow flex -space-x-reverse space-x-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0A1628] bg-slate-800 overflow-hidden ring-1 ring-white/5 transition-transform hover:-translate-y-1">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-[#0A1628] bg-primary-container flex items-center justify-center text-background font-black text-xs">
                    +٩
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-[#0A1628] border border-white/5 p-8 md:p-12 relative">
            <h3 className="text-xl font-black text-white mb-12 font-headline uppercase tracking-tight">خارطة طريق التمويل</h3>
            
            <div className="space-y-12 relative">
              <div className="absolute top-0 right-7 bottom-0 w-px bg-white/5 -z-10"></div>
              
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-10 items-start group">
                  <div className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${m.status === 'مكتمل' ? 'bg-primary-container border-primary-container text-background shadow-[0_0_20px_#00ffd1]' : m.status === 'قيد التنفيذ' ? 'bg-background border-primary-container text-primary-container animate-pulse' : 'bg-background border-white/5 text-slate-700'}`}>
                    <span className="material-symbols-outlined font-black">
                      {m.status === 'مكتمل' ? 'check' : m.status === 'قيد التنفيذ' ? 'motion_photos_on' : 'pending'}
                    </span>
                  </div>
                  <div className="flex-grow pb-12 border-b border-white/5 group-last:border-0">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
                      <h4 className={`text-xl font-black font-headline ${m.status === 'مكتمل' ? 'text-white' : 'text-slate-400'}`}>{m.title}</h4>
                      <span className="text-[10px] text-slate-500 font-data font-black uppercase tracking-widest">{m.date}</span>
                    </div>
                    <p className="text-primary-container font-data text-sm font-black mb-4">{m.amount}</p>
                    <span className={`text-[10px] font-black px-3 py-1 clip-button border uppercase tracking-widest ${m.status === 'مكتمل' ? 'bg-green-500/10 border-green-500 text-green-500' : m.status === 'قيد التنفيذ' ? 'bg-primary-container/10 border-primary-container text-primary-container' : 'bg-slate-800 border-white/5 text-slate-500'}`}>
                      {m.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
