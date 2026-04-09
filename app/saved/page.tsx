'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function SavedOpportunitiesPage() {
  const savedOpportunities = [
    {
      id: 1,
      title: 'تقنيات "نيوم" للطاقة',
      type: 'Renewable Energy • Series B',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-UpcVNmhqw1-OZDWXYOzwZzU6fXP1N16FhP9BPbvfB949_I4MCEhefiMSujaJ9NJRMLJ98oG8f0Ikz-K1ZRVb4RBFRtJln0QBgLTKF3ITE_2eSpd2_kGcgh0nQMAcRtcHd0jpewqGxlM2ui3yAcdEKmiiAKscchDWbD4cPStn8Lxs9i4Yv8omi3U304CdBHDDuby5oLpY0Z405TDQ2kNaJAwKGhM1kBMcphGKppUfLF4bG2ZsqTvZ0RxKP-cX64WE9_j64y69sWQ',
      aiScore: 98.4,
      progress: 82,
      goal: '$12.5M',
      closesIn: '04d : 12h'
    },
    {
      id: 2,
      title: 'سيبر-سكيور العربية',
      type: 'Cybersecurity • Seed',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR2gOU1NP3RmtHd5zPTLI4k3R7hE3S6jaR702E5eCWFpV0VDFy0kGuyG87WBr3v3WRT1MJzol4jdyAqJnNj3E5suVT3z0xtbXjn3Ko0Mt3BxDJuI2FFpd9G_VoBqJccd1DLjPdrIHKcXGHPIuYtOoWrEFOJr9Kj4VoW4NmlMog015oJiBphLBXhRSxklrhHmGH0oPGFh5xeTv0YhZnGs16L-w_Gt8VPYPiWxT1-VB3SKVaT0l_uO6Q1nwGLJTgLjdZTgFV2ExlQEs',
      aiScore: 92.1,
      progress: 45,
      goal: '$3.2M',
      closesIn: '12d : 08h'
    },
    {
      id: 3,
      title: 'فنتك وايز الخليج',
      type: 'Fintech • Series A',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4ptAMNhry2u4qd6dNn6ecixTZlETtu5CHouAm_x6Z2u0lrOuIZUBMz3-WO1_rqmq87ggiYrPm6pE4y49CFnw8gHnGTk-DJiDxPc3Y_wFs2Sgx7QkNPsqMfMITgM0F9laOyPNcqXy4Sm87ufxi5m3VlYFsvdFxXlO3Z8JYR-5lVoDs2AQkN3KxZZpDBiXTZNhcp0lRH0ywvDC-eQbjDLT6dcMfqsORTIwMBrhBTJBIQZfNUtHfMV-Mu704gi2WsXy9Z3a4r94G42g',
      aiScore: 88.7,
      progress: 61,
      goal: '$25.0M',
      closesIn: '02d : 18h'
    }
  ];

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
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              الفرص المحفوظة
            </h1>
            <p className="font-body text-slate-400 mt-2 max-w-xl text-lg">
              قائمة المراقبة الخاصة بك: صفقات ذكاء اصطناعي منسقة وجاهزة للتنفيذ.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-data text-xs text-slate-500 uppercase font-bold">Sort By:</span>
            <select className="bg-surface-container-high border-none text-xs font-data uppercase text-primary-container focus:ring-0 focus:outline-none py-2 pr-8 pl-4 cursor-pointer">
              <option>Closing Soon</option>
              <option>High AI Score</option>
              <option>Funding Progress</option>
            </select>
          </div>
        </header>

        {/* Opportunity Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {savedOpportunities.map((opp) => (
            <div key={opp.id} className="relative group bg-surface-container-high/40 border border-outline-variant/10 backdrop-blur-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="l-bracket-tr"></div>
              <div className="l-bracket-bl"></div>
              <div className="relative h-48 overflow-hidden">
                <img alt={opp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={opp.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-[#10131a]/80 backdrop-blur-md border border-primary-container/30 px-3 py-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#00ffd1]"></span>
                    <span className="font-headline text-[10px] text-primary-container font-black uppercase tracking-widest">Active Lead</span>
                  </div>
                </div>
                <button className="absolute top-4 right-4 bg-red-500/10 hover:bg-red-500 hover:text-white text-red-500 p-2 transition-all duration-300">
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-white">{opp.title}</h3>
                    <p className="text-[10px] text-slate-400 font-data uppercase">{opp.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-headline text-[10px] text-secondary-container font-bold uppercase mb-1">AI Trust Score</p>
                    <span className="font-data text-2xl font-black text-secondary-container">{opp.aiScore}</span>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-headline uppercase font-bold text-slate-400 mb-2">
                      <span>Target Reached</span>
                      <span className="text-primary-container">{opp.progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-highest">
                      <div className="h-full bg-primary-container shadow-[0_0_10px_#00ffd1]" style={{ width: `${opp.progress}%` }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-slate-500 font-data uppercase">Goal</span>
                    <span className="font-data text-sm text-white">{opp.goal}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] text-slate-500 font-data uppercase">Closes In</span>
                    <span className="font-data text-sm text-tertiary-fixed-dim">{opp.closesIn}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add More Module */}
          <div className="relative group bg-surface-container-low border border-outline-variant/10 p-6 flex flex-col justify-center items-center text-center hover:bg-surface-container-high transition-all">
            <div className="w-16 h-16 rounded-full border border-primary-container/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary-container/50 transition-all">
              <span className="material-symbols-outlined text-primary-container text-4xl">add_circle</span>
            </div>
            <h4 className="font-headline text-lg font-bold text-white uppercase tracking-tight">إضافة المزيد</h4>
            <p className="text-xs text-slate-500 mt-2">تصفح أحدث الفرص في السوق ووسع قائمة مراقبتك.</p>
            <a className="mt-6 font-headline text-[10px] text-primary-container font-black uppercase tracking-widest border-b border-primary-container hover:opacity-70 transition-opacity" href="/opportunities">
              استكشاف السوق
            </a>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-4 px-8 py-4 bg-surface-container-highest/30 border border-outline-variant/20 hover:border-primary-container/50 transition-all clip-button text-sm uppercase font-bold">
            <span className="font-data">Load More Signals</span>
            <span className="material-symbols-outlined text-primary-container group-hover:translate-y-1 transition-transform">keyboard_double_arrow_down</span>
          </button>
        </div>
      </main>
    </div>
  );
}
