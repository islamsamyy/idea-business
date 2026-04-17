import Link from 'next/link';

export function WhoAreYou() {
  return (
    <section className="py-24 px-6 container mx-auto">
      <div className="text-right mb-16">
        <span className="font-data text-xs text-primary-container block mb-2 tracking-[0.3em] uppercase">— اختر مسارك</span>
        <h2 className="font-headline text-5xl md:text-6xl font-bold text-foreground">من أنت؟</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Investor */}
        <Link href="/register?role=investor" className="group relative bg-surface-container-low dark:bg-[#0A1628] p-10 h-full border border-primary-container/20 dark:border-white/5 corner-bracket text-secondary hover:-translate-y-2 transition-all duration-500 overflow-hidden rounded-xl hover:border-secondary/50 hover:shadow-[0_8px_32px_rgba(104,0,236,0.1)]">
          <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-5xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
            <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-secondary transition-colors">مستثمر</h3>
            <p className="text-muted-foreground leading-relaxed font-body">اكتشف فرصاً استثمارية واعدة ومُتحقق منها في السوق العربي عبر أدوات تقييم ذكية.</p>
          </div>
        </Link>
        {/* Project Owner (Featured) */}
        <Link href="/register?role=founder" className="group relative bg-primary-container/10 dark:bg-surface-container-high p-10 h-full border-2 border-primary-container/40 corner-bracket text-primary-container shadow-[0_0_40px_rgba(0,255,209,0.1)] hover:-translate-y-2 transition-all duration-500 rounded-xl hover:shadow-[0_8px_40px_rgba(0,255,209,0.2)]">
          <div className="absolute inset-0 bg-primary-container/5 rounded-xl"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-5xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
            <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary-container transition-colors">صاحب مشروع</h3>
            <p className="text-foreground/80 leading-relaxed font-body">مشروع قائم يحتاج توسيع، شريك، أو استثمار إضافي لرفع كفاءة العمليات التشغيلية.</p>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined animate-bounce text-primary-container">arrow_downward</span>
            </div>
          </div>
        </Link>
        {/* Idea Owner */}
        <Link href="/register?role=idea" className="group relative bg-surface-container-low dark:bg-[#0A1628] p-10 h-full border border-primary-container/20 dark:border-white/5 corner-bracket text-tertiary-fixed-dim hover:-translate-y-2 transition-all duration-500 rounded-xl hover:border-tertiary-fixed-dim/50 hover:shadow-[0_8px_32px_rgba(255,186,58,0.1)]">
          <div className="absolute inset-0 bg-tertiary-fixed-dim/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-5xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_objects</span>
            <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-tertiary-fixed-dim transition-colors">صاحب فكرة</h3>
            <p className="text-muted-foreground leading-relaxed font-body">لديك فكرة متميزة وتبحث عن تمويل أو شريك استراتيجي لتحويل المخطط إلى واقع ملموس.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
