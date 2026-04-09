'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

export default function OnboardingPage() {
  const [role, setRole] = useState<'founder' | 'investor' | null>(null);

  const roles = [
    {
      id: 'founder',
      title: 'مؤسس / صاحب فكرة',
      desc: 'ابحث عن تمويل أو شريك تقني لمشروعك ابحث عن تمويل أو شريك تقني لمشروعك.',
      icon: 'rocket_launch',
      color: 'primary-container',
    },
    {
      id: 'investor',
      title: 'مستثمر معتمد',
      desc: 'اكتشف فرصاً استثمارية واعدة واكتشف فرصاً استثمارية واعدة واكتشف.',
      icon: 'account_balance',
      color: 'secondary-fixed-dim',
    },
  ];

  const interests = [
    'التكنولوجيا المالية', 'الذكاء الاصطناعي', 'الطاقة المستدامة', 
    'الصحة الرقمية', 'سلاسل الإمداد', 'الأمن السيبراني', 'التجارة الإلكترونية'
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none"></div>
      
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 max-w-5xl">
        <header className="mb-16 text-center">
          <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50">// مرحباً بك في المستقبل</span>
          <h1 className="font-headline text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">لنبدأ رحلتك</h1>
          <p className="text-slate-500 max-w-xl mx-auto">أجب على بعض الأسئلة لنخصص لك التجربة الأمثل في IDEA BUSINESS.</p>
        </header>

        {/* Role Selection */}
        <section className="mb-20">
          <h3 className="text-xl font-black text-white mb-8 font-headline text-center uppercase tracking-widest">// اختر هويتك</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((r) => (
              <button 
                key={r.id}
                onClick={() => setRole(r.id as any)}
                className={`relative bg-[#0A1628] p-10 border transition-all duration-500 text-right group ${role === r.id ? `border-${r.color} shadow-[0_0_40px_rgba(0,255,209,0.1)]` : 'border-white/5 hover:border-white/10'}`}
              >
                <div className="l-bracket-tr opacity-20"></div>
                <div className={`absolute top-0 right-0 w-1 h-full bg-${r.color} transition-all duration-500 ${role === r.id ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <span className={`material-symbols-outlined text-5xl mb-6 block text-${r.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{r.icon}</span>
                <h4 className="text-2xl font-black text-white mb-4 font-headline uppercase">{r.title}</h4>
                <p className="text-slate-500 font-body leading-relaxed">{r.desc}</p>
                
                {role === r.id && (
                  <div className="absolute top-4 left-4">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Interests Selection */}
        <section className={`transition-all duration-1000 ${role ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <h3 className="text-xl font-black text-white mb-8 font-headline text-center uppercase tracking-widest">// مجالات اهتمامك</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {interests.map((interest, i) => (
              <button 
                key={i}
                className="px-6 py-3 border border-white/10 rounded-full text-slate-400 font-bold hover:border-primary-container hover:text-primary-container transition-all text-sm whitespace-nowrap"
              >
                {interest}
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <Link 
              href={role === 'investor' ? '/dashboard/investor' : '/dashboard/founder'}
              className="bg-primary-container text-background font-black px-12 py-5 clip-button text-xl shadow-[0_0_30px_rgba(0,255,209,0.2)] hover:scale-105 active:scale-95 transition-all"
            >
              إكمال الإعداد
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
