'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { createClient } from '@/lib/supabase/client';

export default function SettingsPage() {
  const supabase = createClient();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (password !== confirmPassword) {
      setError('كلمة المرور غير متطابقة');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('كلمة المرور يجب أن تتكون من 6 أحرف على الأقل');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) throw error;
      
      setMessage('تم تحديث كلمة المرور بنجاح');
      setPassword('');
      setConfirmPassword('');
    } catch (err: unknown) {
      setError((err as Error).message || 'حدث خطأ أثناء التحديث');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      <div className="fixed inset-0 hex-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-10"></div>
      
      <Navbar />
      <DashboardSidebar />

      <main className="xl:mr-64 pt-32 pb-32 px-6 max-w-7xl mx-auto z-10 relative">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-headline font-black text-white uppercase tracking-tight">إعدادات الأمان</h1>
            <p className="text-slate-400 font-body opacity-80 max-w-xl">تحصين هويتك الرقمية وأصولك الاستثمارية باستخدام بروتوكولات الأمان السيادية.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-8">
            {/* Active Sessions */}
            <section className="bg-surface-container-high/40 backdrop-blur-md p-8 border border-outline-variant/10 relative">
              <div className="l-bracket-tr opacity-40"></div>
              <div className="l-bracket-bl opacity-40"></div>
              <h3 className="text-xl font-headline font-bold text-white mb-6 uppercase tracking-tight">الجلسات النشطة</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface-container-lowest/50 border-l border-primary-container/20">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-container">desktop_windows</span>
                    <div className="text-right">
                      <p className="font-body text-sm font-bold">المتصفح الحالي</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-data text-primary-container bg-primary-container/10 px-2 py-1 uppercase font-bold tracking-widest">CURRENT</span>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-7">
            <section className="bg-surface-container-low/40 backdrop-blur-md p-8 lg:p-12 border-t-4 border-primary-container/30 border border-outline-variant/10">
              <h3 className="text-2xl font-headline font-bold text-white mb-10 flex items-center gap-4 uppercase tracking-tight">
                <span className="material-symbols-outlined text-primary-container">lock_reset</span>
                تغيير كلمة المرور
              </h3>
              <form className="space-y-8" onSubmit={handlePasswordUpdate}>
                
                {error && <div className="bg-red-500/10 text-red-500 p-4 border border-red-500/50">{error}</div>}
                {message && <div className="bg-green-500/10 text-green-500 p-4 border border-green-500/50">{message}</div>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-headline font-bold uppercase tracking-widest text-slate-400">كلمة المرور الجديدة</label>
                    <div className="relative">
                      <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent border-x-0 border-t-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-data py-4 px-0 transition-all placeholder:text-slate-600" 
                        placeholder="••••••••••••" 
                        type="password"
                        required
                        minLength={6}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-headline font-bold uppercase tracking-widest text-slate-400">تأكيد كلمة المرور</label>
                    <div className="relative">
                      <input 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-transparent border-x-0 border-t-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-data py-4 px-0 transition-all placeholder:text-slate-600" 
                        placeholder="••••••••••••" 
                        type="password"
                        required
                        minLength={6}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-12 flex justify-end">
                  <button disabled={loading} className="group relative px-12 py-5 bg-primary-container text-background font-headline font-black text-lg overflow-hidden active:scale-95 transition-all clip-button uppercase tracking-widest disabled:opacity-50" type="submit">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                    <span className="relative z-10 flex items-center gap-3">
                      {loading ? 'جاري الحفظ...' : 'حفظ التغييرات'}
                      {!loading && <span className="material-symbols-outlined">bolt</span>}
                    </span>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
