'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import type { Project } from '@/lib/types';

// ─── Category styling ────────────────────────────────────────────────────────
const CAT_STYLE: Record<string, { glass: string; text: string; dot: string }> = {
  AI:          { glass: 'glass-cyan',   text: 'text-primary-container',  dot: 'bg-primary-container' },
  FinTech:     { glass: 'glass-purple', text: 'text-secondary',          dot: 'bg-secondary' },
  HealthTech:  { glass: 'glass-gold',   text: 'text-tertiary-fixed-dim', dot: 'bg-tertiary-fixed-dim' },
  CleanEnergy: { glass: 'glass-gold',   text: 'text-tertiary-fixed-dim', dot: 'bg-tertiary-fixed-dim' },
  SaaS:        { glass: 'glass-purple', text: 'text-secondary',          dot: 'bg-secondary' },
  RealEstate:  { glass: 'glass-cyan',   text: 'text-primary-container',  dot: 'bg-primary-container' },
  Logistics:   { glass: 'glass-gold',   text: 'text-tertiary-fixed-dim', dot: 'bg-tertiary-fixed-dim' },
};
const DEFAULT_CAT = { glass: 'glass-cyan', text: 'text-primary-container', dot: 'bg-primary-container' };
function catStyle(cat?: string | null) {
  if (!cat) return DEFAULT_CAT;
  const key = Object.keys(CAT_STYLE).find(k => cat.toLowerCase().includes(k.toLowerCase()));
  return key ? CAT_STYLE[key] : DEFAULT_CAT;
}

// ─── Fallback images ──────────────────────────────────────────────────────────
const FALLBACKS = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80',
  'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=700&q=80',
];

const CATEGORIES = ['الكل', 'AI', 'FinTech', 'HealthTech', 'CleanEnergy', 'SaaS', 'RealEstate'];
type SortKey = 'newest' | 'funding' | 'progress';

export function OpportunitiesClient({ initialProjects }: { initialProjects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [sortBy, setSortBy]     = useState<SortKey>('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [saved, setSaved]       = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    let list = initialProjects.filter(p => {
      const matchCat  = activeCategory === 'الكل' || p.category?.toLowerCase().includes(activeCategory.toLowerCase());
      const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.category?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchVer  = !verifiedOnly || p.verified;
      return matchCat && matchSearch && matchVer;
    });
    if (sortBy === 'funding')  list = [...list].sort((a, b) => b.funding_goal - a.funding_goal);
    if (sortBy === 'progress') list = [...list].sort((a, b) => (b.amount_raised / Math.max(b.funding_goal, 1)) - (a.amount_raised / Math.max(a.funding_goal, 1)));
    return list;
  }, [initialProjects, activeCategory, sortBy, searchQuery, verifiedOnly]);

  const toggleSave = (id: string) =>
    setSaved(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div className="bg-background text-foreground font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">

      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary-container/8 blur-[130px] animate-float-orb" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[40%] left-[-10%] w-[480px] h-[480px] rounded-full bg-secondary/8 blur-[110px] animate-float-orb" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[-5%] right-[30%] w-[400px] h-[400px] rounded-full bg-tertiary-fixed-dim/6 blur-[120px] animate-float-orb" style={{ animationDelay: '8s' }} />
        <div className="neon-grid absolute inset-0 opacity-[0.04]" />
      </div>

      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-28 relative z-10">

        {/* ─── HERO ─── */}
        <header className="mb-16 animate-fade-in">
          <div className="glass rounded-3xl p-10 md:p-14 relative overflow-hidden gradient-border mb-10">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-container/12 blur-[90px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary/10 blur-[70px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-cyan rounded-full font-data text-[10px] text-primary-container tracking-[0.4em] uppercase mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
                  </span>
                  مشاريع نشطة حالياً
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-none">
                  استكشف{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-container via-primary-container/80 to-secondary">
                    المستقبل
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl">
                  بوابتك للوصول إلى أكثر المشاريع ابتكاراً في المنطقة العربية، تم فحصها وتدقيقها لضمان أعلى مستويات الجودة والمصداقية.
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex gap-4 flex-shrink-0">
                <div className="glass-cyan rounded-2xl p-5 text-center min-w-[90px]">
                  <div className="text-3xl font-black text-primary-container font-data">{initialProjects.length}</div>
                  <div className="text-[10px] text-muted-foreground font-data uppercase tracking-widest mt-1">فرصة</div>
                </div>
                <div className="glass-purple rounded-2xl p-5 text-center min-w-[90px]">
                  <div className="text-3xl font-black text-secondary font-data">{initialProjects.filter(p => p.verified).length}</div>
                  <div className="text-[10px] text-muted-foreground font-data uppercase tracking-widest mt-1">موثّق</div>
                </div>
                <div className="glass-gold rounded-2xl p-5 text-center min-w-[90px]">
                  <div className="text-3xl font-black text-tertiary-fixed-dim font-data">68M</div>
                  <div className="text-[10px] text-muted-foreground font-data uppercase tracking-widest mt-1">ريال</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search + Sort + Toggle row */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-grow glass rounded-2xl p-1.5 relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-container/15 via-transparent to-secondary/15 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute right-4 text-muted-foreground group-focus-within:text-primary-container transition-colors text-xl z-10">search</span>
                <input
                  type="text"
                  placeholder="ابحث عن مشروع أو قطاع..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent py-3.5 pr-12 pl-4 focus:ring-0 outline-none text-foreground placeholder:text-muted-foreground/50"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute left-4 text-muted-foreground hover:text-foreground z-10">
                    <span className="material-symbols-outlined text-lg">close</span>
                  </button>
                )}
              </div>
            </div>

            {/* Sort */}
            <div className="glass rounded-2xl px-4 py-2 flex items-center gap-2 min-w-[200px]">
              <span className="material-symbols-outlined text-muted-foreground text-lg">sort</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as SortKey)}
                className="bg-transparent text-foreground text-sm font-black uppercase tracking-widest outline-none cursor-pointer flex-1 text-right"
                dir="rtl"
              >
                <option value="newest">الأحدث</option>
                <option value="funding">الأعلى تمويلاً</option>
                <option value="progress">الأقرب للهدف</option>
              </select>
            </div>

            {/* Verified toggle */}
            <button
              onClick={() => setVerifiedOnly(v => !v)}
              className={`glass rounded-2xl px-6 py-3 flex items-center gap-2 font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${verifiedOnly ? 'glass-cyan text-primary-container shadow-[0_0_18px_rgba(0,255,209,0.3)]' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <span className="material-symbols-outlined text-lg">{verifiedOnly ? 'verified' : 'verified_user'}</span>
              موثّق فقط
            </button>
          </div>

          {/* Category pills */}
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-black text-xs uppercase tracking-widest ${
                  activeCategory === cat
                    ? 'bg-primary-container text-background shadow-[0_0_18px_rgba(0,255,209,0.4)] scale-105'
                    : 'glass text-muted-foreground hover:text-foreground hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* ─── RESULTS COUNT ─── */}
        {filtered.length > 0 && (
          <div className="flex items-center gap-3 mb-8 text-muted-foreground font-data text-xs uppercase tracking-widest">
            <span className="w-8 h-px bg-primary-container/40" />
            {filtered.length} نتيجة
            {activeCategory !== 'الكل' && <span className="glass-cyan text-primary-container px-3 py-1 rounded-full text-[10px]">{activeCategory}</span>}
            <span className="w-8 h-px bg-primary-container/40" />
          </div>
        )}

        {/* ─── CARDS GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((opp, i) => {
            const cs = catStyle(opp.category);
            const progress = opp.funding_goal > 0 ? Math.min(100, Math.round((opp.amount_raised / opp.funding_goal) * 100)) : 0;
            const isSaved = saved.has(opp.id);

            return (
              <div
                key={opp.id}
                className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_64px_rgba(0,255,209,0.18)] animate-fade-in flex flex-col"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Top shimmer */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-container/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-10" />

                {/* Image */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={opp.img || FALLBACKS[i % FALLBACKS.length]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 brightness-75"
                    alt={opp.title}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    {opp.category && (
                      <span className={`${cs.glass} ${cs.text} text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${cs.dot}`} />
                        {opp.category}
                      </span>
                    )}
                  </div>
                  {opp.verified && (
                    <div className="absolute top-4 left-4 z-10 glass-cyan px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] font-black text-primary-container uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm font-black">verified</span>
                      مُتحقّق
                    </div>
                  )}

                  {/* ROI badge */}
                  {opp.roi && (
                    <div className="absolute bottom-4 left-4 z-10 glass-gold px-3 py-1.5 rounded-full text-[10px] font-black text-tertiary-fixed-dim uppercase tracking-widest">
                      ROI {opp.roi}
                    </div>
                  )}

                  {/* Save button */}
                  <button
                    onClick={() => toggleSave(opp.id)}
                    className={`absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isSaved ? 'bg-primary-container text-background shadow-[0_0_14px_rgba(0,255,209,0.5)]' : 'glass text-foreground hover:text-primary-container hover:border-primary-container/40'}`}
                  >
                    <span className="material-symbols-outlined text-lg font-black">{isSaved ? 'bookmark' : 'bookmark_add'}</span>
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  <h3 className="text-2xl font-black text-foreground font-headline group-hover:text-primary-container transition-colors duration-300 line-clamp-2 leading-tight mb-4">
                    {opp.title}
                  </h3>

                  {opp.description && (
                    <p className="text-muted-foreground text-sm font-body leading-relaxed line-clamp-2 mb-6 opacity-80">
                      {opp.description}
                    </p>
                  )}

                  {/* Funding progress */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] text-muted-foreground font-data uppercase tracking-widest">التقدم نحو الهدف</span>
                      <span className={`text-sm font-black font-data ${cs.text}`}>{progress}%</span>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-primary-container to-secondary"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[10px] text-muted-foreground font-data">
                        {opp.amount_raised.toLocaleString()} <span className="opacity-60">/ {opp.funding_goal.toLocaleString()} ريال</span>
                      </span>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="glass rounded-xl p-4">
                      <span className="text-[10px] text-muted-foreground font-data uppercase tracking-widest block mb-1">التمويل المطلوب</span>
                      <span className="text-foreground font-data text-xl font-black">
                        {opp.funding_goal > 0 ? opp.funding_goal.toLocaleString() : '—'}
                        {opp.funding_goal > 0 && <span className="text-xs text-muted-foreground font-body mr-1">ريال</span>}
                      </span>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <span className="text-[10px] text-muted-foreground font-data uppercase tracking-widest block mb-1">الحد الأدنى</span>
                      <span className="text-foreground font-data text-xl font-black">
                        {opp.min_invest > 0 ? opp.min_invest.toLocaleString() : '—'}
                        {opp.min_invest > 0 && <span className="text-xs text-muted-foreground font-body mr-1">ريال</span>}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex gap-3">
                    <Link
                      href={`/opportunities/${opp.id}`}
                      className="flex-grow bg-primary-container text-background font-black py-4 text-center rounded-xl hover:shadow-[0_0_22px_rgba(0,255,209,0.4)] hover:brightness-110 active:scale-95 transition-all text-sm uppercase tracking-widest"
                    >
                      عرض ملف المشروع
                    </Link>
                    <Link
                      href={`/checkout?projectId=${opp.id}`}
                      className="glass text-foreground font-black px-5 py-4 rounded-xl hover:border-primary-container/40 hover:text-primary-container transition-all text-sm uppercase tracking-widest whitespace-nowrap"
                    >
                      استثمر الآن
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="md:col-span-2 text-center py-28 glass rounded-3xl">
              <span className="material-symbols-outlined text-7xl text-muted-foreground/30 mb-6 block">search_off</span>
              <div className="text-2xl font-black text-muted-foreground font-headline uppercase tracking-widest mb-4">لم يتم العثور على مشاريع</div>
              <p className="text-muted-foreground mb-8">جرّب تغيير الفلاتر أو كلمات البحث</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('الكل'); setVerifiedOnly(false); }}
                className="bg-primary-container text-background font-black px-8 py-3 rounded-xl hover:brightness-110 transition-all uppercase tracking-widest text-sm"
              >
                إعادة الضبط
              </button>
            </div>
          )}
        </div>

        {/* Load More */}
        {filtered.length > 0 && (
          <div className="mt-20 text-center">
            <button className="glass px-12 py-5 rounded-2xl text-muted-foreground hover:text-primary-container font-black uppercase tracking-[0.4em] text-xs transition-all hover:border-primary-container/40 hover:shadow-[0_0_18px_rgba(0,255,209,0.15)] group">
              تحميل المزيد
              <span className="inline-block mr-2 group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
