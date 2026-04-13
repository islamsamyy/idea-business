'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { createClient } from '@/lib/supabase/client';

export default function AddIdeaPage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    target: '500000',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert('يجب تسجيل الدخول أولاً');
        return;
      }

      const targetAmount = parseFloat(formData.target.replace(/,/g, ''));

      const { error } = await supabase.from('projects').insert({
        title: formData.title,
        category: formData.category,
        description: formData.description,
        funding_goal: targetAmount || 0,
        amount_raised: 0,
        min_invest: targetAmount ? Math.round(targetAmount * 0.05) : 0, // Mock 5% minimum
        founder_id: user.id,
        status: 'active' // assuming default is active or draft
      });

      if (error) throw error;
      
      router.push('/projects');
    } catch (error) {
      console.error(error);
      alert('حدث خطأ أثناء إضافة الفكرة');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      {/* Global Background Elements */}
      <div className="fixed inset-0 hex-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-10"></div>
      
      <Navbar />
      <DashboardSidebar />

      {/* Main Content Area */}
      <main className="xl:mr-64 pt-32 pb-32 px-6 max-w-4xl mx-auto z-10 relative">
        {/* Breadcrumbs */}
        <div className="flex items-center justify-end gap-2 text-xs text-slate-500 mb-6">
          <span className="text-primary-container font-headline font-bold uppercase tracking-widest">إضافة فكرة جديدة</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="hover:text-primary-container cursor-pointer transition-colors font-headline font-bold uppercase tracking-widest">المشاريع</span>
        </div>

        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6 text-right w-full">
          <div className="hidden lg:block text-right self-end">
            <span className="text-xs text-slate-500 block mb-1 font-headline font-bold uppercase tracking-widest">معرف المعاملة</span>
            <span className="font-data text-primary-container text-sm">TX-ADD-IDEA</span>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-headline font-black text-white mb-2 tracking-tight uppercase">أضف فكرتك الاستثمارية</h1>
            <p className="text-slate-400 text-lg font-body">قم بتحويل رؤيتك إلى واقع رقمي مدعوم بالذكاء الاصطناعي</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/15 relative p-10 group shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <div className="l-bracket-tr"></div>
          <div className="l-bracket-bl"></div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group/field">
                <label className="absolute -top-3 right-4 px-2 bg-surface-container-low text-[10px] font-headline font-black text-primary-container uppercase tracking-[0.2em] z-10">اسم الفكرة</label>
                <input 
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-transparent border border-outline-variant/50 focus:border-primary-container focus:ring-0 px-5 py-4 text-white font-body transition-all placeholder:text-slate-700 text-right" 
                  placeholder="مثال: تطبيق التداول الذكي" 
                  type="text"
                />
              </div>
              <div className="relative group/field">
                <label className="absolute -top-3 right-4 px-2 bg-surface-container-low text-[10px] font-headline font-black text-primary-container uppercase tracking-[0.2em] z-10">القطاع</label>
                <select 
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-transparent border border-outline-variant/50 focus:border-primary-container focus:ring-0 px-5 py-4 text-white font-body transition-all appearance-none cursor-pointer text-right"
                >
                  <option disabled value="">اختر القطاع المناسب</option>
                  <option value="fintech" className="bg-background">التكنولوجيا المالية (FinTech)</option>
                  <option value="realestate" className="bg-background">العقارات</option>
                  <option value="ai" className="bg-background">الذكاء الاصطناعي</option>
                  <option value="health" className="bg-background">الرعاية الصحية</option>
                </select>
                <span className="material-symbols-outlined absolute left-4 top-4 text-slate-500 pointer-events-none group-focus-within/field:text-primary-container transition-colors">expand_more</span>
              </div>
            </div>

            <div className="relative group/field">
              <label className="absolute -top-3 right-4 px-2 bg-surface-container-low text-[10px] font-headline font-black text-primary-container uppercase tracking-[0.2em] z-10">وصف مختصر</label>
              <div className="relative">
                <textarea 
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-transparent border border-outline-variant/50 focus:border-primary-container focus:ring-0 px-5 py-4 text-white font-body transition-all placeholder:text-slate-700 min-h-[150px] text-right" 
                  placeholder="اشرح فكرتك بإيجاز للمستثمرين..."
                ></textarea>
                <button type="button" className="absolute bottom-4 left-4 flex items-center gap-2 bg-secondary-container/10 hover:bg-secondary-container/30 text-secondary-container border border-secondary-container/50 px-3 py-1.5 transition-all clip-button text-[10px] font-headline font-black uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  <span>AI Optimize</span>
                </button>
              </div>
            </div>

            <div className="relative group/field">
              <label className="absolute -top-3 right-4 px-2 bg-surface-container-low text-[10px] font-headline font-black text-primary-container uppercase tracking-[0.2em] z-10">التمويل المطلوب (USD)</label>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative flex-1 w-full text-right">
                  <input 
                    required
                    value={formData.target}
                    onChange={(e) => setFormData({...formData, target: e.target.value})}
                    className="w-full bg-transparent border border-outline-variant/50 focus:border-primary-container focus:ring-0 px-5 py-4 text-primary-container font-data text-2xl transition-all text-right pl-20" 
                    type="text" 
                  />
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700 font-data">USD</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex justify-between items-center">
              <button disabled={loading} className="bg-primary-container hover:bg-primary-fixed text-background font-headline font-black px-10 py-4 clip-button transition-all flex items-center gap-3 uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(0,255,209,0.2)] disabled:opacity-50" type="submit">
                <span>{loading ? 'جاري الحفظ...' : 'نشر الفكرة'}</span>
                {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
              </button>
              <button onClick={() => router.back()} className="text-slate-500 hover:text-white transition-colors font-headline font-black px-6 py-3 flex items-center gap-2 uppercase tracking-widest text-xs" type="button">
                <span>إلغاء</span>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
