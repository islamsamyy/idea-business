'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const STEPS = [
  {
    title: 'سجل حسابك',
    description: 'أنشئ ملفك الشخصي كصاحب فكرة أو مستثمر في أقل من دقيقتين.',
    icon: 'person_add',
    color: 'text-primary-container',
    details: 'تحقق فوري من الهوية والبيانات الأساسية',
  },
  {
    title: 'اعرض مشروعك',
    description: 'استخدم أدواتنا المدعومة بالذكاء الاصطناعي لتقديم عرض استثماري متكامل.',
    icon: 'rocket_launch',
    color: 'text-secondary-fixed-dim',
    details: 'تحليل ذكي وتقييم تلقائي للمشروع',
  },
  {
    title: 'تواصل وتفاوض',
    description: 'بيئة دردشة آمنة للتفاوض ومشاركة الملفات الحساسة بخصوصية تامة.',
    icon: 'forum',
    color: 'text-tertiary-fixed-dim',
    details: 'رسائل مشفرة وحماية كاملة للبيانات',
  },
  {
    title: 'أغلق الصفقة',
    description: 'توثيق العقود إلكترونياً واستلام التمويل عبر بوابات دفع معتمدة.',
    icon: 'handshake',
    color: 'text-primary-container',
    details: 'عقود رقمية موثقة وحوالات آمنة',
  },
];

const FAQS = [
  {
    q: 'كيف نضمن جدية المستثمرين؟',
    a: 'نقوم بعملية تحقق صارمة (KYC) تشمل الأهلية المالية والتحقق من الهوية لضمان بيئة استثمارية احترافية. جميع المستثمرين يجب أن يتجاوزوا اختبارات تحقق متعددة المستويات.',
    icon: 'verified_user',
  },
  {
    q: 'ما هي نسبة المنصة من التمويل؟',
    a: 'نحن نؤمن بالشفافية؛ تتقاضى المنصة رسوم نجاح رمزية (1-2% فقط) يتم توضيحها عند إبرام الاتفاقية النهائية. لا توجد رسوم مخفية أو تكاليف غير متوقعة.',
    icon: 'payments',
  },
  {
    q: 'هل يمكنني حماية فكرتي من السرقة؟',
    a: 'نعم، نوفر اتفاقيات عدم الإفصاح (NDA) رقمية ملزمة يتم توقيعها قبل عرض التفاصيل الدقيقة للمستثمر. يمكنك أيضاً إخفاء المعلومات الحساسة حتى مرحلة التفاوض.',
    icon: 'lock',
  },
  {
    q: 'كم من الوقت يستغرق إغلاق الصفقة؟',
    a: 'من البحث إلى الإغلاق عادة 2-4 أسابيع، وذلك حسب تعقيد الصفقة. منصتنا تسرع العملية بأتمتة جميع الخطوات الإدارية.',
    icon: 'schedule',
  },
  {
    q: 'هل هناك حد أدنى للتمويل المطلوب؟',
    a: 'لا يوجد حد أدنى ثابت - من المشاريع الصغيرة بـ 50 ألف ريال إلى المشاريع الكبرى بملايين الريالات. كل الفرص مرحب بها.',
    icon: 'trending_up',
  },
  {
    q: 'هل يمكنني الحصول على استشارات قانونية؟',
    a: 'نعم، نوفر شبكة من المستشارين القانونيين المعتمدين المتخصصين في العقود والاستثمار للمشاركين في المنصة.',
    icon: 'gavel',
  },
];

const TRENDING_IDEAS = [
  {
    title: 'مشروع زراعة مائية ذكي',
    category: 'الزراعة التكنولوجية',
    amount: '$٢٥٠,٠٠٠',
    tags: ['مؤكد', 'AI'],
    progress: 65,
    investors: 12,
  },
  {
    title: 'منصة دفع للعملات الرقمية',
    category: 'FinTech',
    amount: '$١.٢M',
    tags: ['مرخص', 'High-Growth'],
    progress: 85,
    investors: 28,
  },
  {
    title: 'تطبيق توصيل بالدرون',
    category: 'Logistics',
    amount: '$٤٠٠,٠٠٠',
    tags: ['براءة اختراع'],
    progress: 45,
    investors: 8,
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  return (
    <section className="py-32 px-6 container mx-auto relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-secondary-container/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 text-right mb-16">
        <div className="inline-block px-4 py-1 border border-[#00ffd1]/20 bg-[#00ffd1]/5 rounded-lg font-data text-[10px] text-[#00ffd1] tracking-[0.3em] uppercase mb-6">
          Journey // Step by Step
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
          كيف يعمل <span className="text-primary-container">IDEA BUSINESS</span>؟
        </h2>
        <p className="text-slate-400 text-lg mt-4 max-w-xl ml-auto">رحلة مضمونة من الفكرة إلى الواقع الاستثماري</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-4" onMouseLeave={() => setAutoPlay(true)}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              onMouseEnter={() => { setActiveStep(i); setAutoPlay(false); }}
              className={`p-8 border-r-4 transition-all cursor-pointer group rounded-xl ${
                activeStep === i
                  ? 'bg-primary-container/15 border-primary-container shadow-[0_0_30px_rgba(0,255,209,0.2)] -translate-x-2'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-3 rounded-lg transition-all ${activeStep === i ? 'bg-primary-container/20' : 'bg-white/5'}`}>
                  <span className={`material-symbols-outlined text-4xl ${activeStep === i ? step.color : 'text-slate-500'}`}>
                    {step.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-sm font-data font-black ${activeStep === i ? step.color : 'text-slate-500'}`}>
                      0{i + 1}
                    </span>
                    <h3 className={`text-2xl font-black font-headline ${activeStep === i ? 'text-white' : 'text-slate-400'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`font-body leading-relaxed text-sm mb-2 ${activeStep === i ? 'text-slate-300' : 'text-slate-500'}`}>
                    {step.description}
                  </p>
                  {activeStep === i && (
                    <p className="text-xs text-primary-container font-semibold opacity-80 animate-fade-in">
                      ✓ {step.details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative aspect-square bg-gradient-to-br from-[#0A1628] to-[#050608] border border-white/5 overflow-hidden flex items-center justify-center group rounded-3xl">
          <div className="absolute inset-0 hex-grid opacity-10"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-secondary-container/20 blur-[60px] rounded-full"></div>
          </div>
          <div className="relative z-10 text-center p-12 w-full h-full flex flex-col items-center justify-center">
             <div className="w-56 h-56 bg-gradient-to-br from-primary-container/30 to-transparent rounded-full blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
             <span className={`material-symbols-outlined text-[120px] mb-8 ${STEPS[activeStep].color} drop-shadow-[0_0_30px_rgba(0,255,209,0.4)] animate-bounce`} style={{animationDuration: '2s'}}>
                {STEPS[activeStep].icon}
             </span>
             <h3 className="text-3xl font-black text-white font-headline relative z-10 mb-2">
               {STEPS[activeStep].title}
             </h3>
             <p className="text-slate-400 font-body relative z-10 max-w-xs">
               {STEPS[activeStep].description}
             </p>
             <div className="text-primary-container font-data text-9xl font-black opacity-5 absolute bottom-4 left-4 select-none">
                0{activeStep + 1}
             </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-3 mt-12 relative z-10">
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActiveStep(i); setAutoPlay(false); }}
            className={`h-2 rounded-full transition-all ${
              activeStep === i ? 'bg-primary-container w-8' : 'bg-white/20 w-2 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export function TrendingIdeas() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-surface-container-lowest overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="text-right">
            <div className="inline-block px-4 py-1 border border-[#00ffd1]/20 bg-[#00ffd1]/5 rounded-lg font-data text-[10px] text-[#00ffd1] tracking-[0.3em] uppercase mb-4">
              Trending // Hot Opportunities
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-white">أفكار مرشحة</h2>
            <p className="text-slate-400 mt-4 text-lg">أهم الأفكار التي تحظى باهتمام المستثمرين حالياً</p>
          </div>
          <Link href="/opportunities" className="text-primary-container font-black flex items-center gap-2 hover:gap-4 transition-all hover:text-white">
            استعرض الكل
            <span className="material-symbols-outlined animate-float">west</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRENDING_IDEAS.map((idea, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group overflow-hidden"
            >
              <div className={`bg-gradient-to-br from-[#0A1628] to-[#050608] border border-white/5 p-8 transition-all duration-500 rounded-2xl h-full flex flex-col ${
                hoveredId === i ? 'border-primary-container/50 shadow-[0_0_40px_rgba(0,255,209,0.15)] -translate-y-2' : 'hover:border-white/20'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-data text-primary-container uppercase tracking-widest block mb-2">{idea.category}</span>
                    <div className="flex gap-2">
                      {idea.tags.map(tag => (
                        <span key={tag} className={`text-[10px] px-2 py-1 rounded transition-all ${
                          hoveredId === i ? 'bg-primary-container/20 text-primary-container border border-primary-container/30' : 'bg-white/5 text-slate-400 border border-white/10'
                        }`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className={`material-symbols-outlined text-2xl cursor-pointer transition-all ${hoveredId === i ? 'text-primary-container scale-110' : 'text-slate-600'}`}>
                    favorite
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-6 font-headline relative z-10">{idea.title}</h3>

                {/* Progress Bar */}
                <div className="mb-6 relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-500 font-data uppercase tracking-widest">التقدم</span>
                    <span className={`text-sm font-black transition-colors ${hoveredId === i ? 'text-primary-container' : 'text-white'}`}>{idea.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary-container to-secondary-fixed-dim h-full transition-all duration-500 rounded-full"
                      style={{ width: `${idea.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Investors Count */}
                <div className="mb-6 relative z-10 flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <span className="material-symbols-outlined text-primary-container text-xl">groups</span>
                  <div>
                    <span className="text-sm font-black text-white">{idea.investors}</span>
                    <span className="text-xs text-slate-500 block">مستثمرون مهتمون</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 relative z-10 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 mb-1 font-data uppercase tracking-widest">التمويل المطلوب</span>
                    <span className="font-data text-2xl text-white font-black">{idea.amount}</span>
                  </div>
                  <Link
                    href={`/opportunities?featured=${i}`}
                    className={`px-6 py-2 text-sm font-black clip-button transition-all uppercase tracking-widest ${
                      hoveredId === i
                        ? 'bg-primary-container text-background hover:brightness-110'
                        : 'bg-primary-container/10 text-primary-container hover:bg-primary-container/20'
                    }`}
                  >
                    التفاصيل
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="py-32 px-6 container mx-auto max-w-5xl relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary-container/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 text-center mb-16">
        <div className="inline-block px-4 py-1 border border-[#00ffd1]/20 bg-[#00ffd1]/5 rounded-lg font-data text-[10px] text-[#00ffd1] tracking-[0.3em] uppercase mb-6">
          FAQs // Support Center
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-black text-white mb-6">أسئلة شائعة</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">نجيب على جميع استفسارات الرواد والمستثمرين</p>
      </div>

      <div className="space-y-4 relative z-10">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r from-white/[0.02] to-white/[0.01] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 ${
              open === i ? 'bg-white/[0.04] border-primary-container/30 shadow-[0_0_30px_rgba(0,255,209,0.1)]' : 'hover:border-white/20'
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full p-8 flex justify-between items-center text-right gap-6 group"
            >
              <span className="text-2xl font-black text-white font-headline flex-1 group-hover:text-primary-container transition-colors">
                {faq.q}
              </span>
              <div className="flex items-center gap-4">
                <span className={`material-symbols-outlined text-3xl transition-all duration-500 ${open === i ? 'text-primary-container rotate-180' : 'text-slate-500 group-hover:text-white'}`}>
                  expand_more
                </span>
                <span className={`material-symbols-outlined text-3xl transition-all duration-500 ${open === i ? 'text-primary-container' : 'text-slate-500 opacity-0 group-hover:opacity-100'}`}>
                  {faq.icon}
                </span>
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-8 pt-0 text-slate-300 font-body leading-relaxed border-t border-white/5 text-lg">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                  </div>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA after FAQs */}
      <div className="mt-16 p-12 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 border border-primary-container/20 rounded-3xl text-center relative z-10">
        <h3 className="text-3xl font-black text-white font-headline mb-4">لم تجد إجابتك؟</h3>
        <p className="text-slate-400 mb-8 text-lg">فريقنا متوفر 24/7 للإجابة على جميع استفساراتك</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary-container text-background font-black text-lg rounded-full hover:scale-105 transition-transform clip-button uppercase tracking-widest"
        >
          <span className="material-symbols-outlined">mail</span>
          تواصل معنا الآن
        </Link>
      </div>
    </section>
  );
}
