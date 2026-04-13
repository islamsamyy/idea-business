'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

export default function TrustCenter() {
  const certifications = [
    { name: 'ISO 27001', provider: 'أمن المعلومات', icon: 'verified' },
    { name: 'PCI-DSS', provider: 'أمان المدفوعات', icon: 'payments' },
    { name: 'SOC2 Type II', provider: 'الخصوصية والأمان', icon: 'security' },
    { name: 'GDPR', provider: 'حماية البيانات', icon: 'policy' },
  ];

  const features = [
    {
      title: 'اتفاقيات عدم الإفصاح (NDA)',
      desc: 'حماية قانونية تلقائية لكل فكرة يتم طرحها، حيث يلتزم المستثمرون بشروط صارمة قبل الاطلاع على التفاصيل الحساسة.',
      icon: 'gavel',
    },
    {
      title: 'نظام النقاط المعتمد',
      desc: 'تصنيف ديناميكي للمستثمرين وأصحاب المشاريع بناءً على سجل التعاملات والصدق في المعلومات المقدمة.',
      icon: 'military_tech',
    },
    {
      title: 'التحقق من الهوية (KYC)',
      desc: 'عملية تدقيق شاملة لكافة المشاركين لضمان عدم وجود أنشطة مشبوهة أو معلومات مضللة.',
      icon: 'how_to_reg',
    },
    {
      title: 'مدفوعات الضمان (Escrow)',
      desc: 'لا يتم تحويل الأموال إلا بعد استيفاء الشروط التعاقدية الموثقة بين الطرفين عبر طرف ثالث محايد.',
      icon: 'account_balance',
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary-container/5 blur-[150px] rounded-full -z-10"></div>

      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-20 text-center">
            <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50">{/* // بروتوكولات الأمان */}</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8">مركز الثقة</h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              في IDEA BUSINESS، نحن لا نربط بين الناس فحسب، بل نبني بيئة تقوم على النزاهة المطلقة والأمان التقني العالي. ثقتكم هي أثمن ما نملك.
            </p>
          </header>

          {/* Verification Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 text-center rounded-2xl group hover:border-primary-container/30 transition-all">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-4 block">{cert.icon}</span>
                <h3 className="text-white font-black font-data text-xl mb-1">{cert.name}</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{cert.provider}</p>
              </div>
            ))}
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {features.map((feat, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="shrink-0 w-16 h-16 bg-primary-container/10 border border-primary-container/20 flex items-center justify-center clip-button transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-primary-container text-3xl font-black">{feat.icon}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white mb-3 font-headline uppercase">{feat.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-body">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Section */}
          <div className="bg-[#0A1628] border border-white/5 p-12 relative overflow-hidden group">
            <div className="l-bracket-tr opacity-20"></div>
            <div className="l-bracket-bl opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="shrink-0">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-5xl text-slate-400">policy</span>
                </div>
              </div>
              <div className="flex-grow text-center md:text-right">
                <h3 className="text-3xl font-black text-white mb-4 font-headline uppercase tracking-tight">إطار عمل قانوني متين</h3>
                <p className="text-slate-400 mb-8 font-body">
                  نعمل بالتعاون مع كبرى المكاتب القانونية لضمان أن كافة العقود المتولدة عبر المنصة ملزمة وقابلة للتنفيذ في كافة السلطات القضائية التي نعمل بها.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link href="#" className="bg-white text-background font-black px-8 py-4 clip-button hover:bg-primary-container transition-all">تحميل دليل الأمان</Link>
                  <Link href="#" className="border border-white/10 text-white font-black px-8 py-4 clip-button hover:bg-white/5 transition-all">الشروط والأحكام</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Support CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 mb-8 font-body">لديك استفسار حول كيفية حماية بياناتك؟ نحن هنا للإجابة.</p>
          <button className="text-primary-container font-black flex items-center gap-3 mx-auto group">
            <span className="w-12 h-px bg-primary-container/30 group-hover:w-20 transition-all"></span>
            التحدث إلى مسؤول الامتثال
            <span className="w-12 h-px bg-primary-container/30 group-hover:w-20 transition-all"></span>
          </button>
        </div>
      </section>
    </div>
  );
}
