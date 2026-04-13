import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

export default function NotFound() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-hidden" dir="rtl">
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none z-0"></div>
      <Navbar />
      <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center relative z-10 p-6">
        <h1 className="font-headline text-[120px] md:text-[200px] leading-none font-black text-primary-container opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          404
        </h1>
        <div className="relative z-10 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-6xl text-primary-container mb-6 opacity-80 shadow-[0_0_20px_rgba(0,255,209,0.3)] bg-primary-container/10 p-4 rounded-full">
            explore_off
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 font-headline">
            الصفحة غير موجودة
          </h2>
          <p className="text-slate-400 max-w-md mx-auto mb-10 font-body leading-relaxed">
            عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تكون معطلة، أو تم تغيير رابطها، أو أنك تبحر في مجرة خاطئة.
          </p>
          <Link 
            href="/"
            className="bg-primary-container text-background font-black px-10 py-5 clip-button inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all text-lg shadow-[0_0_30px_rgba(0,255,209,0.2)]"
          >
            العودة للرئيسية
            <span className="material-symbols-outlined font-black">home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
