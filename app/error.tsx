'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-hidden" dir="rtl">
      <div className="fixed inset-0 scanline opacity-5 pointer-events-none z-0"></div>
      <Navbar />
      <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center relative z-10 p-6">
        <h1 className="font-headline text-[120px] md:text-[200px] leading-none font-black text-error opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          500
        </h1>
        <div className="relative z-10 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-6xl text-error mb-6 opacity-80 bg-error/10 p-4 rounded-full">
            warning
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 font-headline">
            حدث خطأ غير متوقع
          </h2>
          <p className="text-slate-400 max-w-md mx-auto mb-10 font-body leading-relaxed">
            واجهنا مشكلة خطيرة أثناء معالجة طلبك. مهندسونا على علم بالمشكلة ويعملون على حلها على الفور.
          </p>
          <button 
            onClick={() => reset()}
            className="border border-error/50 text-error font-black px-10 py-5 clip-button inline-flex items-center gap-3 hover:bg-error/10 active:scale-95 transition-all text-lg"
          >
            حاول مرة أخرى
            <span className="material-symbols-outlined font-black">refresh</span>
          </button>
        </div>
      </main>
    </div>
  );
}
