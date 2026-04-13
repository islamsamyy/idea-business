'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast.error(error.message || 'حدث خطأ أثناء إرسال البريد');
      } else {
        toast.success('تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.');
      }
    } catch {
      toast.error('حدث خطأ غير متوقع.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-hidden flex items-center justify-center p-6" dir="rtl">
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline opacity-5 pointer-events-none z-0"></div>
      <div className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="font-data text-primary-container font-black text-3xl tracking-tighter inline-block drop-shadow-[0_0_15px_rgba(0,255,209,0.3)]">
            IDEA BUSINESS
          </Link>
          <div className="mt-8">
            <h1 className="text-3xl font-black text-white mb-2 font-headline uppercase">استعادة الحساب</h1>
            <p className="text-slate-400 text-sm font-body">أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور.</p>
          </div>
        </div>

        <div className="bg-[#0A1628] p-8 border border-white/5 relative">
          <div className="l-bracket-tr opacity-20"></div>
          <div className="l-bracket-bl opacity-20"></div>
          
          <form className="flex flex-col gap-5" onSubmit={handleResetPassword}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-400">البريد الإلكتروني</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">mail</span>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@ideabusiness.com"
                  className="w-full bg-white/5 border border-white/10 p-4 pr-12 text-white font-data text-right outline-none focus:border-primary-container focus:bg-primary-container/5 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="bg-primary-container text-background font-black p-4 mt-2 clip-button hover:brightness-110 active:scale-95 transition-all text-lg shadow-[0_0_20px_rgba(0,255,209,0.1)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? 'جاري الإرسال...' : 'إرسال رابط الاستعادة'}
              {!loading && <span className="material-symbols-outlined">send</span>}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-white/5 pt-6">
            <p className="text-slate-500 text-sm">
              تذكرت كلمة المرور؟{" "}
              <Link href="/login" className="text-primary-container font-bold hover:underline">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
