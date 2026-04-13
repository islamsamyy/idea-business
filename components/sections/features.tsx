export function Features() {
  const features = [
    { icon: "bolt", title: "رحلة سلسة وسريعة", desc: "نقلص الفجوة الزمنية بين الفكرة والتنفيذ عبر إجراءات رقمية مؤتمتة بالكامل." },
    { icon: "verified_user", title: "بيئة آمنة وموثوقة", desc: "نظام تحقق متقدم من الهوية والأهلية المالية لضمان جدية كافة الأطراف." },
    { icon: "smart_toy", title: "ذكاء اصطناعي متكامل", desc: "محرك تحليل ذكي يربط الأفكار بالمستثمرين الأكثر ملاءمة بناءً على التاريخ الاستثماري." },
    { icon: "language", title: "ثنائية اللغة", desc: "دعم كامل للغتين العربية والإنجليزية لفتح آفاق الاستثمار الإقليمي والدولي." },
    { icon: "monitoring", title: "تحليلات لحظية", desc: "لوحة تحكم شاملة تعرض أداء استثماراتك وتفاعل السوق مع فكرتك لحظة بلحظة." },
    { icon: "payments", title: "دفع آمن ومنظم", desc: "بوابة دفع معتمدة تضمن شفافية التحويلات المالية وتوثيق العقود إلكترونياً." },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-lowest">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="font-data text-xs text-primary-container block mb-4 tracking-[0.3em] uppercase">— لماذا نحن؟</span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-white">لماذا IDEA BUSINESS؟</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {features.map((f, i) => (
            <div key={i} className="bg-[#0A1628] p-12 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-container opacity-30"></div>
              <div className="text-primary-container mb-6">
                <span className="material-symbols-outlined text-4xl">{f.icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{f.title}</h4>
              <p className="text-muted-foreground font-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
