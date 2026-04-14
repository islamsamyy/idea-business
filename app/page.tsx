import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { createClient } from "@/lib/supabase/server";
import { HowItWorks, TrendingIdeas, FAQSection } from "@/components/home/InteractiveSections";

interface Stat {
  value: string;
  label: string;
  color: string;
}

async function getStats(): Promise<Stat[]> {
  const fallbackStats: Stat[] = [
    { value: "+١٢٤", label: "فكرة ومشروع", color: "text-primary-container" },
    { value: "٤٧", label: "مستثمر معتمد", color: "text-secondary-fixed-dim" },
    { value: "٢٩", label: "صفقة مُنجزة", color: "text-tertiary-fixed-dim" },
    {
      value: "٦٨M",
      label: "ريال تمويل مُوجَّه",
      color: "text-primary-container",
    },
  ];

  try {
    const supabase = await createClient();
    const [{ count: projects }, { count: investors }] = await Promise.all([
      supabase.from("projects").select("*", { count: "exact", head: true }),
      supabase.from("profiles").select("*", { count: "exact", head: true })
    ]);
    const { count: deals } = await supabase
      .from("deals")
      .select("*", { count: "exact", head: true });

    return [
      {
        value: `+${projects || 124}`,
        label: "فكرة ومشروع",
        color: "text-primary-container",
      },
      {
        value: `${investors || 47}`,
        label: "مستثمر معتمد",
        color: "text-secondary-fixed-dim",
      },
      {
        value: `${deals || 29}`,
        label: "صفقة مُنجزة",
        color: "text-tertiary-fixed-dim",
      },
      {
        value: "٦٨M",
        label: "ريال تمويل مُوجَّه",
        color: "text-primary-container",
      },
    ];
  } catch (error) {
    console.log("DB not ready, using fallback stats", error);
    return fallbackStats;
  }
}

export default async function HomePage() {
  const stats = await getStats();

  const paths = [
    {
      icon: "account_balance_wallet",
      title: "مستثمر",
      description:
        "اكتشف فرصاً استثمارية واعدة ومُتحقق منها في السوق العربي عبر أدوات تقييم ذكية.",
      color: "secondary-fixed-dim",
      bg: "bg-secondary-container/5",
    },
    {
      icon: "business_center",
      title: "صاحب مشروع",
      description:
        "مشروع قائم يحتاج توسيع، شريك، أو استثمار إضافي لرفع كفاءة العمليات التشغيلية.",
      color: "primary-container",
      bg: "bg-primary-container/5",
      featured: true,
    },
    {
      icon: "emoji_objects",
      title: "صاحب فكرة",
      description:
        "لديك فكرة متميزة وتبحث عن تمويل أو شريك استراتيجي لت حويل المخطط إلى واقع ملموس.",
      color: "tertiary-fixed-dim",
      bg: "bg-tertiary-fixed-dim/5",
    },
  ];

  const features = [
    {
      icon: "bolt",
      title: "رحلة سلسة وسريعة",
      description:
        "نقلص الفجوة الزمنية بين الفكرة والتنفيذ عبر إجراءات رقمية مؤتمتة بالكامل.",
    },
    {
      icon: "verified_user",
      title: "بيئة آمنة وموثوقة",
      description:
        "نظام تحقق متقدم من الهوية والأهلية المالية لضمان جدية كافة الأطراف.",
    },
    {
      icon: "smart_toy",
      title: "ذكاء اصطناعي متكامل",
      description:
        "محرك تحليل ذكي يربط الأفكار بالمستثمرين الأكثر ملاءمة بناءً على التاريخ الاستثمارية.",
    },
    {
      icon: "language",
      title: "ثنائية اللغة",
      description:
        "دعم كامل للغتين العربية والإنجليزية لفتح آفاق الاستثمار الإقليمي والدولي.",
    },
    {
      icon: "monitoring",
      title: "تحليلات لحظية",
      description:
        "لوحة تحكم شاملة تعرض أداء استثماراتك وتفاعل السوق مع فكرتك لحظة بلحظة.",
    },
    {
      icon: "payments",
      title: "دفع آمن ومنظم",
      description:
        "بوابة دفع معتمدة تضمن شفافية التحويلات المالية وتوثيق العقود إلكترونياً.",
    },
  ];

  return (
    <div
      className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right"
      dir="rtl"
    >
      <div className="fixed inset-0 neon-grid pointer-events-none z-0 opacity-20"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-5"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-secondary-container/10 blur-[150px] -z-10 rounded-full"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary-container/10 blur-[150px] -z-10 rounded-full"></div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-6 text-center relative overflow-hidden pt-32 pb-20">
          {/* Futuristic Status Badge */}
          <div className="mb-12 inline-flex items-center gap-3 px-6 py-2 border border-[#00ffd1]/20 bg-black/40 backdrop-blur-md rounded-full text-[11px] font-data tracking-[0.3em] uppercase text-[#00ffd1] animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffd1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffd1]"></span>
            </span>
            Platform Status: Operational // AI Powered
          </div>

          <h1 className="font-headline text-6xl md:text-9xl font-semibold leading-[1.1] mb-10 max-w-7xl tracking-[-0.04em] text-white">
            اصنع <span className="text-[#00ffd1] font-light italic">مستقبلك</span> الاستثماري
            <br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">في قلب رؤية 2030</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mb-16 font-body leading-relaxed opacity-70 font-light">
            بيئة سيادية آمنة تجمع بين طموح الرواد وذكاء المستثمرين. نوظف تقنيات الذكاء الاصطناعي لاختيار الفرص الأكثر نمواً وتأثيراً في الاقتصاد الجديد.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mb-24">
            <Link
              href="/opportunities"
              className="group relative px-14 py-6 bg-white text-black font-semibold text-xl rounded-full transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-[#00ffd1] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors">
                اكتشف الفرص الحالية
                <span className="material-symbols-outlined font-black text-2xl">arrow_outward</span>
              </span>
            </Link>
            <Link
              href="/add-idea"
              className="group relative px-14 py-6 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold text-xl rounded-full transition-all hover:border-[#00ffd1]/50 hover:bg-white/10 active:scale-95"
            >
              <span className="flex items-center gap-3">
                اطرح مشروعك الآن
                <span className="material-symbols-outlined font-black text-2xl text-[#00ffd1]">add_circle</span>
              </span>
            </Link>
          </div>

          {/* Minimalist Tech Bar */}
          <div className="w-full max-w-7xl border-y border-white/5 py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 opacity-40 hover:opacity-100 transition-opacity duration-700">
              {[
                { label: "AI Verification", val: "Active" },
                { label: "Legal Framework", val: "KSA Standard" },
                { label: "Data Encryption", val: "AES-256" },
                { label: "Matchmaking", val: "Real-time" },
                { label: "Support", val: "24/7 Elite" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 items-center md:items-start">
                  <span className="text-[10px] font-data tracking-widest uppercase text-[#00ffd1]">{item.label}</span>
                  <span className="text-sm font-medium text-white">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Performance Stats */}
        <section className="w-full border-b border-white/5 py-16 bg-white/[0.01]">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start gap-2 group cursor-default">
                <span className={`font-data text-4xl md:text-5xl ${stat.color} font-bold tracking-tighter group-hover:scale-110 transition-transform duration-500`}>
                  {stat.value}
                </span>
                <span className="text-slate-500 font-medium font-headline tracking-wide text-sm opacity-60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Path Gate */}
        <section className="py-32 px-6 container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl text-right">
              <h2 className="font-headline text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                بوابتك نحو <span className="text-[#00ffd1]">التأثير.</span>
              </h2>
              <p className="text-xl text-slate-500 font-light">اختر هويتك الاستثمارية لنرشدك إلى المسار الأكثر كفاءة وموثوقية.</p>
            </div>
            <div className="font-data text-[#00ffd1] text-xs tracking-[0.4em] uppercase opacity-40">Identity Selection // ID_REQ</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {paths.map((path, i) => (
              <div
                key={i}
                className={`group relative p-12 h-full border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-3xl transition-all duration-700 hover:border-[#00ffd1]/30 hover:bg-white/[0.04] ${path.featured ? "ring-1 ring-[#00ffd1]/20" : ""}`}
              >
                <div className="relative z-10 flex flex-col h-full text-right">
                  <div className={`w-16 h-16 rounded-2xl ${path.bg} flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                    <span className={`material-symbols-outlined text-4xl text-${path.color}`}>
                      {path.icon}
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold mb-6 text-white font-headline">
                    {path.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-body text-lg opacity-80 mb-10">
                    {path.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-data text-[#00ffd1] tracking-widest uppercase">Start Journey</span>
                    <span className="material-symbols-outlined text-[#00ffd1] -rotate-180">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Ecosystem Features */}
        <section className="py-32 px-6 bg-white/[0.01] relative overflow-hidden border-y border-white/5">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl text-right">
                <h2 className="font-headline text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                  التميز <span className="opacity-30 italic">التقني.</span>
                </h2>
                <p className="text-xl text-slate-500 font-light">بنية تحتية متطورة تضمن كفاءة الربط بين الموارد والطموح.</p>
              </div>
              <div className="font-data text-[#00ffd1] text-xs tracking-[0.4em] uppercase opacity-40">System Core // v3.0</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="group p-10 relative overflow-hidden transition-all duration-500 hover:bg-white/[0.02] text-right"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/5 group-hover:border-[#00ffd1]/30 transition-all duration-700"></div>
                  <div className="text-[#00ffd1] mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-5xl font-light">
                      {feat.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-4 font-headline tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {feat.title}
                  </h4>
                  <p className="text-slate-500 font-body leading-relaxed text-lg opacity-80">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Interactive Steps */}
        <HowItWorks />

        {/* Strategic Saudi Hub Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10 text-right">
                <div className="inline-block px-4 py-1 border border-[#00ffd1]/20 bg-[#00ffd1]/5 rounded-lg font-data text-[10px] text-[#00ffd1] tracking-[0.3em] uppercase">
                  Future Vision // 2030
                </div>
                <h2 className="text-5xl md:text-7xl font-headline font-semibold leading-tight text-white">
                  نحن لا نبني منصة، 
                  <br />
                  <span className="text-[#00ffd1]">بل نصمم اقتصاد الغد.</span>
                </h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl ml-auto">
                  تلتزم IDEA BUSINESS بتمكين العقول السعودية وربطها بالموارد التي تحتاجها للنمو. من قلب الرياض، نفتح آفاقاً جديدة للاستثمار الجريء والنمو المستدام وفق معايير عالمية.
                </p>
                <div className="flex justify-end gap-12 pt-4">
                  <div>
                    <span className="text-4xl font-data text-white block mb-2 font-bold tracking-tighter">100%</span>
                    <span className="text-slate-500 text-sm font-headline tracking-wider uppercase opacity-60">Saudi DNA</span>
                  </div>
                  <div>
                    <span className="text-4xl font-data text-[#00ffd1] block mb-2 font-bold tracking-tighter">Elite</span>
                    <span className="text-slate-500 text-sm font-headline tracking-wider uppercase opacity-60">Network</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffd1]/10 to-transparent blur-3xl opacity-20"></div>
                <div className="relative p-12 border border-white/10 rounded-[3rem] bg-black/40 backdrop-blur-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8">
                    <span className="text-[40px] font-data text-[#00ffd1]/10 leading-none">01</span>
                  </div>
                  <div className="space-y-8 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <span className="font-data text-[10px] text-[#00ffd1] tracking-widest uppercase">System Message</span>
                      <div className="h-2 w-2 rounded-full bg-[#00ffd1]"></div>
                    </div>
                    <p className="text-3xl font-light text-white/90 leading-snug italic font-headline">
                      "هدفنا هو جعل المملكة العربية السعودية الوجهة الأولى عالمياً للاستثمار في الأفكار الريادية والذكاء الاصطناعي."
                    </p>
                    <div className="flex items-center justify-end gap-5 pt-6">
                      <div className="text-right">
                        <div className="text-white text-lg font-semibold tracking-wide">القيادة الاستراتيجية</div>
                        <div className="text-slate-500 text-xs font-data uppercase tracking-[0.2em]">Vision 2030 Alignment</div>
                      </div>
                      <div className="h-14 w-14 rounded-full bg-[#00ffd1]/10 border border-[#00ffd1]/20 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-[#00ffd1] text-2xl">verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Hub Final Call */}
        <section className="py-40 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ffd1]/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="font-data text-[11px] text-[#00ffd1] tracking-[0.5em] uppercase opacity-60">Global Network // Saudi Innovation</div>
              <h2 className="text-6xl md:text-8xl font-headline font-semibold text-white leading-tight">
                العالم ينتظر <br /><span className="text-[#00ffd1]">فكرتك القادمة.</span>
              </h2>
              <p className="text-2xl text-slate-400 font-light leading-relaxed opacity-70">
                انضم إلى أكبر تجمع استثماري في الشرق الأوسط وابدأ رحلة التحول الرقمي والمالي اليوم.
              </p>
              <div className="pt-10 text-right flex justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-4 px-16 py-8 bg-white text-black font-bold text-2xl rounded-full hover:scale-110 active:scale-95 transition-all shadow-[0_30px_60px_rgba(255,255,255,0.15)] group"
                >
                  <span className="material-symbols-outlined font-black text-3xl group-hover:-translate-x-2 transition-transform rotate-180">arrow_outward</span>
                  ابدأ الآن مجاناً
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <TrendingIdeas />
        </section>

        <section className="py-20 border-t border-white/5">
          <FAQSection />
        </section>
      </main>

      <footer className="w-full py-20 px-12 grid grid-cols-1 md:grid-cols-3 gap-12 bg-[#050b14] border-t border-primary-container/10 relative z-10">
        <div className="flex flex-col gap-6">
          <div className="font-data text-primary-container font-black text-3xl tracking-tighter">
            IDEA BUSINESS
          </div>
          <p className="font-body text-sm text-slate-500 max-w-xs leading-relaxed">
            المنصة الرائدة في الشرق الأوسط لربط الأفكار الريادية برؤوس الأموال الذكية باستخدام تقنيات الذكاء الاصطناعي.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 text-right">
            <h5 className="text-primary-container font-black mb-2 uppercase tracking-widest text-xs">الروابط</h5>
            {[
              { text: "الشروط والأحكام", href: "/terms" },
              { text: "سياسة الخصوصية", href: "/privacy" },
              { text: "اتصل بنا", href: "/contact" },
              { text: "خارطة الطريق", href: "/roadmap" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-slate-500 hover:text-white transition-colors font-body text-sm">
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 text-right">
            <h5 className="text-primary-container font-black mb-2 uppercase tracking-widest text-xs">مجالاتنا</h5>
            {["التكنولوجيا المالية", "الطاقة المتجددة", "الذكاء الاصطناعي", "الصحة الرقمية"].map((link, i) => (
              <Link key={i} href="#" className="text-slate-500 hover:text-white transition-colors font-body text-sm">
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 items-end">
          <div className="flex gap-4">
            {["public", "alternate_email", "share"].map((icon, i) => (
              <a key={i} href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center hover:bg-primary-container/10 hover:text-primary-container transition-all">
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </a>
            ))}
          </div>
          <p className="font-data text-[10px] text-slate-600 uppercase tracking-[0.2em]">
            © 2024 IDEA BUSINESS. السيادة المالية الرقمية.
          </p>
        </div>
      </footer>
    </div>
  );
}
