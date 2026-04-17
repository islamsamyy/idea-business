import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-6 text-center relative overflow-hidden bg-gradient-to-b from-background via-background to-surface-container-low/50">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 border border-primary-container/40 bg-gradient-to-r from-primary-container/15 to-secondary/15 rounded-full text-xs font-bold tracking-widest text-primary-container animate-slide-up">
        <span className="material-symbols-outlined text-sm animate-spin" style={{ animationDuration: '6s' }}>pentagon</span>
        المنصة العربية الأذكى — POWERED BY AI
      </div>

      <h1 className="font-headline text-5xl md:text-8xl font-bold leading-tight mb-6 max-w-5xl animate-slide-up text-foreground" style={{ animationDelay: '0.1s' }}>
        حوّل فكرتك
        <span className="bg-gradient-to-l from-primary-container via-secondary to-primary-container bg-clip-text text-transparent mx-4 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>إلى واقع</span>
        أو اكتشف فرصتك
        <span className="text-secondary font-data">القادمة</span>
      </h1>

      <p className="text-foreground text-lg md:text-xl max-w-2xl mb-12 font-body leading-relaxed opacity-85 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        IDEA BUSINESS — منصة ذكية آمنة تربط أصحاب الأفكار بالمستثمرين عبر بيئة موثوقة ومنظمة بمعايير عالمية.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <Link href="/add-idea" className="bg-gradient-to-r from-primary-container to-accent text-foreground font-bold text-xl px-10 py-5 clip-button interactive-glow flex items-center gap-3 justify-center hover:shadow-[0_12px_40px_rgba(0,255,209,0.3)]">
          أعلن عن فكرتك
          <span className="material-symbols-outlined animate-bounce-subtle">lightbulb</span>
        </Link>
        <Link href="/opportunities" className="border-2 border-primary-container/40 text-primary-container font-bold text-xl px-10 py-5 clip-button interactive-glow hover:bg-gradient-to-r hover:from-primary-container/10 hover:to-transparent flex items-center gap-3 justify-center">
          استعرض الفرص
          <span className="material-symbols-outlined animate-bounce-subtle" style={{ animationDelay: '0.3s' }}>search</span>
        </Link>
      </div>

      {/* Feature Tags Scrolling */}
      <div className="w-full overflow-hidden whitespace-nowrap mask-gradient animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex gap-12 animate-scroll-rtl text-muted-foreground/40 font-bold text-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            منصة موثوقة
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            ذكاء اصطناعي
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            حماية قانونية
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            دفع آمن
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            ثنائية اللغة
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            منصة موثوقة
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            ذكاء اصطناعي
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            حماية قانونية
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            دفع آمن
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            ثنائية اللغة
          </span>
        </div>
      </div>
    </section>
  );
}
