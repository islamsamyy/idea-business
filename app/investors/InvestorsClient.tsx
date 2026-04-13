'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import type { Profile } from '@/lib/types';

export function InvestorsClient({ initialInvestors }: { initialInvestors: Profile[] }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'FinTech', 'HealthTech', 'CleanEnergy', 'AI', 'SaaS'];

  const filteredInvestors = useMemo(() => {
    return initialInvestors.filter(inv => {
      const matchesSearch = !search || 
        inv.full_name?.toLowerCase().includes(search.toLowerCase()) || 
        inv.bio?.toLowerCase().includes(search.toLowerCase()) ||
        inv.interests?.some(i => i.toLowerCase().includes(search.toLowerCase()));
      
      const matchesCategory = activeCategory === 'All' || 
        inv.interests?.some(i => i.toLowerCase() === activeCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [initialInvestors, search, activeCategory]);

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 hex-grid opacity-10 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-[600px] bg-gradient-to-b from-secondary-container/10 via-background to-transparent pointer-events-none -z-10"></div>
      
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <header className="mb-20 animate-fade-in text-right">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="flex-grow max-w-4xl">
              <span className="font-data text-xs text-primary-container block mb-4 tracking-[0.4em] uppercase opacity-60 italic">Elite Network</span>
              <h1 className="font-headline text-5xl md:text-8xl font-black text-white uppercase tracking-tight mb-8 leading-none">
                أطرب <span className="text-primary-container italic underline decoration-white/10 decoration-8 underline-offset-8">المستثمرين</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-body leading-relaxed max-w-2xl">
                تواصل مع نخبة المستثمرين الملائكيين وصناديق الاستثمار الجريء الذين يبحثون عن الأفكار المميزة في المنطقة العربية.
              </p>
            </div>
            
            <div className="w-full lg:w-[450px] space-y-6">
               <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-container to-secondary-container rounded-none blur opacity-20 group-focus-within:opacity-100 transition duration-1000"></div>
                  <input 
                    type="text"
                    placeholder="ابحث عن اسم، تخصص، أو شركة..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="relative w-full bg-[#0A1628] border border-white/5 p-6 rounded-none focus:border-primary-container focus:ring-0 outline-none text-white font-body placeholder:text-slate-600 transition-all text-lg shadow-2xl"
                  />
                  <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-primary-container transition-colors">person_search</span>
               </div>
            </div>
          </div>
          
          <div className="mt-12 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-none whitespace-nowrap transition-all font-black text-xs uppercase tracking-widest border border-white/5 ${activeCategory === cat ? 'bg-primary-container text-background font-bold shadow-neon-sm' : 'bg-[#0A1628] text-slate-500 hover:text-white'}`}
              >
                {cat === 'All' ? 'كافة التخصصات' : cat}
              </button>
            ))}
          </div>
        </header>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredInvestors.map((investor, i) => (
            <div 
              key={investor.id || i} 
              className="group relative bg-[#0A1628] border border-white/5 p-10 overflow-hidden hover:border-primary-container/30 transition-all duration-700 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="l-bracket-tr opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="l-bracket-bl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-primary-container/20 to-transparent scale-0 group-hover:scale-100 transition-transform duration-1000"></div>
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="relative">
                  <div className="w-24 h-24 rounded-none overflow-hidden border border-white/10 p-1 group-hover:border-primary-container/50 transition-all duration-700">
                    <Image 
                      width={96} 
                      height={96} 
                      src={investor.avatar_url || `https://api.dicebear.com/7.x/bottts/svg?seed=${investor.full_name}`} 
                      alt={investor.full_name || "مستثمر"} 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    />
                  </div>
                  {investor.kyc_status === 'verified' && (
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-container text-background flex items-center justify-center rounded-none shadow-neon" title="مُحقق مالياً">
                       <span className="material-symbols-outlined text-sm font-black">verified_user</span>
                    </div>
                  )}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-primary-container font-data mb-2">
                    <span className="material-symbols-outlined text-sm">social_leaderboard</span>
                    <span className="text-2xl font-black">{investor.tier === 'premium' ? '5.0' : '4.8'}</span>
                  </div>
                  <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] font-data">{investor.tier === 'enterprise' ? 'Institutional' : 'Angel'}</span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-4 font-headline group-hover:text-primary-container transition-colors leading-tight">
                  {investor.full_name || 'مستثمر غير معروف'}
                </h3>
                <p className="text-slate-500 text-sm mb-8 font-body leading-relaxed h-12 overflow-hidden line-clamp-2 italic">
                  "{investor.bio || 'مستثمر استراتيجي يركز على دعم رواد الأعمال الشباب في المنطقة العربية وتنمية قدراتهم التقنية.'}"
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10 h-8 overflow-hidden">
                  {(investor.interests || ['Tech', 'AI', 'FinTech']).map((tag: string, j: number) => (
                    <span key={j} className="text-[9px] uppercase font-data font-black bg-white/5 text-slate-400 px-3 py-1.5 border border-white/5 hover:border-primary-container/30 hover:text-primary-container transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href={`/investors/${investor.id}`} className="flex-grow bg-white/5 text-white font-black text-xs py-5 text-center clip-button hover:bg-white/10 transition-all uppercase tracking-[0.2em]">
                    عرض البيانات
                  </Link>
                  <Link href={`/messages/new?user=${investor.id}`} className="w-16 h-16 bg-primary-container text-background flex items-center justify-center clip-button hover:shadow-neon hover:scale-105 active:scale-95 transition-all">
                    <span className="material-symbols-outlined font-black">forum</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filteredInvestors.length === 0 && (
             <div className="lg:col-span-3 text-center py-32 bg-white/[0.02] border border-dashed border-white/10">
               <span className="material-symbols-outlined text-6xl text-slate-800 mb-6">group_off</span>
               <div className="text-2xl font-black text-slate-600 font-headline uppercase tracking-widest">لم نعثر على مستثمرين بمواصفاتك</div>
               <button onClick={() => {setSearch(''); setActiveCategory('All');}} className="mt-8 text-primary-container font-black underline underline-offset-8">تنظيف البحث</button>
             </div>
          )}
        </div>
      </main>

      {/* Trust Message Footer */}
      <section className="py-24 bg-[#0A111F] relative overflow-hidden text-right border-t border-white/5">
        <div className="absolute top-0 right-0 w-full h-full hex-grid opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-white mb-6 font-headline leading-tight">تطبيق أعلى معايير <span className="text-primary-container">الثقة الرقمية</span></h2>
            <p className="text-slate-400 text-lg font-body leading-relaxed">
              جميع المستثمرين في منصتنا يخضعون لعمليات تحقق صارمة من الملاءة المالية ومصادر التمويل لضمان بيئة عمل احترافية وآمنة للجميع.
            </p>
          </div>
          <Link href="/register?type=investor" className="bg-white text-background font-black px-12 py-6 clip-button text-xl hover:bg-primary-container transition-all shadow-xl active:scale-95">
            سجل كمستثمر الآن
          </Link>
        </div>
      </section>
    </div>
  );
}
