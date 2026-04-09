'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function SettingsPage() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-10"></div>
      
      <Navbar />
      <DashboardSidebar />

      {/* Main Content Area */}
      <main className="xl:mr-64 pt-32 pb-32 px-6 max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-headline font-black text-white uppercase tracking-tight">إعدادات الأمان</h1>
            <p className="text-slate-400 font-body opacity-80 max-w-xl">تحصين هويتك الرقمية وأصولك الاستثمارية باستخدام بروتوكولات الأمان السيادية.</p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-high/40 backdrop-blur-md p-4 border border-outline-variant/20">
            <div className="w-2 h-2 bg-primary-container rounded-full animate-pulse shadow-[0_0_8px_#00ffd1]"></div>
            <span className="font-data text-xs uppercase tracking-tighter text-primary-container">System Status: Active Integrity</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 2FA & Quick Controls */}
          <div className="lg:col-span-5 space-y-8">
            {/* 2FA Module */}
            <section className="bg-surface-container-high/40 backdrop-blur-md p-8 border border-outline-variant/10 relative overflow-hidden group">
              <div className="l-bracket-tr"></div>
              <div className="l-bracket-bl"></div>
              <div className="flex items-start justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-headline font-bold text-primary-container">المصادقة الثنائية (2FA)</h3>
                  <p className="text-sm text-slate-400 font-body">طبقة حماية إضافية تطلب رمزاً من هاتفك عند تسجيل الدخول.</p>
                </div>
                <span className="material-symbols-outlined text-primary-container text-4xl group-hover:rotate-12 transition-transform">vibration</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest/50 border-r-4 border-primary-container">
                <span className="font-body font-medium">تفعيل بروتوكول المصادقة</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input checked readOnly className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                </label>
              </div>
              <div className="mt-6 flex gap-4">
                <img className="w-24 h-24 border border-primary-container/30 p-2 bg-white/5" alt="QR Code" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUNGw1_XmzTjOypkKELfHr6ytT-iQfq6YUMc9-_wa0xuBEYPeFtidqkODq2ZLFXLd1GRlfVcPizarjBGkx8SYj7h6V48HPQhPQ-pygvQLfYq98F766qKrRNg_jl8yFTJvMCzauH2rIvBKWQyJ7BXUje0kJcXi3QOoaszCA7pNYRTvO8WmEnwQ7nYiLMMrp6Mb4IEZ9NFPbf2hAvmgIWNHeZLbJivQOD5JPzk3HfnY11wPTAVD8tXAoGdi8mkehV-yd5Vl8xC77lN4"/>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-xs text-slate-500 mb-2 font-body">امسح الرمز لتفعيل تطبيق Authenticator</p>
                  <code className="bg-surface-container text-primary-container font-data p-2 text-center text-sm tracking-widest">A79-X92-INTELL</code>
                </div>
              </div>
            </section>

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
                      <p className="font-body text-sm font-bold">متصفح كروم - ويندوز</p>
                      <p className="font-data text-xs text-slate-500">IP: 192.168.1.104</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-data text-primary-container bg-primary-container/10 px-2 py-1 uppercase font-bold tracking-widest">CURRENT</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface-container-lowest/50 border-l border-outline-variant/20">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-slate-400">smartphone</span>
                    <div className="text-right">
                      <p className="font-body text-sm font-bold">تطبيق آيفون - الرياض</p>
                      <p className="font-data text-xs text-slate-500">IP: 92.14.22.181</p>
                    </div>
                  </div>
                  <button className="text-red-500 text-xs font-headline font-bold hover:underline uppercase tracking-widest">إنهاء</button>
                </div>
              </div>
            </section>
          </div>

          {/* Password & Action Area */}
          <div className="lg:col-span-7">
            <section className="bg-surface-container-low/40 backdrop-blur-md p-8 lg:p-12 border-t-4 border-primary-container/30 border border-outline-variant/10">
              <h3 className="text-2xl font-headline font-bold text-white mb-10 flex items-center gap-4 uppercase tracking-tight">
                <span className="material-symbols-outlined text-primary-container">lock_reset</span>
                تغيير كلمة المرور
              </h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 col-span-full">
                    <label className="text-sm font-headline font-bold uppercase tracking-widest text-slate-400">كلمة المرور الحالية</label>
                    <div className="relative">
                      <input className="w-full bg-transparent border-x-0 border-t-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-data py-4 px-0 transition-all placeholder:text-slate-600" placeholder="••••••••••••" type="password"/>
                      <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer hover:text-primary-container transition-colors">visibility</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-headline font-bold uppercase tracking-widest text-slate-400">كلمة المرور الجديدة</label>
                    <div className="relative">
                      <input className="w-full bg-transparent border-x-0 border-t-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-data py-4 px-0 transition-all placeholder:text-slate-600" placeholder="••••••••••••" type="password"/>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-headline font-bold uppercase tracking-widest text-slate-400">تأكيد كلمة المرور</label>
                    <div className="relative">
                      <input className="w-full bg-transparent border-x-0 border-t-0 border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-data py-4 px-0 transition-all placeholder:text-slate-600" placeholder="••••••••••••" type="password"/>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-container/5 p-6 border-l border-primary-container/20 mt-12">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">info</span>
                    <div className="text-right space-y-2">
                      <h4 className="font-headline text-sm font-bold text-white uppercase tracking-widest">متطلبات القوة</h4>
                      <ul className="text-xs font-body text-slate-400 space-y-1 opacity-70">
                        <li>• يجب أن لا تقل عن 12 حرفاً</li>
                        <li>• يجب أن تحتوي على رموز معقدة (!@#$%^)</li>
                        <li>• استخدام خليط من الأرقام والحروف الكبيرة</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pt-12 flex justify-end">
                  <button className="group relative px-12 py-5 bg-primary-container text-background font-headline font-black text-lg overflow-hidden active:scale-95 transition-all clip-button uppercase tracking-widest" type="submit">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                    <span className="relative z-10 flex items-center gap-3">
                      حفظ التغييرات
                      <span className="material-symbols-outlined">bolt</span>
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
