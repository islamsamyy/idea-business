'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import type { Profile } from '@/lib/types';

const CATEGORY_LABELS: Record<string, string> = {
  All: 'كافة التخصصات',
  FinTech: 'FinTech',
  HealthTech: 'HealthTech',
  CleanEnergy: 'CleanEnergy',
  AI: 'AI',
  SaaS: 'SaaS',
};

const TAG_COLORS = [
  'glass-cyan text-primary-container',
  'glass-purple text-secondary',
  'glass-gold text-tertiary-fixed-dim',
];

export function InvestorsClient({ initialInvestors }: { initialInvestors: Profile[] }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = Object.keys(CATEGORY_LABELS);

  const filteredInvestors = useMemo(() => {
    return initialInvestors.filter(inv => {
      const matchesSearch =
        !search ||
        inv.full_name?.toLowerCase().includes(search.toLowerCase()) ||
        inv.bio?.toLowerCase().includes(search.toLowerCase()) ||
        inv.interests?.some(i => i.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory =
        activeCategory === 'All' ||
        inv.interests?.some(i => i.toLowerCase() === activeCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [initialInvestors, search, activeCategory]);

  return (
    <div className="bg-background text-foreground font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">

      {/* Floating ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-15%] right-[-8%] w-[650px] h-[650px] rounded-full bg-primary-container/10 blur-[130px] animate-float-orb" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[35%] left-[-12%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[110px] animate-float-orb" style={{ animationDelay: '3.5s' }} />
        <div className="absolute bottom-[-8%] right-[25%] w-[420px] h-[420px] rounded-full bg-tertiary-fixed-dim/8 blur-[120px] animate-float-orb" style={{ animationDelay: '7s' }} />
        <div className="neon-grid absolute inset-0 opacity-[0.04]" />
      </div>

      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-28 relative z-10">

        {/* ─── HERO GLASS PANEL ─── */}
        <header className="mb-16">
          <div className="glass rounded-3xl p-10 md:p-14 relative overflow-hidden mb-10 gradient-border">
            {/* inner glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-container/15 blur-[90px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary/12 blur-[70px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
              <div className="flex-grow max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-cyan rounded-full font-data text-[10px] text-primary-container tracking-[0.4em] uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                  Elite Network // Verified Investors
                </span>
                <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-none">
                  شبكة{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-container via-primary-container/80 to-secondary">
                    المستثمرين
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl">
                  تواصل مع نخبة المستثمرين الملائكيين وصناديق الاستثمار الجريء الذين يبحثون عن الأفكار المميزة في المنطقة العربية.
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex gap-4 flex-shrink-0">
                <div className="glass-cyan rounded-2xl p-6 text-center min-w-[100px]">
                  <div className="text-3xl font-black text-primary-container font-data">{initialInvestors.length || '٤٧'}</div>
                  <div className="text-[10px] text-muted-foreground font-data uppercase tracking-widest mt-1">مستثمر</div>
                </div>
                <div className="glass-purple rounded-2xl p-6 text-center min-w-[100px]">
                  <div className="text-3xl font-black text-secondary font-data">٢٩</div>
                  <div className="text-[10px] text-muted-foreground font-data uppercase tracking-widest mt-1">صفقة</div>
                </div>
                <div className="glass-gold rounded-2xl p-6 text-center min-w-[100px]">
                  <div className="text-3xl font-black text-tertiary-fixed-dim font-data">68M</div>
                  <div className="text-[10px] text-muted-foreground font-data uppercase tracking-widest mt-1">ريال</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="glass rounded-2xl p-1.5 mb-6 relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-container/20 via-transparent to-secondary/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute right-5 text-muted-foreground group-focus-within:text-primary-container transition-colors text-xl z-10">person_search</span>
              <input
                type="text"
                placeholder="ابحث عن اسم، تخصص، أو شركة..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-transparent py-4 pr-14 pl-6 focus:ring-0 outline-none text-foreground font-body placeholder:text-muted-foreground/50 text-lg"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute left-4 text-muted-foreground hover:text-foreground transition-colors z-10">
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Category pills */}
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-black text-xs uppercase tracking-widest ${
                  activeCategory === cat
                    ? 'bg-primary-container text-background shadow-[0_0_20px_rgba(0,255,209,0.45)] scale-105'
                    : 'glass text-muted-foreground hover:text-foreground hover:scale-105'
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </header>

        {/* ─── INVESTORS GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInvestors.map((investor, i) => (
            <div
              key={investor.id || i}
              className="group relative glass rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_64px_rgba(0,255,209,0.18)] animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* top shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-container/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              {/* inner glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              {/* Avatar + rating */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-500 ${investor.kyc_status === 'verified' ? 'border-primary-container/60 shadow-[0_0_22px_rgba(0,255,209,0.35)]' : 'border-border'}`}>
                    <Image
                      width={80}
                      height={80}
                      src={investor.avatar_url || `https://api.dicebear.com/7.x/bottts/svg?seed=${investor.full_name || i}`}
                      alt={investor.full_name || 'مستثمر'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {investor.kyc_status === 'verified' && (
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary-container rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(0,255,209,0.5)]">
                      <span className="material-symbols-outlined text-sm text-background font-black">verified</span>
                    </div>
                  )}
                </div>

                <div className="glass-cyan rounded-2xl px-4 py-2.5 text-center">
                  <div className="flex items-center gap-1 text-primary-container justify-center">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="text-xl font-black font-data">{investor.tier === 'premium' ? '5.0' : '4.8'}</span>
                  </div>
                  <span className="text-muted-foreground text-[9px] font-data uppercase tracking-widest block mt-0.5">
                    {investor.tier === 'enterprise' ? 'Institutional' : 'Angel'}
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-foreground mb-2 font-headline group-hover:text-primary-container transition-colors duration-300">
                  {investor.full_name || 'مستثمر غير معروف'}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 font-body leading-relaxed line-clamp-2 italic opacity-80">
                  &quot;{investor.bio || 'مستثمر استراتيجي يركز على دعم رواد الأعمال الشباب في المنطقة العربية وتنمية قدراتهم التقنية.'}&quot;
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {(investor.interests || ['Tech', 'AI', 'FinTech']).slice(0, 3).map((tag: string, j: number) => (
                    <span
                      key={j}
                      className={`text-[9px] uppercase font-data font-black px-3 py-1.5 rounded-full transition-all ${TAG_COLORS[j % TAG_COLORS.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/investors/${investor.id}`}
                    className="flex-grow glass text-foreground font-black text-xs py-4 text-center rounded-xl hover:border-primary-container/40 hover:text-primary-container transition-all uppercase tracking-widest"
                  >
                    عرض البيانات
                  </Link>
                  <Link
                    href={`/messages/new?user=${investor.id}`}
                    className="w-14 h-14 bg-primary-container text-background flex items-center justify-center rounded-xl hover:shadow-[0_0_22px_rgba(0,255,209,0.45)] hover:scale-110 active:scale-95 transition-all"
                  >
                    <span className="material-symbols-outlined font-black">forum</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filteredInvestors.length === 0 && (
            <div className="lg:col-span-3 text-center py-24 glass rounded-3xl">
              <span className="material-symbols-outlined text-6xl text-muted-foreground/30 mb-4 block">group_off</span>
              <div className="text-2xl font-black text-muted-foreground font-headline uppercase tracking-widest">لم نعثر على مستثمرين بمواصفاتك</div>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="mt-6 text-primary-container font-black underline underline-offset-8 hover:opacity-80 transition-opacity"
              >
                تنظيف البحث
              </button>
            </div>
          )}
        </div>
      </main>

      {/* ─── TRUST CTA BANNER ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary-container/10 blur-[100px] rounded-full" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-cyan rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 gradient-border">
            <div className="max-w-2xl text-right">
              <h2 className="text-4xl font-black text-foreground mb-4 font-headline leading-tight">
                تطبيق أعلى معايير <span className="text-primary-container">الثقة الرقمية</span>
              </h2>
              <p className="text-muted-foreground text-lg font-body leading-relaxed">
                جميع المستثمرين يخضعون لعمليات تحقق صارمة من الملاءة المالية ومصادر التمويل لضمان بيئة عمل احترافية وآمنة للجميع.
              </p>
            </div>
            <Link
              href="/register?type=investor"
              className="flex-shrink-0 bg-primary-container text-background font-black px-10 py-5 rounded-2xl text-xl hover:shadow-[0_0_32px_rgba(0,255,209,0.45)] hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
            >
              سجل كمستثمر
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
