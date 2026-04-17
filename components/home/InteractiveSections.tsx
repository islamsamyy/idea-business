'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const STEPS = [
  {
    title: 'سجل حسابك',
    description: 'أنشئ ملفك الشخصي كصاحب فكرة أو مستثمر في أقل من دقيقتين.',
    icon: 'person_add',
    accent: 'text-primary-container',
    glass: 'glass-cyan',
    glow: 'shadow-[0_0_30px_rgba(0,255,209,0.2)]',
    details: 'تحقق فوري من الهوية والبيانات الأساسية',
  },
  {
    title: 'اعرض مشروعك',
    description: 'استخدم أدواتنا المدعومة بالذكاء الاصطناعي لتقديم عرض استثماري متكامل.',
    icon: 'rocket_launch',
    accent: 'text-secondary',
    glass: 'glass-purple',
    glow: 'shadow-[0_0_30px_rgba(104,0,236,0.25)]',
    details: 'تحليل ذكي وتقييم تلقائي للمشروع',
  },
  {
    title: 'تواصل وتفاوض',
    description: 'بيئة دردشة آمنة للتفاوض ومشاركة الملفات الحساسة بخصوصية تامة.',
    icon: 'forum',
    accent: 'text-tertiary-fixed-dim',
    glass: 'glass-gold',
    glow: 'shadow-[0_0_30px_rgba(255,186,58,0.2)]',
    details: 'رسائل مشفرة وحماية كاملة للبيانات',
  },
  {
    title: 'أغلق الصفقة',
    description: 'توثيق العقود إلكترونياً واستلام التمويل عبر بوابات دفع معتمدة.',
    icon: 'handshake',
    accent: 'text-primary-container',
    glass: 'glass-cyan',
    glow: 'shadow-[0_0_30px_rgba(0,255,209,0.2)]',
    details: 'عقود رقمية موثقة وحوالات آمنة',
  },
];

const FAQS = [
  {
    q: 'كيف نضمن جدية المستثمرين؟',
    a: 'نقوم بعملية تحقق صارمة (KYC) تشمل الأهلية المالية والتحقق من الهوية لضمان بيئة استثمارية احترافية.',
    icon: 'verified_user',
  },
  {
    q: 'ما هي نسبة المنصة من التمويل؟',
    a: 'تتقاضى المنصة رسوم نجاح رمزية (1-2% فقط) يتم توضيحها عند إبرام الاتفاقية النهائية. لا توجد رسوم مخفية.',
    icon: 'payments',
  },
  {
    q: 'هل يمكنني حماية فكرتي من السرقة؟',
    a: 'نعم، نوفر اتفاقيات عدم الإفصاح (NDA) رقمية ملزمة يتم توقيعها قبل عرض التفاصيل الدقيقة للمستثمر.',
    icon: 'lock',
  },
  {
    q: 'كم من الوقت يستغرق إغلاق الصفقة؟',
    a: 'من البحث إلى الإغلاق عادة 2-4 أسابيع. منصتنا تسرع العملية بأتمتة جميع الخطوات الإدارية.',
    icon: 'schedule',
  },
  {
    q: 'هل هناك حد أدنى للتمويل المطلوب؟',
    a: 'لا يوجد حد أدنى ثابت - من المشاريع الصغيرة بـ 50 ألف ريال إلى المشاريع الكبرى بملايين الريالات.',
    icon: 'trending_up',
  },
  {
    q: 'هل يمكنني الحصول على استشارات قانونية؟',
    a: 'نعم، نوفر شبكة من المستشارين القانونيين المعتمدين المتخصصين في العقود والاستثمار.',
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
    glass: 'glass-cyan',
    accent: 'text-primary-container',
    bar: 'from-primary-container to-secondary',
  },
  {
    title: 'منصة دفع للعملات الرقمية',
    category: 'FinTech',
    amount: '$١.٢M',
    tags: ['مرخص', 'High-Growth'],
    progress: 85,
    investors: 28,
    glass: 'glass-purple',
    accent: 'text-secondary',
    bar: 'from-secondary to-primary-container',
  },
  {
    title: 'تطبيق توصيل بالدرون',
    category: 'Logistics',
    amount: '$٤٠٠,٠٠٠',
    tags: ['براءة اختراع'],
    progress: 45,
    investors: 8,
    glass: 'glass-gold',
    accent: 'text-tertiary-fixed-dim',
    bar: 'from-tertiary-fixed-dim to-primary-container',
  },
];

const TICKER_ITEMS = [
  { label: 'منصة SaaS للرعاية الصحية', amount: '$٨٠٠K', change: '+٢٤%', icon: 'trending_up', color: 'text-primary-container' },
  { label: 'تطبيق طاقة شمسية ذكية', amount: '$١.٥M', change: '+١٨%', icon: 'trending_up', color: 'text-primary-container' },
  { label: 'منصة تعليم AI', amount: '$٣٥٠K', change: '+٣١%', icon: 'trending_up', color: 'text-primary-container' },
  { label: 'حلول لوجستية ذكية', amount: '$٦٠٠K', change: '+١٢%', icon: 'bar_chart', color: 'text-tertiary-fixed-dim' },
  { label: 'FinTech للمدفوعات', amount: '$٢.١M', change: '+٤٥%', icon: 'trending_up', color: 'text-primary-container' },
  { label: 'منصة عقارية رقمية', amount: '$٩٠٠K', change: '+٨%', icon: 'show_chart', color: 'text-secondary' },
];

// ─────────────────────────────────────────────
// LIVE TICKER
// ─────────────────────────────────────────────
export function LiveTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full overflow-hidden border-y border-primary-container/15 dark:border-white/5 py-5 relative bg-surface-container/30 dark:bg-white/[0.01]">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="animate-ticker flex gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0 px-4 py-1.5 glass rounded-full">
            <span className={`material-symbols-outlined text-lg ${item.color}`}>{item.icon}</span>
            <span className="text-sm font-body text-foreground opacity-80">{item.label}</span>
            <span className="font-data font-black text-sm text-foreground">{item.amount}</span>
            <span className={`font-data text-xs font-black ${item.color}`}>{item.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────────
export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setActiveStep(p => (p + 1) % STEPS.length), 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const step = STEPS[activeStep];

  return (
    <section className="py-32 px-6 container mx-auto relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-secondary/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary-container/6 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 text-right mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-cyan rounded-full font-data text-[10px] text-primary-container tracking-[0.3em] uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
          Journey // Step by Step
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground uppercase tracking-tight">
          كيف يعمل <span className="text-primary-container">IDEA BUSINESS</span>؟
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl ml-auto">رحلة مضمونة من الفكرة إلى الواقع الاستثماري</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Steps list */}
        <div className="space-y-4" onMouseLeave={() => setAutoPlay(true)}>
          {STEPS.map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => { setActiveStep(i); setAutoPlay(false); }}
              className={`p-7 border-r-4 rounded-2xl transition-all duration-400 cursor-pointer group ${
                activeStep === i
                  ? `${s.glass} border-primary-container -translate-x-2 ${s.glow}`
                  : 'glass border-transparent hover:border-primary-container/30 hover:-translate-x-1'
              }`}
            >
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeStep === i ? s.glass : 'glass'}`}>
                  <span className={`material-symbols-outlined text-3xl ${activeStep === i ? s.accent : 'text-muted-foreground'} group-hover:scale-110 transition-transform`}>
                    {s.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className={`text-xs font-data font-black ${activeStep === i ? s.accent : 'text-muted-foreground'}`}>0{i + 1}</span>
                    <h3 className={`text-xl font-black font-headline ${activeStep === i ? 'text-foreground' : 'text-muted-foreground'}`}>{s.title}</h3>
                  </div>
                  <p className={`font-body text-sm leading-relaxed ${activeStep === i ? 'text-foreground/80' : 'text-muted-foreground'}`}>{s.description}</p>
                  {activeStep === i && (
                    <p className={`text-xs font-semibold mt-1.5 animate-fade-in ${s.accent}`}>✓ {s.details}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual panel */}
        <div className={`relative aspect-square glass rounded-3xl overflow-hidden flex items-center justify-center group ${step.glow} transition-all duration-700`}>
          <div className="absolute inset-0 neon-grid opacity-5" />
          <div className={`absolute top-1/4 right-1/4 w-48 h-48 bg-secondary/15 blur-[60px] rounded-full`} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />

          <div className="relative z-10 text-center p-12 w-full h-full flex flex-col items-center justify-center">
            <div className={`w-48 h-48 ${step.glass} rounded-full blur-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30`} />
            <span
              key={activeStep}
              className={`material-symbols-outlined text-[130px] mb-6 ${step.accent} drop-shadow-[0_0_30px_rgba(0,255,209,0.3)] animate-fade-in`}
            >
              {step.icon}
            </span>
            <h3 className="text-3xl font-black text-foreground font-headline mb-3 animate-fade-in">{step.title}</h3>
            <p className="text-muted-foreground font-body max-w-xs animate-fade-in">{step.description}</p>
            <div className={`font-data text-9xl font-black opacity-5 absolute bottom-4 left-4 select-none ${step.accent}`}>0{activeStep + 1}</div>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-3 mt-12 relative z-10">
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActiveStep(i); setAutoPlay(false); }}
            className={`h-2 rounded-full transition-all duration-300 ${activeStep === i ? `bg-primary-container w-8` : 'bg-foreground/20 w-2 hover:bg-foreground/40'}`}
          />
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TRENDING IDEAS
// ─────────────────────────────────────────────
export function TrendingIdeas() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/5 blur-[150px] rounded-full" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-cyan rounded-full font-data text-[10px] text-primary-container tracking-[0.3em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
              Trending // Hot Opportunities
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground">أفكار مرشحة</h2>
            <p className="text-muted-foreground mt-4 text-lg">أهم الأفكار التي تحظى باهتمام المستثمرين حالياً</p>
          </div>
          <Link href="/opportunities" className="text-primary-container font-black flex items-center gap-2 hover:gap-4 transition-all hover:opacity-80">
            استعرض الكل
            <span className="material-symbols-outlined text-2xl">west</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRENDING_IDEAS.map((idea, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative glass rounded-3xl p-8 overflow-hidden transition-all duration-500 cursor-pointer flex flex-col ${
                hoveredId === i ? `-translate-y-3 ${idea.glass} shadow-[0_20px_60px_rgba(0,255,209,0.15)]` : 'hover:-translate-y-1'
              }`}
            >
              {/* shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-container/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

              <div className="relative z-10 flex justify-between items-start mb-6">
                <div>
                  <span className={`text-xs font-data uppercase tracking-widest block mb-2 ${idea.accent}`}>{idea.category}</span>
                  <div className="flex gap-2">
                    {idea.tags.map(tag => (
                      <span key={tag} className={`text-[10px] px-3 py-1 rounded-full font-black transition-all ${hoveredId === i ? `${idea.glass} ${idea.accent}` : 'glass text-muted-foreground'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className={`material-symbols-outlined text-3xl cursor-pointer transition-all ${hoveredId === i ? `${idea.accent} scale-125` : 'text-muted-foreground'}`}>
                  favorite
                </span>
              </div>

              <h3 className={`text-2xl font-black mb-6 font-headline relative z-10 transition-colors ${hoveredId === i ? idea.accent : 'text-foreground'}`}>{idea.title}</h3>

              {/* Progress */}
              <div className="mb-5 relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground font-data uppercase tracking-widest">التقدم</span>
                  <span className={`text-sm font-black transition-colors ${hoveredId === i ? idea.accent : 'text-foreground'}`}>{idea.progress}%</span>
                </div>
                <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${idea.bar} h-full transition-all duration-700 rounded-full`}
                    style={{ width: `${idea.progress}%` }}
                  />
                </div>
              </div>

              {/* Investors */}
              <div className="mb-6 relative z-10 flex items-center gap-3 p-3 glass rounded-xl">
                <span className={`material-symbols-outlined text-2xl ${idea.accent}`}>groups</span>
                <div>
                  <span className="text-sm font-black text-foreground">{idea.investors}</span>
                  <span className="text-xs text-muted-foreground block">مستثمرون مهتمون</span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-foreground/10 relative z-10 flex justify-between items-center">
                <div>
                  <span className="text-xs text-muted-foreground mb-1 font-data uppercase tracking-widest block">التمويل المطلوب</span>
                  <span className={`font-data text-2xl font-black ${hoveredId === i ? idea.accent : 'text-foreground'}`}>{idea.amount}</span>
                </div>
                <Link
                  href={`/opportunities?featured=${i}`}
                  className={`px-6 py-2.5 text-sm font-black rounded-xl transition-all uppercase tracking-widest ${
                    hoveredId === i
                      ? 'bg-primary-container text-background hover:brightness-110'
                      : 'glass text-primary-container hover:border-primary-container/40'
                  }`}
                >
                  التفاصيل
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FAQ SECTION
// ─────────────────────────────────────────────
export function FAQSection() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="py-32 px-6 container mx-auto max-w-5xl relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/6 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-primary-container/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-cyan rounded-full font-data text-[10px] text-primary-container tracking-[0.3em] uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
          FAQs // Support Center
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground mb-6">أسئلة شائعة</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">نجيب على جميع استفسارات الرواد والمستثمرين</p>
      </div>

      <div className="space-y-4 relative z-10">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`glass rounded-2xl overflow-hidden transition-all duration-400 ${open === i ? 'glass-cyan shadow-[0_4px_24px_rgba(0,255,209,0.12)]' : 'hover:border-primary-container/25'}`}
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full p-7 flex justify-between items-center text-right gap-6 group"
            >
              <span className="text-xl font-black text-foreground font-headline flex-1 group-hover:text-primary-container transition-colors">
                {faq.q}
              </span>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`material-symbols-outlined text-2xl transition-all duration-400 ${open === i ? 'text-primary-container rotate-180' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  expand_more
                </span>
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-7 pb-7 text-foreground/80 font-body leading-relaxed border-t border-primary-container/15 pt-5 text-lg">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container mt-0.5 flex-shrink-0">check_circle</span>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 p-12 glass-cyan rounded-3xl text-center relative z-10 gradient-border">
        <h3 className="text-3xl font-black text-foreground font-headline mb-4">لم تجد إجابتك؟</h3>
        <p className="text-muted-foreground mb-8 text-lg">فريقنا متوفر 24/7 للإجابة على جميع استفساراتك</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary-container text-background font-black text-lg rounded-2xl hover:shadow-[0_0_24px_rgba(0,255,209,0.4)] hover:scale-105 transition-all uppercase tracking-widest"
        >
          <span className="material-symbols-outlined">mail</span>
          تواصل معنا الآن
        </Link>
      </div>
    </section>
  );
}
