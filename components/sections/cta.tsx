import Link from "next/link";
import Image from "next/image";

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative bg-gradient-to-br from-primary-container/15 via-surface-container-high to-secondary/10 dark:from-surface-container-high dark:to-surface-container p-12 md:p-20 overflow-hidden corner-bracket text-primary-container border border-primary-container/20 rounded-2xl shadow-[0_8px_40px_rgba(0,255,209,0.1)]">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Image
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT1GLPmK5SSsyRp-c1vEkqCUSwwqjQ70mi5yZk0Lo0OdMc1gj85Kn5TUARp04IFceLeugCbW-5SRzNZm-Y_u7DRjyQmZkUav67OAffcaMZZKnG3hUmsyFvrTYayYFWEp-epjJYEAdz4RELgrWlgzKMCuDftLGr6JDlI25xwocmvIjainF_ORYbJGytnG1VsqBwzD1cjcnFLHT3EeUvj2jespcK_iPP6AGe1nrg2UTFqtcZsMBUFF4shBhexGXQMj5oQZpYRyCWdNg"
              alt="Background"
              fill
            />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-8">هل أنت مستعد لبدء رحلتك الاستثمارية؟</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto font-body">انضم إلى آلاف المبدعين والمستثمرين في أكبر بيئة تقنية عربية لتمويل المشاريع.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-gradient-to-r from-primary-container to-accent text-background font-bold px-12 py-4 clip-button text-xl hover:scale-105 transition-all inline-flex items-center justify-center shadow-[0_4px_20px_rgba(0,255,209,0.3)]">
                ابدأ الآن مجاناً
              </Link>
              <Link href="/contact" className="border-2 border-primary-container/40 text-foreground font-bold px-12 py-4 clip-button text-xl hover:bg-primary-container/10 transition-all inline-flex items-center justify-center">
                تواصل مع مستشار
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
