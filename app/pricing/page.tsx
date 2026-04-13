'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'الأساسية',
      price: billing === 'monthly' ? '٠' : '٠',
      desc: 'للمبتدئين وأصحاب الأفكار في مرحلتها الأولى.',
      features: ['رفع ٣ أفكار شهرياً', 'لوحة تحكم أساسية', 'تواصل محدود مع المستثمرين', 'حماية NDA أساسية'],
      cta: 'ابدأ الآن',
      featured: false,
    },
    {
      name: 'الاحترافية',
      price: billing === 'monthly' ? '٢٩٩' : '٢٤٩٩',
      desc: 'للمشاريع الجادة التي تبحث عن نمو سريع وتمويل.',
      features: ['رفع غير محدود للأفكار', 'تحليلات AI متقدمة', 'أولوية الظهور للمستثمرين', 'دعم قانوني متخصص', 'تحقق KYC سريع'],
      cta: 'اشترك الآن',
      featured: true,
    },
    {
      name: 'المستثمر المعتمَد',
      price: billing === 'monthly' ? '٩٩٩' : '٧٩٩٩',
      desc: 'حصرياً للمستثمرين الأفراد وصناديق رأس المال.',
      features: ['وصول كامل لقاعدة البيانات', 'تنبيهات الفرص بالذكاء الاصطناعي', 'تقارير فحص نافي للجهالة', 'عضوية نادي المستثمرين'],
      cta: 'انضم كمستثمر',
      featured: false,
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 scanline opacity-5 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-secondary-container/10 blur-[150px] rounded-full -z-10"></div>

      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <header className="mb-20 text-center">
          <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50">{/* // استثمار في مستقبلك */}</span>
          <h1 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8">خطط العضوية</h1>
          
          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <span className={`text-sm font-bold transition-colors ${billing === 'monthly' ? 'text-primary-container' : 'text-slate-500'}`}>شهري</span>
            <button 
              onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
              className="w-16 h-8 bg-white/5 border border-white/10 rounded-full relative p-1 transition-all"
            >
              <div className={`w-6 h-6 bg-primary-container rounded-full transition-all duration-300 ${billing === 'yearly' ? 'mr-8' : 'mr-0'}`}></div>
            </button>
            <div className="flex items-center gap-3">
              <span className={`text-sm font-bold transition-colors ${billing === 'yearly' ? 'text-primary-container' : 'text-slate-500'}`}>سنوي</span>
              <span className="bg-secondary-container/20 text-secondary-container text-[10px] font-black px-2 py-0.5 rounded border border-secondary-container/30 uppercase">خصم ٢٠٪</span>
            </div>
          </div>
        </header>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-[#0A1628] p-10 border transition-all duration-500 flex flex-col h-full ${plan.featured ? 'border-primary-container shadow-[0_0_40px_rgba(0,255,209,0.1)] scale-105 z-10' : 'border-white/5 hover:border-white/20'}`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-background font-black text-xs px-6 py-1 clip-button uppercase tracking-widest whitespace-nowrap">
                  الأكثر طلباً
                </div>
              )}
              <div className="l-bracket-tr opacity-20"></div>
              <div className="l-bracket-bl opacity-20"></div>

              <div className="mb-10 text-center">
                <h3 className="text-2xl font-black text-white mb-2 font-headline uppercase">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 font-data mb-4">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-500 text-lg">SAR</span>
                  <span className="text-slate-600 text-sm">/{billing === 'monthly' ? 'شهر' : 'سنة'}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-body">{plan.desc}</p>
              </div>

              <div className="flex-grow space-y-4 mb-12">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex gap-3 items-center text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                    <span className="font-body">{feat}</span>
                  </div>
                ))}
              </div>

              <Link href="/register" className={`w-full py-5 font-black text-lg clip-button transition-all active:scale-95 text-center block ${plan.featured ? 'bg-primary-container text-background shadow-[0_0_20px_#00ffd1] hover:brightness-110' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-24 text-center">
          <p className="text-slate-500 mb-6 font-body">هل لديك أسئلة حول المدفوعات أو سياسة الإلغاء؟</p>
          <Link href="/trust" className="text-secondary-container font-black flex items-center gap-2 justify-center hover:gap-4 transition-all">
            زيارة مركز الثقة والأسئلة الشائعة
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
