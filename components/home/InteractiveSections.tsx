'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const STEPS = [
  {
    title: 'سجل حسابك',
    description: 'أنشئ ملفك الشخصي كصاحب فكرة أو مستثمر في أقل من دقيقتين.',
    icon: 'person_add',
    color: 'text-primary-container',
  },
  {
    title: 'اعرض مشروعك',
    description: 'استخدم أدواتنا المدعومة بالذكاء الاصطناعي لتقديم عرض استثماري متكامل.',
    icon: 'rocket_launch',
    color: 'text-secondary-fixed-dim',
  },
  {
    title: 'تواصل وتفاوض',
    description: 'بيئة دردشة آمنة للتفاوض ومشاركة الملفات الحساسة بخصوصية تامة.',
    icon: 'forum',
    color: 'text-tertiary-fixed-dim',
  },
  {
    title: 'أغلق الصفقة',
    description: 'توثيق العقود إلكترونياً واستلام التمويل عبر بوابات دفع معتمدة.',
    icon: 'handshake',
    color: 'text-primary-container',
  },
];

const FAQS = [
  {
    q: 'كيف نضمن جدية المستثمرين؟',
    a: 'نقوم بعملية تحقق صارمة (KYC) تشمل الأهلية المالية والتحقق من الهوية لضمان بيئة استثمارية احترافية.',
  },
  {
    q: 'ما هي نسبة المنصة من التمويل؟',
    a: 'نحن نؤمن بالشفافية؛ تتقاضى المنصة رسوم نجاح رمزية يتم توضيحها عند إبرام الاتفاقية النهائية.',
  },
  {
    q: 'هل يمكنني حماية فكرتي من السرقة؟',
    a: 'نعم، نوفر اتفاقيات عدم الإفصاح (NDA) رقمية ملزمة يتم توقيعها قبل عرض التفاصيل الدقيقة للمستثمر.',
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-6 container mx-auto">
      <div className="text-right mb-16">
        <h2 className="font-headline text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
          كيف يعمل <span className="text-primary-container">IDEA BUSINESS</span>؟
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveStep(i)}
              className={`p-8 border-r-4 transition-all cursor-pointer group ${
                activeStep === i
                  ? 'bg-primary-container/10 border-primary-container shadow-[0_0_30px_rgba(0,255,209,0.1)]'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-start gap-6">
                <span className={`material-symbols-outlined text-4xl ${activeStep === i ? step.color : 'text-slate-500'}`}>
                  {step.icon}
                </span>
                <div>
                  <h3 className={`text-2xl font-black mb-2 font-headline ${activeStep === i ? 'text-white' : 'text-slate-400'}`}>
                    {step.title}
                  </h3>
                  <p className={`font-body leading-relaxed ${activeStep === i ? 'text-slate-300' : 'text-slate-500'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative aspect-square bg-[#0A1628] border border-white/5 overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 hex-grid opacity-20"></div>
          <div className="relative z-10 text-center p-12">
             <div className="w-64 h-64 mx-auto mb-8 bg-primary-container/20 rounded-full blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
             <span className={`material-symbols-outlined text-[10rem] mb-8 ${STEPS[activeStep].color} animate-float drop-shadow-[0_0_20px_rgba(0,255,209,0.5)]`}>
                {STEPS[activeStep].icon}
             </span>
             <div className="text-primary-container font-data text-8xl font-black opacity-10 absolute bottom-8 left-8 select-none">
                0{activeStep + 1}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrendingIdeas() {
  const ideas = [
    { title: 'مشروع زراعة مائية ذكي', category: 'الزراعة التكنولوجية', amount: '$٢٥٠,٠٠٠', tags: ['مؤكد', 'AI'] },
    { title: 'منصة دفع للعملات الرقمية', category: 'FinTech', amount: '$١.٢M', tags: ['مرخص', 'High-Growth'] },
    { title: 'تطبيق توصيل بالدرون', category: 'Logistics', amount: '$٤٠٠,٠٠٠', tags: ['براءة اختراع'] },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-lowest overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="text-right">
            <h2 className="font-headline text-5xl md:text-6xl font-black text-white">أفكار مرشحة</h2>
            <p className="text-slate-500 mt-4">أهم الأفكار التي تحظى باهتمام المستثمرين حالياً</p>
          </div>
          <Link href="/opportunities" className="text-primary-container font-black flex items-center gap-2 hover:gap-4 transition-all">
            استعرض الكل
            <span className="material-symbols-outlined">west</span>
          </Link>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
          {ideas.map((idea, i) => (
            <div key={i} className="min-w-[350px] bg-[#0A1628] border border-white/5 p-8 snap-center hover:border-primary-container/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-data text-primary-container uppercase tracking-widest">{idea.category}</span>
                <span className="material-symbols-outlined text-slate-600 group-hover:text-primary-container transition-colors">favorite</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 font-headline">{idea.title}</h3>
              <div className="flex gap-2 mb-8">
                {idea.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 text-slate-400">{tag}</span>
                ))}
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 mb-1">التمويل المطلوب</span>
                  <span className="font-data text-xl text-white font-bold">{idea.amount}</span>
                </div>
                <button className="bg-primary-container/10 text-primary-container px-4 py-2 text-xs font-black clip-button hover:bg-primary-container hover:text-background transition-all">
                  التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 px-6 container mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl font-black text-white italic">أسئلة شائعة</h2>
      </div>
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-[#0A1628] border border-white/5 overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full p-8 flex justify-between items-center text-right"
            >
              <span className="text-xl font-black text-white font-headline">{faq.q}</span>
              <span className={`material-symbols-outlined transition-transform duration-500 ${open === i ? 'rotate-180 text-primary-container' : 'text-slate-600'}`}>
                expand_more
              </span>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-8 pt-0 text-slate-400 font-body leading-relaxed border-t border-white/5">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
