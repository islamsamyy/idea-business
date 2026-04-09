import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

export default function HomePage() {
  const stats = [
    { value: '+١٢٤', label: 'فكرة ومشروع', color: 'text-primary-container' },
    { value: '٤٧', label: 'مستثمر معتمد', color: 'text-secondary-fixed-dim' },
    { value: '٢٩', label: 'صفقة مُنجزة', color: 'text-tertiary-fixed-dim' },
    { value: '٦٨M', label: 'ريال تمويل مُوجَّه', color: 'text-primary-container' },
  ];

  const paths = [
    {
      icon: 'account_balance_wallet',
      title: 'مستثمر',
      description: 'اكتشف فرصاً استثمارية واعدة ومُتحقق منها في السوق العربي عبر أدوات تقييم ذكية.',
      color: 'secondary-fixed-dim',
      bg: 'bg-secondary-container/5',
    },
    {
      icon: 'business_center',
      title: 'صاحب مشروع',
      description: 'مشروع قائم يحتاج توسيع، شريك، أو استثمار إضافي لرفع كفاءة العمليات التشغيلية.',
      color: 'primary-container',
      bg: 'bg-primary-container/5',
      featured: true,
    },
    {
      icon: 'emoji_objects',
      title: 'صاحب فكرة',
      description: 'لديك فكرة متميزة وتبحث عن تمويل أو شريك استراتيجي لتحويل المخطط إلى واقع ملموس.',
      color: 'tertiary-fixed-dim',
      bg: 'bg-tertiary-fixed-dim/5',
    },
  ];

  const features = [
    { icon: 'bolt', title: 'رحلة سلسة وسريعة', description: 'نقلص الفجوة الزمنية بين الفكرة والتنفيذ عبر إجراءات رقمية مؤتمتة بالكامل.' },
    { icon: 'verified_user', title: 'بيئة آمنة وموثوقة', description: 'نظام تحقق متقدم من الهوية والأهلية المالية لضمان جدية كافة الأطراف.' },
    { icon: 'smart_toy', title: 'ذكاء اصطناعي متكامل', description: 'محرك تحليل ذكي يربط الأفكار بالمستثمرين الأكثر ملاءمة بناءً على التاريخ الاستثمارية.' },
    { icon: 'language', title: 'ثنائية اللغة', description: 'دعم كامل للغتين العربية والإنجليزية لفتح آفاق الاستثمار الإقليمي والدولي.' },
    { icon: 'monitoring', title: 'تحليلات لحظية', description: 'لوحة تحكم شاملة تعرض أداء استثماراتك وتفاعل السوق مع فكرتك لحظة بلحظة.' },
    { icon: 'payments', title: 'دفع آمن ومنظم', description: 'بوابة دفع معتمدة تضمن شفافية التحويلات المالية وتوثيق العقود إلكترونياً.' },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0 opacity-10"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-10"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-secondary-container/10 blur-[150px] -z-10 rounded-full"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary-container/10 blur-[150px] -z-10 rounded-full"></div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-6 text-center relative overflow-hidden pt-20">
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-1 border border-primary-container/30 bg-primary-container/5 rounded-full text-xs font-bold tracking-widest text-primary-container animate-pulse">
            <span className="material-symbols-outlined text-sm">pentagon</span>
            المنصة العربية الأذكى — POWERED BY AI
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-black leading-tight mb-6 max-w-5xl uppercase tracking-tighter">
            حوّل فكرتك 
            <span className="bg-gradient-to-l from-primary-container to-secondary-container bg-clip-text text-transparent px-4">إلى واقع</span>
            أو اكتشف فرصتك 
            <span className="text-tertiary-fixed-dim font-data px-4">القادمة</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 font-body leading-relaxed">
            IDEA BUSINESS — منصة ذكية آمنة تربط أصحاب الأفكار بالمستثمرين عبر بيئة موثوقة ومنظمة بمعايير عالمية.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            <Link href="/add-idea" className="bg-primary-container text-background font-black text-xl px-10 py-5 clip-button shadow-[0_0_30px_rgba(0,255,209,0.2)] hover:brightness-110 transition-all flex items-center gap-3 active:scale-95">
              أعلن عن فكرتك
              <span className="material-symbols-outlined font-black">lightbulb</span>
            </Link>
            <Link href="/opportunities" className="border border-primary-container/50 text-primary-container font-black text-xl px-10 py-5 clip-button hover:bg-primary-container/5 transition-all flex items-center gap-3 active:scale-95">
              استعرض الفرص
              <span className="material-symbols-outlined font-black">search</span>
            </Link>
          </div>

          {/* Scrolling Ticker */}
          <div className="w-full overflow-hidden whitespace-nowrap mask-gradient opacity-30 mt-12">
            <div className="flex gap-12 animate-scroll-rtl text-slate-500 font-black text-sm uppercase tracking-[0.2em]">
              {Array(4).fill([
                '✦ منصة موثوقة', 
                '✦ ذكاء اصطناعي', 
                '✦ حماية قانونية', 
                '✦ دفع آمن', 
                '✦ ثنائية اللغة'
              ]).flat().map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Live Stats */}
        <section className="w-full bg-primary-container/[0.04] border-y border-primary-container/20 py-10">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex flex-col gap-2">
                <span className={`font-data text-4xl md:text-5xl ${stat.color} font-black`}>{stat.value}</span>
                <span className="text-slate-500 font-bold font-headline">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Path Selection */}
        <section className="py-24 px-6 container mx-auto">
          <div className="text-right mb-16">
            <span className="font-data text-xs text-primary-container block mb-2 tracking-[0.3em] uppercase opacity-50">// اختر مسارك</span>
            <h2 className="font-headline text-5xl md:text-6xl font-black text-white uppercase tracking-tight">من أنت؟</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paths.map((path, i) => (
              <div key={i} className={`group relative bg-[#0A1628] p-10 h-full border border-white/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden ${path.featured ? 'border-primary-container/30 shadow-[0_0_40px_rgba(0,255,209,0.1)]' : ''}`}>
                <div className="l-bracket-tr opacity-20"></div>
                <div className="l-bracket-bl opacity-20"></div>
                <div className={`absolute inset-0 ${path.bg} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative z-10">
                  <span className={`material-symbols-outlined text-5xl mb-6 text-${path.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{path.icon}</span>
                  <h3 className="text-3xl font-black mb-4 text-white font-headline">{path.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-body">{path.description}</p>
                  {path.featured && (
                    <div className="mt-8 flex justify-end">
                      <span className="material-symbols-outlined animate-bounce text-primary-container">arrow_downward</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-surface-container-lowest relative overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <span className="font-data text-xs text-primary-container block mb-4 tracking-[0.3em] uppercase opacity-50">// لماذا نحن؟</span>
              <h2 className="font-headline text-5xl md:text-6xl font-black text-white uppercase tracking-tight">لماذا IDEA BUSINESS؟</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {features.map((feat, i) => (
                <div key={i} className="bg-[#0A1628] p-12 relative group overflow-hidden hover:bg-slate-900 transition-colors">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-container opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-primary-container mb-6">
                    <span className="material-symbols-outlined text-4xl font-black group-hover:scale-110 transition-transform">{feat.icon}</span>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 font-headline uppercase">{feat.title}</h4>
                  <p className="text-slate-400 font-body leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="relative bg-[#0A1628] p-12 md:p-20 overflow-hidden border border-white/5">
              <div className="l-bracket-tr"></div>
              <div className="l-bracket-bl"></div>
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none grayscale">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200" alt="Tech Background" />
              </div>
              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-headline uppercase tracking-tight leading-tight">هل أنت مستعد لبدء رحلتك الاستثمارية؟</h2>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-body">انضم إلى آلاف المبدعين والمستثمرين في أكبر بيئة تقنية عربية لتمويل المشاريع.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register" className="bg-primary-container text-background font-black px-12 py-5 clip-button text-xl hover:scale-105 transition-all active:scale-95">ابدأ الآن مجاناً</Link>
                  <Link href="/contact" className="border border-white/20 text-white font-black px-12 py-5 clip-button text-xl hover:bg-white/5 transition-all active:scale-95">تواصل مع مستشار</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
          <div className="flex flex-col gap-4">
            <h5 className="text-primary-container font-black mb-2 uppercase tracking-widest text-xs">الروابط</h5>
            {['الشروط والأحكام', 'سياسة الخصوصية', 'اتصل بنا', 'خارطة الطريق'].map((link, i) => (
              <Link key={i} href="#" className="text-slate-500 hover:text-white transition-colors font-body text-sm">{link}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-primary-container font-black mb-2 uppercase tracking-widest text-xs">مجالاتنا</h5>
            {['التكنولوجيا المالية', 'الطاقة المتجددة', 'الذكاء الاصطناعي', 'الصحة الرقمية'].map((link, i) => (
              <Link key={i} href="#" className="text-slate-500 hover:text-white transition-colors font-body text-sm">{link}</Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 items-end">
          <div className="flex gap-4">
            {['public', 'alternate_email', 'share'].map((icon, i) => (
              <a key={i} href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center hover:bg-primary-container/10 hover:text-primary-container transition-all group">
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
