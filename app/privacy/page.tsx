import { Navbar } from '@/components/layout/Navbar';

export default function PrivacyPage() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden" dir="rtl">
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none z-0"></div>
      <Navbar />
      <main className="container mx-auto px-6 py-32 relative z-10 max-w-4xl">
        <div className="text-right mb-16 border-b border-white/10 pb-8">
          <span className="font-data text-xs text-secondary-fixed-dim block mb-3 tracking-[0.3em] uppercase opacity-50">
            {/* // حماية البيانات */}
          </span>
          <h1 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-slate-400 font-data text-sm">أخر تحديث: 1 أبريل 2026</p>
        </div>
        
        <div className="bg-[#0A1628] p-10 md:p-14 border border-white/5 relative prose prose-invert max-w-none text-slate-300">
          <div className="l-bracket-tr opacity-20"></div>
          <div className="l-bracket-bl opacity-20"></div>
          
          <div className="relative z-10 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-white mb-4">1. جمع البيانات</h2>
              <p className="leading-relaxed">
                نحن نجمع البيانات الضرورية فقط والخاصة بإنشاء الملفات الشخصية وإجراء التحقق الأمني (KYC). يشمل ذلك بيانات الاتصال، البيانات المالية للمستثمرين، وبيانات المشروع للرواد.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-black text-white mb-4">2. استخدام البيانات</h2>
              <p className="leading-relaxed">
                تستخدم البيانات حصرياً في خوارزميات الذكاء الاصطناعي الخاصة بنا للربط العادل والدقيق بين المشاريع ورؤوس الأموال، ولا يتم بيع أو تأجير أي بيانات شخصية لأطراف ثالثة لجهود إعلانية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4">3. التشفير والحماية</h2>
              <p className="leading-relaxed">
                جميع بيانات المستخدمين مشفرة بأحدث بروتوكولات الأمان (End-to-End Encryption)، ويتم تخزين الملفات والمستندات الحساسة في خوادم سحابية محمية لا يمكن الوصول إليها إلا للمصرح لهم.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
