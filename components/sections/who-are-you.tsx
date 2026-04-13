export function WhoAreYou() {
  return (
    <section className="py-24 px-6 container mx-auto">
      <div className="text-right mb-16">
        <span className="font-data text-xs text-primary-container block mb-2 tracking-[0.3em] uppercase">— اختر مسارك</span>
        <h2 className="font-headline text-5xl md:text-6xl font-bold text-white">من أنت؟</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card Investor */}
        <div className="group relative bg-[#0A1628] p-10 h-full border border-white/5 corner-bracket text-secondary hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-secondary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
            <h3 className="text-3xl font-bold mb-4 text-white">مستثمر</h3>
            <p className="text-muted-foreground leading-relaxed font-body">اكتشف فرصاً استثمارية واعدة ومُتحقق منها في السوق العربي عبر أدوات تقييم ذكية.</p>
          </div>
        </div>
        {/* Card Project Owner (Featured) */}
        <div className="group relative bg-surface-container-high p-10 h-full border border-primary-container/20 corner-bracket text-primary-container shadow-[0_0_40px_rgba(0,255,209,0.1)] hover:-translate-y-2 transition-all duration-500">
          <div className="absolute inset-0 bg-primary-container/5"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
            <h3 className="text-3xl font-bold mb-4 text-white">صاحب مشروع</h3>
            <p className="text-foreground/80 leading-relaxed font-body">مشروع قائم يحتاج توسيع، شريك، أو استثمار إضافي لرفع كفاءة العمليات التشغيلية.</p>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined animate-bounce">arrow_downward</span>
            </div>
          </div>
        </div>
        {/* Card Idea Owner */}
        <div className="group relative bg-[#0A1628] p-10 h-full border border-white/5 corner-bracket text-tertiary-fixed-dim hover:-translate-y-2 transition-all duration-500">
          <div className="absolute inset-0 bg-tertiary-fixed-dim/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_objects</span>
            <h3 className="text-3xl font-bold mb-4 text-white">صاحب فكرة</h3>
            <p className="text-muted-foreground leading-relaxed font-body">لديك فكرة متميزة وتبحث عن تمويل أو شريك استراتيجي لتحويل المخطط إلى واقع ملموس.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
