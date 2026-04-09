export function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-[#080b12]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-primary-container corner-bracket flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-container text-xl animate-pulse">filter_tilt_shift</span>
            </div>
            <span className="text-2xl font-black font-headline tracking-tighter text-white">IDEA <span className="text-primary-container">BUSINESS</span></span>
          </div>
          <p className="text-muted-foreground font-body leading-relaxed">
            المنصة العربية الرائدة التي تجمع بين العقول المبدعة والمستثمرين الطموحين لتحويل الأفكار إلى واقع اقتصادي ملموس ومستدام.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 text-xl tracking-wide font-headline">المنصة</h5>
          <ul className="space-y-4 text-muted-foreground font-body">
            <li><a href="#" className="hover:text-primary-container transition-colors">عن المنصة</a></li>
            <li><a href="#" className="hover:text-primary-container transition-colors">تصفح المشاريع</a></li>
            <li><a href="#" className="hover:text-primary-container transition-colors">قصص النجاح</a></li>
            <li><a href="#" className="hover:text-primary-container transition-colors">فريقنا</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 text-xl tracking-wide font-headline">الدعم</h5>
          <ul className="space-y-4 text-muted-foreground font-body">
            <li><a href="#" className="hover:text-primary-container transition-colors">الأسئلة الشائعة</a></li>
            <li><a href="#" className="hover:text-primary-container transition-colors">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-primary-container transition-colors">الشروط والأحكام</a></li>
            <li><a href="#" className="hover:text-primary-container transition-colors">اتصل بنا</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 text-xl tracking-wide font-headline">تابعنا</h5>
          <div className="flex gap-4">
            {['twitter', 'facebook', 'linkedin', 'youtube'].map((social) => (
              <a key={social} href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-all">
                <span className="material-symbols-outlined uppercase text-sm">public</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-10 border-t border-white/5 text-center text-muted-foreground font-data text-xs tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© ٢٠٢٦ IDEA BUSINESS. جميع الحقوق محفوظة</span>
        <span className="flex items-center gap-2">
          MADE IN SAUDI ARABIA
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
        </span>
      </div>
    </footer>
  );
}
