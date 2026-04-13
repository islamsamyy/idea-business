'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import type { Project } from '@/lib/types';

export function OpportunitiesClient({ initialProjects }: { initialProjects: Project[] }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return initialProjects.filter(opp => {
      const matchesTab = activeTab === 'all' || (activeTab === 'verified' && opp.verified);
      const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           opp.category?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [initialProjects, activeTab, searchQuery]);

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid opacity-10 pointer-events-none"></div>
      <div className="fixed top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent z-20"></div>
      
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <header className="mb-20 animate-fade-in">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="flex-grow max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-primary-container/30 bg-primary-container/5 rounded-full text-[10px] font-black tracking-[0.2em] text-primary-container uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
                </span>
                مشاريع نشطة حالياً
              </div>
              <h1 className="font-headline text-5xl md:text-8xl font-black text-white uppercase tracking-tight mb-8 leading-none">
                استكشف <span className="text-primary-container">المستقبل</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-body leading-relaxed max-w-2xl">
                بوابتك للوصول إلى أكثر المشاريع ابتكاراً في المنطقة العربية، تم فحصها وتدقيقها لضمان أعلى مستويات الجودة والمصداقية.
              </p>
            </div>
            
            <div className="w-full lg:w-auto space-y-4">
              <div className="relative group">
                <input 
                  type="text"
                  placeholder="ابحث عن مشروع أو قطاع..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-[400px] bg-[#0A1628] border border-white/10 p-5 rounded-none focus:border-primary-container outline-none text-white font-body placeholder:text-slate-600 transition-all shadow-2xl"
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-primary-container transition-colors">search</span>
              </div>
              
              <div className="flex gap-4 p-1 bg-white/5 border border-white/10 rounded-none w-full">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`flex-grow px-8 py-3 transition-all font-black text-xs uppercase tracking-widest ${activeTab === 'all' ? 'bg-primary-container text-background font-bold shadow-neon-sm' : 'text-slate-500 hover:text-white'}`}
                >
                  كافة الفرص
                </button>
                <button 
                  onClick={() => setActiveTab('verified')}
                  className={`flex-grow px-8 py-3 transition-all font-black text-xs uppercase tracking-widest ${activeTab === 'verified' ? 'bg-primary-container text-background font-bold shadow-neon-sm' : 'text-slate-500 hover:text-white'}`}
                >
                  متحقق منها فقط
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((opp, i) => (
            <div 
              key={opp.id} 
              className="bg-[#0A1628] border border-white/5 group hover:border-primary-container/30 transition-all duration-700 flex flex-col xl:flex-row relative animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="l-bracket-tr opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="xl:w-[320px] h-72 xl:h-auto overflow-hidden relative">
                <Image 
                  src={opp.img || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600'} 
                  width={600} 
                  height={600} 
                  className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                  alt={opp.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-80"></div>
                
                {opp.verified && (
                  <div className="absolute top-4 right-4 bg-primary-container text-background py-1.5 px-4 text-[10px] font-black clip-button flex items-center gap-1.5 shadow-neon">
                    <span className="material-symbols-outlined text-sm font-black">verified</span>
                    مُتحقّق
                  </div>
                )}
              </div>

              <div className="flex-grow p-10 flex flex-col justify-between relative">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-primary-container font-data text-[10px] font-black uppercase tracking-[0.3em] block">{opp.category || 'تكنولوجي'}</span>
                    <span className="text-slate-700 group-hover:text-primary-container transition-colors cursor-pointer material-symbols-outlined">bookmark_add</span>
                  </div>
                  <h3 className="text-3xl font-black text-white font-headline group-hover:text-primary-container transition-colors line-clamp-2 leading-tight mb-10">{opp.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-10 border-t border-white/5 pt-8">
                    <div className="relative group/stat">
                      <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest block mb-1">التمويل المطلوب</span>
                      <span className="text-white font-data text-2xl font-black">{opp.funding_goal.toLocaleString()} <span className="text-xs text-slate-500 font-body">ريال</span></span>
                      <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary-container group-hover/stat:w-full transition-all duration-500"></div>
                    </div>
                    <div>
                      <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest block mb-1">الحد الأدنى</span>
                      <span className="text-white font-data text-2xl font-black">{opp.min_invest.toLocaleString()} <span className="text-xs text-slate-500 font-body">ريال</span></span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-center">
                  <Link 
                    href={`/opportunities/${opp.id}`} 
                    className="flex-grow bg-white/5 text-white font-black py-5 clip-button text-center hover:bg-primary-container hover:text-background transition-all text-sm group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 uppercase tracking-widest">عرض ملف المشروع</span>
                  </Link>
                  <button className="w-16 h-16 border-2 border-white/5 text-white flex items-center justify-center clip-button hover:border-primary-container hover:text-primary-container transition-all group/fav">
                    <span className="material-symbols-outlined font-black group-hover/fav:scale-125 transition-transform">favorite</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
             <div className="md:col-span-2 text-center py-40 bg-white/[0.02] border border-dashed border-white/10">
               <span className="material-symbols-outlined text-6xl text-slate-700 mb-6">info</span>
               <div className="text-2xl font-black text-slate-500 font-headline uppercase tracking-widest">نأسف، لم يتم العثور على مشاريع تطابق بحثك</div>
               <button onClick={() => {setSearchQuery(''); setActiveTab('all');}} className="mt-8 text-primary-container font-black underline underline-offset-8">إعادة الضبط</button>
             </div>
          )}
        </div>

        {/* Load More Callout */}
        {filteredProjects.length > 0 && (
          <div className="mt-32 text-center relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
            <button className="bg-background px-12 py-5 border border-white/10 text-slate-500 hover:text-primary-container font-black uppercase tracking-[0.4em] text-xs transition-all hover:border-primary-container group">
               باقي الفرص <span className="inline-block group-hover:translate-x-3 transition-transform">→</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
