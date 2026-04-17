'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error('يرجى ملء جميع الحقول');
      return;
    }

    if (password.length < 8) {
      toast.error('يجب أن تكون كلمة المرور 8 أحرف على الأقل');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('كلمات المرور غير متطابقة');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        toast.error(error.message || 'حدث خطأ في تحديث كلمة المرور');
        return;
      }

      setSuccess(true);
      toast.success('تم تغيير كلمة المرور بنجاح');

      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err) {
      toast.error('حدث خطأ غير متوقع');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="fixed inset-0 neon-grid pointer-events-none opacity-20"></div>
      <div className="fixed inset-0 scanline pointer-events-none opacity-5"></div>

      <div className="w-full max-w-md">
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 font-data font-bold text-primary-container text-lg tracking-tighter hover:opacity-80 transition-opacity mb-12">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
          IDEA BUSINESS
        </Link>

        {!success ? (
          <div className="relative">
            {/* Decorative Brackets */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary-container opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary-container opacity-40"></div>

            <div className="relative p-8 border border-primary-container/20 bg-surface-container-low/40 backdrop-blur-sm rounded-2xl">
              <h1 className="text-3xl font-black font-headline text-foreground mb-2">
                إعادة تعيين
                <br />
                <span className="text-primary-container">كلمة المرور</span>
              </h1>
              <p className="text-muted-foreground text-sm mb-8">
                أدخل كلمة مرور جديدة قوية لحماية حسابك
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    كلمة المرور الجديدة
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="أدخل كلمة مرور قوية"
                    className="w-full px-4 py-3 bg-background border border-primary-container/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-container/60 transition-colors"
                    disabled={loading}
                  />
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    تأكيد كلمة المرور
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="أعد إدخال كلمة المرور"
                    className="w-full px-4 py-3 bg-background border border-primary-container/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-container/60 transition-colors"
                    disabled={loading}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-primary-container text-[#050608] font-black rounded-lg hover:brightness-110 transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed clip-button mt-8"
                >
                  {loading ? 'جاري التحديث...' : 'تحديث كلمة المرور'}
                </button>
              </form>

              {/* Back to Login Link */}
              <p className="text-center text-muted-foreground text-sm mt-6">
                تذكرت كلمة المرور؟{' '}
                <Link href="/login" className="text-primary-container font-semibold hover:opacity-80 transition-opacity">
                  دخول
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-green-500 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-green-500 opacity-40"></div>

            <div className="relative p-8 border border-green-500/20 bg-green-500/5 backdrop-blur-sm rounded-2xl text-center">
              <span className="material-symbols-outlined text-6xl text-green-500 block mb-4 animate-bounce">check_circle</span>
              <h2 className="text-2xl font-black font-headline text-foreground mb-2">
                تم التحديث بنجاح
              </h2>
              <p className="text-muted-foreground mb-6">
                تم تغيير كلمة المرور بنجاح. سيتم نقلك إلى صفحة الدخول...
              </p>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-primary-container font-semibold hover:opacity-80 transition-opacity"
              >
                انقر هنا للدخول فوراً
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
