import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function MyProjects() {
  const projects = [
    {
      title: 'نظام إدارة الطاقة الذكي - GreenPulse',
      status: 'نشط',
      views: '١.٢ ألف',
      interested: '١٤ استثمار',
      lastUpdate: 'قبل يومين',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
    },
    {
      title: 'منصة الحوسبة اللامركزية - NodeLink',
      status: 'مسودة',
      views: '٠',
      interested: '٠',
      lastUpdate: 'قبل أسبوع',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600',
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex relative overflow-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 scanline opacity-5 pointer-events-none"></div>
      
      <DashboardSidebar />

      <div className="flex-grow flex flex-col h-screen relative z-10 w-full overflow-y-auto">
        <Navbar />

        <main className="flex-grow p-6 pt-24 max-w-7xl mx-auto w-full">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50">// مشاريعك</span>
              <h1 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight">مشاريعي وأفكاري</h1>
            </div>
            <Link href="/add-idea" className="bg-primary-container text-background font-black px-8 py-4 clip-button text-lg flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,209,0.2)]">
              أضف فكرة جديدة
              <span className="material-symbols-outlined">add</span>
            </Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="bg-[#0A1628] border border-white/5 overflow-hidden flex flex-col md:flex-row group hover:border-primary-container/30 transition-all duration-500">
                <div className="md:w-48 h-48 md:h-auto overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                  <div className={`absolute top-3 right-3 px-3 py-1 text-[10px] font-black uppercase clip-button ${proj.status === 'نشط' ? 'bg-primary-container text-background' : 'bg-slate-700 text-slate-300'}`}>
                    {proj.status}
                  </div>
                </div>
                
                <div className="flex-grow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white mb-2 font-headline group-hover:text-primary-container transition-colors line-clamp-2">{proj.title}</h3>
                    <p className="text-slate-500 text-xs font-data uppercase tracking-widest mb-6 border-b border-white/5 pb-4">آخر تحديث: {proj.lastUpdate}</p>
                    
                    <div className="flex gap-6">
                      <div className="flex flex-col">
                        <span className="text-white font-black font-data text-lg">{proj.views}</span>
                        <span className="text-[10px] text-slate-500 uppercase font-black font-headline">مشاهدة</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-primary-container font-black font-data text-lg">{proj.interested}</span>
                        <span className="text-[10px] text-slate-500 uppercase font-black font-headline">مهتم</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button className="flex-grow bg-white/5 text-white font-black py-3 text-sm clip-button hover:bg-white/10 transition-all">تعديل</button>
                    <button className="flex-grow border border-white/10 text-slate-400 font-bold py-3 text-sm clip-button hover:text-white transition-all">التحليلات</button>
                    <button className="w-12 h-12 bg-secondary-container/10 text-secondary-container flex items-center justify-center clip-button hover:bg-secondary-container hover:text-background transition-all">
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State Mock */}
            {projects.length < 3 && (
              <div className="bg-slate-900 shadow-inner border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-12 text-center opacity-50">
                <span className="material-symbols-outlined text-5xl text-slate-700 mb-4">folder_open</span>
                <p className="text-slate-500 font-body">لا توجد مشاريع أخرى بانتظار المراجعة.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
