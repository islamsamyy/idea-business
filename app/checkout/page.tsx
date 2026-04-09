'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';

export default function CheckoutPage() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0 opacity-10"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-10"></div>
      
      <Navbar />

      <main className="pt-32 pb-32 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="text-right">
            <h1 className="text-4xl md:text-5xl font-headline font-black text-primary-container uppercase tracking-tight">تأكيد الاستثمار</h1>
            <p className="text-slate-400 font-body text-lg mt-2">الخطوة النهائية لتأمين حصتك في المستقبل العقاري</p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low/40 backdrop-blur-md p-4 relative border border-outline-variant/10">
            <div className="l-bracket-tr"></div>
            <div className="l-bracket-bl"></div>
            <div className="text-right font-data">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">TRANSACTION_ID</div>
              <div className="text-primary-container text-sm">TX-990-231-X</div>
            </div>
            <span className="material-symbols-outlined text-tertiary-fixed-dim">verified_user</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Payment & Legal) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Payment Method Card */}
            <section className="bg-surface-container-low/40 backdrop-blur-md p-8 border border-outline-variant/10 relative group">
              <div className="l-bracket-tr"></div>
              <div className="l-bracket-bl"></div>
              <h2 className="text-xl font-headline font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tight">
                <span className="material-symbols-outlined text-primary-container">payments</span>
                طريقة الدفع
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'رصيد المحفظة', sub: 'Wallet Balance', icon: 'account_balance_wallet', active: true },
                  { label: 'تحويل بنكي', sub: 'Bank Transfer', icon: 'account_balance' },
                  { label: 'إيداع الضمان', sub: 'Escrow Deposit', icon: 'security' }
                ].map((item, i) => (
                  <label key={i} className="relative cursor-pointer group">
                    <input defaultChecked={item.active} className="peer hidden" name="payment" type="radio"/>
                    <div className="p-6 bg-surface-container-high/40 border-2 border-transparent peer-checked:border-primary-container peer-checked:bg-primary-container/10 transition-all text-center">
                      <span className={`material-symbols-outlined text-3xl mb-3 block ${item.active ? 'text-primary-container' : 'text-slate-500'} group-hover:text-primary-container`}>{item.icon}</span>
                      <span className="font-headline font-black text-white block text-sm uppercase tracking-widest">{item.label}</span>
                      <span className="font-data text-[10px] text-slate-500 mt-1 block uppercase">{item.sub}</span>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            {/* Legal Consent Card */}
            <section className="bg-surface-container-low/40 backdrop-blur-md p-8 border border-outline-variant/10 relative">
              <div className="l-bracket-tr"></div>
              <div className="l-bracket-bl"></div>
              <h2 className="text-xl font-headline font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tight">
                <span className="material-symbols-outlined text-secondary-container">gavel</span>
                الموافقات القانونية
              </h2>
              <div className="space-y-4">
                <label className="flex items-start gap-4 cursor-pointer p-4 hover:bg-surface-container-high/40 transition-colors">
                  <div className="mt-1">
                    <input defaultChecked className="w-5 h-5 bg-background border-outline-variant text-primary-container focus:ring-primary-container/20 rounded-none cursor-pointer" type="checkbox"/>
                  </div>
                  <div className="text-sm font-body text-slate-300 leading-relaxed text-right">
                    أوافق على <span className="text-primary-container font-black hover:underline cursor-pointer uppercase">اتفاقية الاستثمار</span> و <span className="text-tertiary-fixed-dim font-black hover:underline cursor-pointer uppercase">الإفصاح عن المخاطر</span>. أتفهم أن جميع الاستثمارات تحمل مخاطر مالية وقد تتقلب قيمتها.
                  </div>
                </label>
                <div className="p-4 bg-secondary-container/10 border-r-2 border-secondary-container text-right">
                  <p className="text-sm text-secondary-container font-headline font-black mb-1 uppercase tracking-widest">تنبيه النظام الذكي:</p>
                  <p className="text-xs text-slate-400 font-body">تم تحليل هذا العقد بواسطة AI-Audit v4.2 بنسبة توافق 99.8% مع المعايير الدولية.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <button className="w-full group relative">
              <div className="absolute inset-0 bg-primary-container blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-primary-container text-background py-6 px-10 flex items-center justify-between clip-button hover:brightness-110 transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined text-3xl font-black">arrow_forward</span>
                <span className="text-2xl font-headline font-black uppercase tracking-widest">تأكيد الاستثمار وتوقيع العقد</span>
              </div>
            </button>
          </div>

          {/* Right Column (Order Summary) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <div className="bg-surface-container-high/40 backdrop-blur-md p-8 border border-outline-variant/10 relative shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="l-bracket-tr"></div>
                <div className="l-bracket-bl"></div>
                <h2 className="font-headline text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8 border-b border-outline-variant/10 pb-4 text-right">ملخص العملية الاستثمارية</h2>
                <div className="mb-8 text-right">
                  <div className="text-[10px] text-primary-container mb-2 font-headline font-black uppercase tracking-widest">المشروع</div>
                  <h3 className="text-2xl font-headline font-black text-white leading-tight uppercase tracking-tight">منصة مزادات العقارات بالذكاء الاصطناعي</h3>
                </div>
                <div className="space-y-6">
                  <div className="text-right">
                    <label className="text-[10px] text-slate-500 mb-3 block font-headline font-black uppercase tracking-widest">مبلغ الاستثمار (USD)</label>
                    <div className="relative">
                      <input className="w-full bg-background/50 border-b-2 border-outline-variant/30 focus:border-primary-container transition-colors py-4 px-4 font-data text-2xl text-white focus:ring-0 outline-none text-right pr-12" type="text" defaultValue="50,000.00"/>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-container font-data text-sm">$</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 border-t border-outline-variant/10">
                    <span className="font-data text-white">750.00 <span className="text-[10px] text-slate-500 uppercase font-black">USD</span></span>
                    <span className="text-slate-400 font-body text-sm font-bold tracking-widest">رسوم المنصة (1.5%)</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-t border-outline-variant/10">
                    <span className="font-data text-white">0.00 <span className="text-[10px] text-slate-500 uppercase font-black">USD</span></span>
                    <span className="text-slate-400 font-body text-sm font-bold tracking-widest">الضرائب التقديرية</span>
                  </div>
                  <div className="mt-8 pt-8 border-t-2 border-dashed border-outline-variant/20">
                    <div className="flex justify-between items-end">
                      <div className="text-left w-full">
                        <div className="text-4xl font-data font-black text-primary-container drop-shadow-[0_0_15px_rgba(0,255,209,0.3)]">
                          50,750.00
                        </div>
                        <div className="text-[10px] text-slate-500 font-data mt-1 uppercase font-bold tracking-[0.2em]">USD TOTAL</div>
                      </div>
                      <span className="text-lg font-headline font-black text-white uppercase tracking-widest text-right whitespace-nowrap ml-4">الإجمالي النهائي</span>
                    </div>
                  </div>
                </div>
                {/* Data Pulse Decoration */}
                <div className="mt-8 h-12 flex items-end gap-1 px-2 opacity-30">
                  {[4, 8, 6, 10, 5, 7, 3, 12, 6, 9, 4, 7].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary-container" style={{ height: `${h * 4}px` }}></div>
                   ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low/40 backdrop-blur-md p-4 flex items-center gap-3 border border-outline-variant/10 text-right justify-end">
                  <span className="text-[10px] text-slate-500 font-headline font-black uppercase tracking-tight leading-tight">تشفير عسكري من طرف إلى طرف</span>
                  <span className="material-symbols-outlined text-primary-container">lock</span>
                </div>
                <div className="bg-surface-container-low/40 backdrop-blur-md p-4 flex items-center gap-3 border border-outline-variant/10 text-right justify-end">
                  <span className="text-[10px] text-slate-500 font-headline font-black uppercase tracking-tight leading-tight">منظمة عقود ذكية معتمدة</span>
                  <span className="material-symbols-outlined text-primary-container">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
