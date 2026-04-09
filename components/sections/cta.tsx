import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative bg-gradient-to-br from-surface-container-high to-surface-container p-12 md:p-20 overflow-hidden corner-bracket text-primary-container">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT1GLPmK5SSsyRp-c1vEkqCUSwwqjQ70mi5yZk0Lo0OdMc1gj85Kn5TUARp04IFceLeugCbW-5SRzNZm-Y_u7DRjyQmZkUav67OAffcaMZZKnG3hUmsyFvrTYayYFWEp-epjJYEAdz4RELgrWlgzKMCuDftLGr6JDlI25xwocmvIjainF_ORYbJGytnG1VsqBwzD1cjcnFLHT3EeUvj2jespcK_iPP6AGe1nrg2UTFqtcZsMBUFF4shBhexGXQMj5oQZpYRyCWdNg" 
              alt="Background"
            />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8">هل أنت مستعد لبدء رحلتك الاستثمارية؟</h2>
            <p className="text-foreground/80 text-lg mb-12 max-w-2xl mx-auto font-body">انضم إلى آلاف المبدعين والمستثمرين في أكبر بيئة تقنية عربية لتمويل المشاريع.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary-container text-[#10131a] font-bold px-12 py-8 clip-button text-xl hover:scale-105 transition-all">
                ابدأ الآن مجاناً
              </Button>
              <Button variant="outline" className="border-white/20 text-white font-bold px-12 py-8 clip-button text-xl hover:bg-white/5 transition-all">
                تواصل مع مستشار
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
