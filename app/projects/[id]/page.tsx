'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0"></div>
      
      <Navbar />
      <DashboardSidebar />

      <main className="xl:mr-64 pt-32 pb-32 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="mb-8 flex gap-2">
           <Link href="/opportunities" className="text-primary-container text-sm font-data hover:underline">السوق</Link>
           <span className="text-slate-500">/</span>
           <span className="text-slate-300 text-sm font-data">مشروع الذكاء الاصطناعي</span>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-white mb-4">
            نيوم-الرياض: النقل الذكي
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg mb-8 leading-relaxed">
            منصة متكاملة لإدارة أسطول النقل الجوي داخل المدن، مدعومة بخوارزميات التعلم العميق لتقليل الازدحام بنسبة 40%.
          </p>
          <div className="flex flex-wrap gap-4">
             <Link href={`/projects/${id}/funding`}>
              <Button className="bg-primary-container text-[#050b14] font-bold px-8 py-3 clip-button hover:shadow-[0_0_15px_rgba(0,255,209,0.3)] transition-all uppercase tracking-widest font-data">
                تمويل المشروع
              </Button>
            </Link>
            <Button variant="outline" className="border-secondary-container text-secondary-container bg-secondary-container/5 px-8 py-3 clip-button hover:bg-secondary-container hover:text-black transition-all">
              تواصل مع المؤسس
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-surface-container p-8 relative">
              <div className="l-bracket-tr"></div>
              <h2 className="text-2xl font-bold font-headline mb-4 text-[#00ffd1]">الملخص التنفيذي</h2>
              <p className="text-slate-300 leading-loose">
                يهدف المشروع إلى تأسيس بنية تحتية برمجية متطورة لإدارة وتوجيه مركبات الإقلاع والهبوط العمودي (eVTOL) في مسارات جوية مخصصة داخل المدن السعودية الكبرى. تستخدم المنصة أحدث تقنيات توجيه المسار والذكاء الاصطناعي...
              </p>
            </div>

            <div className="bg-surface-container p-8 relative">
              <div className="l-bracket-tr"></div>
              <h2 className="text-2xl font-bold font-headline mb-4 text-secondary-container">العرض المرئي (Pitch)</h2>
              <div className="aspect-video bg-surface-container-high border border-outline-variant/30 flex items-center justify-center relative group cursor-pointer">
                 <span className="material-symbols-outlined text-6xl text-slate-500 group-hover:text-secondary-container transition-colors">play_circle</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-surface-container-high p-6 border-t-2 border-[#00ffd1]">
              <h3 className="font-bold text-white mb-4">معلومات أساسية</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-outline-variant pb-2">
                  <span className="text-slate-500 text-sm">التصنيف</span>
                  <span className="text-white font-bold">التنقل الذكي (Mobility)</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant pb-2">
                  <span className="text-slate-500 text-sm">المرحلة</span>
                  <span className="text-[#00ffd1] font-bold">بذرة (Seed)</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant pb-2">
                  <span className="text-slate-500 text-sm">التقييم المستهدف</span>
                  <span className="text-white font-bold">40,000,000 ر.س</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-surface-container p-6 relative">
               <h3 className="font-bold font-headline text-secondary-container mb-4">الفريق المؤسس</h3>
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-surface-container-highest rounded-full overflow-hidden border border-secondary-container/30">
                    <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" width={48} height={48} alt="Founder" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <p className="text-sm font-bold text-white">د. طارق الناصر</p>
                    <p className="text-[10px] text-slate-400 font-data uppercase">CEO & Founder</p>
                 </div>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
