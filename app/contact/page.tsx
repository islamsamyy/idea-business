import { Navbar } from '@/components/layout/Navbar';

export default function ContactPage() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden" dir="rtl">
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none z-0"></div>
      <Navbar />
      <main className="container mx-auto px-6 py-32 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50">
            {/* // تواصل معنا */}
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            نحن هنا لمساعدتك
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            سواء كنت مستثمراً يبحث عن فرصة ذهبية، أو مؤسساً بشغف للإبداع، نحن هنا للإجابة على جميع استفساراتك.
          </p>
        </div>
        <div className="bg-[#0A1628] p-10 md:p-14 border border-white/5 relative">
          <div className="l-bracket-tr opacity-20"></div>
          <div className="l-bracket-bl opacity-20"></div>
          <form className="flex flex-col gap-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-slate-400">الاسم الكامل</label>
                 <input type="text" className="bg-white/5 border border-white/10 p-4 text-white focus:border-primary-container outline-none transition-colors" placeholder="الاسم ثلاثي..." />
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-slate-400">البريد الإلكتروني</label>
                 <input type="email" className="bg-white/5 border border-white/10 p-4 text-white focus:border-primary-container outline-none transition-colors" placeholder="email@example.com" />
               </div>
            </div>
            <div className="flex flex-col gap-2">
               <label className="text-sm font-bold text-slate-400">الموضوع</label>
               <input type="text" className="bg-white/5 border border-white/10 p-4 text-white focus:border-primary-container outline-none transition-colors" placeholder="موضوع استفسارك..." />
            </div>
            <div className="flex flex-col gap-2">
               <label className="text-sm font-bold text-slate-400">الرسالة</label>
               <textarea rows={6} className="bg-white/5 border border-white/10 p-4 text-white focus:border-primary-container outline-none transition-colors resize-none" placeholder="كيف يمكننا مساعدتك؟ شاركنا تفاصيل طلبك..."></textarea>
            </div>
            <button type="button" className="bg-primary-container text-background font-black py-5 mt-4 clip-button hover:brightness-110 active:scale-95 transition-all text-xl shadow-[0_0_20px_rgba(0,255,209,0.1)] flex items-center justify-center gap-3">
              إرسال الرسالة
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
