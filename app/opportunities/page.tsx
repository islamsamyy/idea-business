'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

export default function OpportunitiesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const opportunities = [
    {
      id: 1,
      title: 'نظام إدارة الطاقة الذكي - GreenPulse',
      category: 'طاقة ونظم تحكم',
      target: '٢,٠٠٠,٠٠٠ ريال',
      minInvest: '٢٥,٠٠٠ ريال',
      roi: '١٨٪ سنوياً',
      verified: true,
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
    },
    {
      id: 2,
      title: 'منصة الحوسبة اللامركزية - NodeLink',
      category: 'تكنولوجيا الويب ٣',
      target: '٥,٥٠٠,٠٠٠ ريال',
      minInvest: '٥٠,٠٠٠ ريال',
      roi: '٢٤٪ سنوياً',
      verified: false,
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600',
    },
    {
      id: 3,
      title: 'تطبيق التشخيص الصحي الذكي - BioScan',
      category: 'الصحة الرقمية',
      target: '١,٢٠٠,٠٠٠ ريال',
      minInvest: '١٠,٠٠٠ ريال',
      roi: '١٥٪ سنوياً',
      verified: true,
      img: 'https://images.unsplash.com/photo-1576091160550-217359971f8b?w=600',
    },
    {
      id: 4,
      title: 'حلول اللوجستيات الذكية - FlashLog',
      category: 'سلاسل الإمداد',
      target: '٣,٨٠٠,٠٠٠ ريال',
      minInvest: '٤٠,٠٠٠ ريال',
      roi: '١٢٪ سنوياً',
      verified: true,
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none"></div>
      
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex-grow">
              <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50">// استكشف المحفظة</span>
              <h1 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">فرص استثمارية</h1>
              <p className="text-slate-500 max-w-xl">اكتشف مشاريع ابتكارية خضعت لعملية فحص دقيقة، جاهزة للتمويل والنمو المتسارع.</p>
            </div>
            
            <div className="flex gap-4 p-2 bg-white/5 border border-white/10 rounded-2xl w-full md:w-auto">
              <button 
                onClick={() => setActiveTab('all')}
                className={`flex-grow md:shrink-0 px-8 py-3 rounded-xl transition-all font-black text-sm uppercase tracking-widest ${activeTab === 'all' ? 'bg-primary-container text-background shadow-[0_0_20px_#00ffd1]' : 'text-slate-500 hover:text-white'}`}
              >
                الكل
              </button>
              <button 
                onClick={() => setActiveTab('verified')}
                className={`flex-grow md:shrink-0 px-8 py-3 rounded-xl transition-all font-black text-sm uppercase tracking-widest ${activeTab === 'verified' ? 'bg-primary-container text-background shadow-[0_0_20px_#00ffd1]' : 'text-slate-500 hover:text-white'}`}
              >
                متحقق منها
              </button>
            </div>
          </div>
        </header>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opp) => (
            <div key={opp.id} className="bg-[#0A1628] border border-white/5 group hover:border-primary-container/30 transition-all duration-500 flex flex-col xl:flex-row overflow-hidden">
              <div className="xl:w-64 h-64 xl:h-auto overflow-hidden relative">
                <img src={opp.img} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt={opp.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent opacity-60"></div>
                {opp.verified && (
                  <div className="absolute top-4 right-4 bg-secondary-container text-background py-1 px-3 text-[10px] font-black clip-button flex items-center gap-1 shadow-[0_0_15px_rgba(0,184,212,0.3)]">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    مُتحقّق
                  </div>
                )}
              </div>

              <div className="flex-grow p-8 flex flex-col justify-between">
                <div>
                  <span className="text-primary-container font-data text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">{opp.category}</span>
                  <h3 className="text-2xl font-black text-white font-headline group-hover:text-primary-container transition-colors line-clamp-2 leading-tight mb-8">{opp.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-y-6 mb-8 border-t border-white/5 pt-6">
                    <div>
                      <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest block mb-1">التمويل المطلوب</span>
                      <span className="text-white font-data text-xl font-black">{opp.target}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest block mb-1">الحد الأدنى</span>
                      <span className="text-white font-data text-xl font-black">{opp.minInvest}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest block mb-1">العائد المتوقع</span>
                      <span className="text-secondary-fixed-dim font-data text-xl font-black">{opp.roi}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href={`/opportunities/${opp.id}`} className="flex-grow bg-white/5 text-white font-black py-4 clip-button text-center hover:bg-white/10 transition-all">تفاصيل المشروع</Link>
                  <button className="w-14 h-14 bg-primary-container text-background flex items-center justify-center clip-button hover:brightness-110 active:scale-90 transition-all shadow-[0_0_20px_rgba(0,255,209,0.1)]">
                    <span className="material-symbols-outlined font-black">favorite</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-4 text-slate-500 hover:text-primary-container font-black uppercase tracking-widest transition-all">
            <span className="w-16 h-px bg-current opacity-20"></span>
            استعراض المزيد من الفرص
            <span className="w-16 h-px bg-current opacity-20"></span>
          </button>
        </div>
      </main>
    </div>
  );
}
