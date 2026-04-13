import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

export default async function OpportunityDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const supabase = await createClient();
  
  const { data: project, error } = await supabase
    .from('projects')
    .select('*, founder:founder_id(*)')
    .eq('id', params.id)
    .single();

  if (error || !project) {
    notFound();
  }

  const founder = Array.isArray(project.founder) ? project.founder[0] : project.founder;
  
  const raised = project.amount_raised || 0;
  const target = project.funding_goal || 0;
  const percentage = target > 0 ? Math.min(100, Math.round((raised / target) * 100)) : 0;
  const remaining = Math.max(0, target - raised);

  const stats = [
    { label: 'العائد المتوقع', value: project.roi || 'غير محدد', color: 'text-primary-container' },
    { label: 'الحد الأدنى', value: `${project.min_invest.toLocaleString()} ريال`, color: 'text-secondary-fixed-dim' },
    { label: 'الحالة', value: project.status === 'active' ? 'نشط' : 'مغلق', color: 'text-tertiary-fixed-dim' },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none"></div>
      
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-grow space-y-12">
            <header>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-container/10 text-primary-container text-[10px] font-black px-3 py-1 border border-primary-container/20 uppercase tracking-widest">
                  {project.category || 'عام'}
                </span>
                {project.verified && (
                  <span className="flex items-center gap-1 text-secondary-container text-[10px] font-black uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    مُتحقق
                  </span>
                )}
              </div>
              <h1 className="font-headline text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tight">{project.title}</h1>
              <div className="flex flex-wrap gap-8 text-slate-500 font-data text-xs uppercase tracking-widest border-y border-white/5 py-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  نشر: {new Date(project.created_at).toLocaleDateString('ar-SA')}
                </div>
              </div>
            </header>

            <section className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="l-bracket-tr opacity-10"></div>
              <h3 className="text-xl font-black text-white mb-6 font-headline uppercase tracking-tight">ملخص الفكرة</h3>
              <p className="text-slate-400 leading-relaxed text-lg font-body">{project.description || 'لم يتم تقديم وصف تفصيلي.'}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-900 border border-white/5 p-6 text-center rounded-xl">
                  <span className={`block text-2xl font-black font-data mb-2 ${stat.color}`}>{stat.value}</span>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Investment Widget */}
          <aside className="lg:w-[450px] space-y-8">
            <div className="bg-[#0A1628] border border-primary-container/20 p-8 clip-button relative shadow-[0_0_50px_rgba(0,255,209,0.05)]">
              <div className="l-bracket-tr"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-primary-container to-secondary-container"></div>
              
              <h3 className="text-2xl font-black text-white mb-8 font-headline text-center uppercase">بيانات التمويل</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-slate-500 text-xs font-black uppercase tracking-widest">إجمالي التمويل المستهدف</span>
                  <span className="text-white font-data text-2xl font-black">{target.toLocaleString()} ريال</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden flex">
                  <div className="h-full bg-primary-container shadow-[0_0_10px_#00ffd1]" style={{ width: `${percentage}%` }}></div>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-primary-container">تم جمع {percentage}٪</span>
                  <span className="text-slate-500">متبقي {remaining.toLocaleString()} ريال</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <p className="text-slate-400 text-sm font-body leading-relaxed italic">
                  * الحد الأدنى للاستثمار في هذا المشروع: {project.min_invest.toLocaleString()} ريال.
                </p>
                <div className="p-4 bg-secondary-container/5 border border-secondary-container/20 rounded-xl flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary-container">shield_with_heart</span>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    هذا المشروع قد يكون خاضعًا لاتفاقية حفظ السرية. تواصل مع المؤسس لمزيد من التفاصيل.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link href={`/messages/new?project=${project.id}`} className="w-full bg-primary-container text-background font-black py-5 text-xl clip-button text-center shadow-[0_0_30px_rgba(0,255,209,0.2)] hover:brightness-110 active:scale-95 transition-all">
                  تواصل مع المؤسس
                </Link>
                <button className="w-full border border-white/10 text-white font-black py-5 text-xl clip-button hover:bg-white/5 active:scale-95 transition-all">
                  حفظ الفرصة الاستثمارية
                </button>
              </div>
            </div>

            {/* Founder Info */}
            {founder && (
              <div className="bg-[#0A1628] border border-white/5 p-8 relative grayscale hover:grayscale-0 transition-all cursor-pointer group">
                <div className="flex gap-6 items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-white/10 overflow-hidden shrink-0 group-hover:border-primary-container transition-colors">
                    <Image width={80} height={80} src={founder.avatar_url || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"} alt={founder.full_name || 'مؤسس غير معروف'} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white font-headline">{founder.full_name || 'مؤسس غير معروف'}</h4>
                    <p className="text-slate-500 text-sm mb-2">{founder.bio || 'مؤسس مشروع'}</p>
                    {founder.kyc_status === 'verified' && (
                      <span className="text-primary-container font-data text-[10px] font-black uppercase tracking-widest border border-primary-container/30 px-2 py-0.5">Verified Founder</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
