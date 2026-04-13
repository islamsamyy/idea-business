import { Navbar } from '@/components/layout/Navbar';

export default function TermsPage() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden" dir="rtl">
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none z-0"></div>
      <Navbar />
      <main className="container mx-auto px-6 py-32 relative z-10 max-w-4xl">
        <div className="text-right mb-16 border-b border-white/10 pb-8">
          <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50">
            {/* // الوثائق القانونية */}
          </span>
          <h1 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            الشروط والأحكام
          </h1>
          <p className="text-slate-400 font-data text-sm">أخر تحديث: 1 أبريل 2026</p>
        </div>
        
        <div className="bg-[#0A1628] p-10 md:p-14 border border-white/5 relative prose prose-invert max-w-none text-slate-300">
          <div className="l-bracket-tr opacity-20"></div>
          <div className="l-bracket-bl opacity-20"></div>
          
          <div className="relative z-10 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-white mb-4">1. مقدمة</h2>
              <p className="leading-relaxed">
                مرحباً بك في منصة IDEA BUSINESS. باستخدامك لهذه المنصة، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء منها، يرجى عدم استخدام خدماتنا.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-black text-white mb-4">2. التزامات المستخدم</h2>
              <p className="leading-relaxed">
                يجب أن تكون جميع المعلومات المقدمة عند التسجيل (سواء كمستثمر أو صاحب فكرة) دقيقة وحديثة. المنصة غير مسؤولة عن أي بيانات خاطئة يتم تقديمها، ويتحمل المستخدم كامل المسؤولية القانونية تجاه الأطراف الثالثة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4">3. الملكية الفكرية</h2>
              <p className="leading-relaxed">
                جميع الأفكار المشاركة في المنصة تخضع لسياسة سرية المعلومات (NDA) الافتراضية بمجرد وصول المستثمر إليها. لا يحق لأي طرف نسخ أو استغلال الأفكار خارج إطار المنصة دون اتفاق مسبق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4">4. المدفوعات والرسوم</h2>
              <p className="leading-relaxed">
                تحتفظ المنصة بالحق في تعديل رسوم الاشتراكات أو العمولة على الصفقات المنجزة، وسيتم إشعار جميع المستخدمين قبل 30 يوماً من سريان أي تعديل مالي.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
