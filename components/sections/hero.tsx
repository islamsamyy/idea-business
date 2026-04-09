export function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
      <div className="mb-8 inline-flex items-center gap-3 px-4 py-1 border border-primary-container/30 bg-primary-container/5 rounded-full text-xs font-bold tracking-widest text-primary-container animate-pulse">
        <span className="material-symbols-outlined text-sm">pentagon</span>
        المنصة العربية الأذكى — POWERED BY AI
      </div>
      <h1 className="font-headline text-5xl md:text-8xl font-bold leading-tight mb-6 max-w-5xl">
        حوّل فكرتك 
        <span className="bg-gradient-to-l from-primary-container to-secondary-container bg-clip-text text-transparent mx-4">إلى واقع</span>
        أو اكتشف فرصتك 
        <span className="text-tertiary-fixed-dim font-data">القادمة</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 font-body leading-relaxed opacity-80">
        IDEA BUSINESS — منصة ذكية آمنة تربط أصحاب الأفكار بالمستثمرين عبر بيئة موثوقة ومنظمة بمعايير عالمية.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mb-16">
        <button className="bg-primary-container text-[#10131a] font-bold text-xl px-10 py-5 clip-button shadow-[0_0_30px_rgba(0,255,209,0.2)] hover:brightness-110 transition-all flex items-center gap-3">
          أعلن عن فكرتك
          <span className="material-symbols-outlined">lightbulb</span>
        </button>
        <button className="border border-primary-container/50 text-primary-container font-bold text-xl px-10 py-5 clip-button hover:bg-primary-container/5 transition-all flex items-center gap-3">
          استعرض الفرص
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      {/* Feature Tags Scrolling */}
      <div className="w-full overflow-hidden whitespace-nowrap mask-gradient">
        <div className="flex gap-12 animate-scroll-rtl text-muted-foreground/30 font-bold text-sm">
          <span>✦ منصة موثوقة</span>
          <span>✦ ذكاء اصطناعي</span>
          <span>✦ حماية قانونية</span>
          <span>✦ دفع آمن</span>
          <span>✦ ثنائية اللغة</span>
          <span>✦ منصة موثوقة</span>
          <span>✦ ذكاء اصطناعي</span>
          <span>✦ حماية قانونية</span>
          <span>✦ دفع آمن</span>
          <span>✦ ثنائية اللغة</span>
        </div>
      </div>
    </section>
  );
}
