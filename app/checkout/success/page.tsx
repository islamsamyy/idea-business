'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!sessionId) {
      router.replace('/opportunities');
      return;
    }
    const timer = setInterval(() => {
      setCountdown((n) => {
        if (n <= 1) {
          clearInterval(timer);
          router.push('/portfolio');
        }
        return n - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [sessionId, router]);

  return (
    <div className="bg-background text-foreground min-h-screen" dir="rtl">
      <Navbar />
      <main className="pt-40 pb-32 px-6 max-w-2xl mx-auto text-center">
        <div className="bg-surface-container-low/40 backdrop-blur-md border border-primary-container/20 p-16 relative">
          <div className="l-bracket-tr"></div>
          <div className="l-bracket-bl"></div>

          <span className="material-symbols-outlined text-7xl text-primary-container block mb-6">
            task_alt
          </span>

          <h1 className="text-4xl font-headline font-black text-foreground uppercase tracking-tight mb-4">
            تم الاستثمار بنجاح
          </h1>

          <p className="text-muted-foreground font-body mb-2">
            تمت معالجة دفعتك وتأكيد استثمارك بنجاح.
          </p>
          <p className="text-muted-foreground font-body mb-12 text-sm">
            سيتم إخطارك عند أي تحديث على المشروع.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/portfolio')}
              className="bg-primary-container text-background font-black px-8 py-4 clip-button hover:brightness-110 transition-all uppercase tracking-widest font-headline"
            >
              عرض محفظتي
            </button>
            <button
              onClick={() => router.push('/opportunities')}
              className="bg-white/10 text-foreground font-black px-8 py-4 border border-white/20 hover:bg-white/20 transition-all uppercase tracking-widest font-headline"
            >
              تصفح المزيد
            </button>
          </div>

          <p className="text-muted-foreground text-xs mt-8 font-data">
            سيتم توجيهك تلقائياً إلى محفظتك خلال {countdown} ثوانٍ
          </p>
        </div>
      </main>
    </div>
  );
}
