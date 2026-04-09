'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

export default function InvestorsDirectory() {
  const [search, setSearch] = useState('');
  
  const filters = [
    { label: 'الكل', active: true },
    { label: 'تكنولوجيا مالية', active: false },
    { label: 'صحة رقمية', active: false },
    { label: 'طاقة نظيفة', active: false },
    { label: 'ذكاء اصطناعي', active: false },
  ];

  const investors = [
    {
      name: 'عبدالله الراجحي',
      title: 'مستثمر ملائكي - Angel Investor',
      projects: '١٤ مشروع',
      rating: '٤.٩',
      tags: ['SaaS', 'FinTech'],
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      active: true,
    },
    {
      name: 'سارة القحطاني',
      title: 'رأس مال جريء - VC Advisor',
      projects: '٨ مشاريع',
      rating: '٤.٨',
      tags: ['HealthTech', 'AI'],
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      active: true,
    },
    {
      name: 'محمد التويجري',
      title: 'مستثمر استراتيجي',
      projects: '٢٢ مشروع',
      rating: '٥.٠',
      tags: ['Logistics', 'Real Estate'],
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      active: false,
    },
    {
      name: 'نورة السديري',
      title: 'مستثمرة صناديق',
      projects: '٥ مشاريع',
      rating: '٤.٧',
      tags: ['EdTech', 'E-commerce'],
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      active: true,
    },
    {
      name: 'فهد البنيان',
      title: 'مستثمر تقني متخصص',
      projects: '١١ مشروع',
      rating: '٤.٩',
      tags: ['Cybersecurity', 'Web3'],
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      active: true,
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-secondary-container/5 blur-[120px] rounded-full -z-10"></div>

      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <header className="mb-16">
          <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50">// دليل الشركاء</span>
          <h1 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8">المستثمرون المعتمدون</h1>
          
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#0D192B]/80 backdrop-blur-xl p-4 border border-white/10 rounded-2xl shadow-2xl">
            <div className="relative flex-grow w-full">
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
              <input 
                type="text" 
                placeholder="ابحث عن مستثمر، شركة، أو مجال اهتمام..." 
                className="w-full bg-slate-900/50 border border-white/5 pr-12 pl-6 py-4 rounded-xl text-white focus:border-primary-container/50 focus:outline-none transition-all font-body"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-3 overflow-x-auto w-full md:w-auto no-scrollbar py-2">
              {filters.map((filter, i) => (
                <button 
                  key={i} 
                  className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all font-bold text-sm ${filter.active ? 'bg-primary-container text-background shadow-[0_0_20px_rgba(0,255,209,0.3)]' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investors.map((investor, i) => (
            <div key={i} className="group relative bg-[#0A1628] border border-white/5 p-8 overflow-hidden hover:border-primary-container/30 transition-all duration-500 hover:-translate-y-2">
              <div className="l-bracket-tr opacity-20"></div>
              <div className="l-bracket-bl opacity-20"></div>
              
              <div className="flex justify-between items-start mb-8 relative">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary-container/50 transition-colors">
                    <img src={investor.img} alt={investor.name} className="w-full h-full object-cover" />
                  </div>
                  {investor.active && (
                    <div className="absolute top-1 right-1 w-5 h-5 bg-primary-container border-4 border-[#0A1628] rounded-full shadow-[0_0_10px_#00ffd1]"></div>
                  )}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-primary-container font-data mb-1">
                    <span className="material-symbols-outlined text-sm">stars</span>
                    <span className="text-xl font-black">{investor.rating}</span>
                  </div>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{investor.projects}</span>
                </div>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-black text-white mb-2 font-headline">{investor.name}</h3>
                <p className="text-slate-400 text-sm mb-6 font-body">{investor.title}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {investor.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] uppercase font-data font-black bg-primary-container/10 text-primary-container px-3 py-1 border border-primary-container/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href={`/investors/${i}`} className="flex-grow bg-white/5 text-white font-black text-sm py-4 text-center clip-button hover:bg-white/10 transition-all">
                    الملف الشخصي
                  </Link>
                  <button className="w-14 h-14 bg-primary-container text-background flex items-center justify-center clip-button hover:brightness-110 active:scale-90 transition-all">
                    <span className="material-symbols-outlined font-black">send</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Load More Mock */}
          <div className="lg:col-span-3 py-12 flex justify-center">
            <button className="flex items-center gap-4 text-slate-500 hover:text-primary-container font-black uppercase tracking-widest transition-all">
              <span className="w-12 h-px bg-current opacity-20"></span>
              تحميل المزيد من المستثمرين
              <span className="w-12 h-px bg-current opacity-20"></span>
            </button>
          </div>
        </div>
      </main>

      {/* Trust Message */}
      <section className="bg-primary-container/5 py-12 border-y border-primary-container/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center border border-primary-container/20">
              <span className="material-symbols-outlined text-primary-container text-3xl">verified</span>
            </div>
            <div>
              <h4 className="text-xl font-black text-white mb-1">خضع جميع المستثمرين لعملية تحقق كاملة</h4>
              <p className="text-slate-500 text-sm">نحن نضمن جدية المستثمرين وموثوقية مصادر تمويلهم عبر نظام KYC متطور.</p>
            </div>
          </div>
          <Link href="/register?type=investor" className="bg-white text-background font-black px-8 py-4 clip-button hover:bg-primary-container transition-all">
            انضم كمستثمر معتمد
          </Link>
        </div>
      </section>
    </div>
  );
}
