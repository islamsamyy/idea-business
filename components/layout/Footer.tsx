import Link from 'next/link';

export function Footer() {
  const SOCIALS = [
    { label: 'Twitter', href: 'https://twitter.com/ideabusiness', icon: 'language' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ideabusiness', icon: 'business' },
    { label: 'YouTube', href: 'https://youtube.com/@ideabusiness', icon: 'smart_display' },
    { label: 'GitHub', href: 'https://github.com/ideabusiness', icon: 'code' },
  ];

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-primary-container/15 bg-surface-container-lowest dark:bg-[#080b12] transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-primary-container corner-bracket flex items-center justify-center interactive-glow rounded-md">
              <span className="material-symbols-outlined text-primary-container text-xl animate-pulse-gentle">filter_tilt_shift</span>
            </div>
            <span className="text-2xl font-black font-headline tracking-tighter text-foreground">IDEA <span className="text-primary-container">BUSINESS</span></span>
          </div>
          <p className="text-muted-foreground font-body leading-relaxed hover:text-foreground transition-colors duration-200">
            المنصة العربية الرائدة التي تجمع بين العقول المبدعة والمستثمرين الطموحين لتحويل الأفكار إلى واقع اقتصادي ملموس ومستدام.
          </p>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h5 className="text-foreground font-bold mb-6 text-xl tracking-wide font-headline">المنصة</h5>
          <ul className="space-y-4 text-muted-foreground font-body">
            <li><Link href="/" className="hover:text-primary-container transition-all duration-200 hover:translate-x-1 inline-block">عن المنصة</Link></li>
            <li><Link href="/opportunities" className="hover:text-primary-container transition-all duration-200 hover:translate-x-1 inline-block">تصفح المشاريع</Link></li>
            <li><Link href="/trust" className="hover:text-primary-container transition-all duration-200 hover:translate-x-1 inline-block">قصص النجاح</Link></li>
            <li><Link href="/" className="hover:text-primary-container transition-all duration-200 hover:translate-x-1 inline-block">فريقنا</Link></li>
          </ul>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h5 className="text-foreground font-bold mb-6 text-xl tracking-wide font-headline">الدعم</h5>
          <ul className="space-y-4 text-muted-foreground font-body">
            <li><Link href="/trust" className="hover:text-primary-container transition-all duration-200 hover:translate-x-1 inline-block">الأسئلة الشائعة</Link></li>
            <li><Link href="/privacy" className="hover:text-primary-container transition-all duration-200 hover:translate-x-1 inline-block">سياسة الخصوصية</Link></li>
            <li><Link href="/terms" className="hover:text-primary-container transition-all duration-200 hover:translate-x-1 inline-block">الشروط والأحكام</Link></li>
            <li><Link href="/contact" className="hover:text-primary-container transition-all duration-200 hover:translate-x-1 inline-block">اتصل بنا</Link></li>
          </ul>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h5 className="text-foreground font-bold mb-6 text-xl tracking-wide font-headline">تابعنا</h5>
          <div className="flex gap-4">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-12 h-12 border-2 border-primary-container/30 flex items-center justify-center hover:border-primary-container hover:text-primary-container hover:bg-primary-container/10 transition-all duration-300 rounded-lg interactive-glow transform hover:scale-110">
                <span className="material-symbols-outlined text-sm">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-10 border-t border-primary-container/15 text-center text-muted-foreground font-data text-xs tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="hover:text-foreground transition-colors duration-200">© ٢٠٢٦ IDEA BUSINESS. جميع الحقوق محفوظة</span>
        <span className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
          MADE IN SAUDI ARABIA
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-gentle shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
        </span>
      </div>
    </footer>
  );
}
