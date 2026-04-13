'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { createClient } from '@/lib/supabase/client';

export default function KYCPage() {
  const router = useRouter();
  const supabase = createClient();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [idNumber, setIdNumber] = useState('');
  const [docType, setDocType] = useState('الهوية الوطنية');

  const steps = [
    { num: 1, label: 'الهوية الشخصية', icon: 'person' },
    { num: 2, label: 'توثيق العنوان', icon: 'location_on' },
    { num: 3, label: 'الإقرار الضريبي', icon: 'account_balance' },
    { num: 4, label: 'التحقق الحيوي', icon: 'face' },
  ];

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not logged in');

      if (!frontImage || !backImage || !idNumber) {
        alert('الرجاء إكمال جميع الحقول وإرفاق المستندات.');
        setLoading(false);
        return;
      }

      // Upload files to Supabase Storage
      const frontExt = frontImage.name.split('.').pop();
      const backExt = backImage.name.split('.').pop();
      
      const { error: frontUploadError } = await supabase.storage
        .from('kyc-documents')
        .upload(`${user.id}/front_${Date.now()}.${frontExt}`, frontImage);
      if (frontUploadError) throw frontUploadError;

      const { error: backUploadError } = await supabase.storage
        .from('kyc-documents')
        .upload(`${user.id}/back_${Date.now()}.${backExt}`, backImage);
      if (backUploadError) throw backUploadError;

      const { error } = await supabase.from('profiles').update({
        kyc_status: 'pending'
      }).eq('id', user.id);

      if (error) throw error;
      
      setStep(5); // Success step
    } catch (err: unknown) {
      console.error(err);
      alert('حدث خطأ أثناء رفع المستندات');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right" dir="rtl">
      <div className="fixed inset-0 scanline opacity-5 pointer-events-none"></div>
      
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 max-w-4xl">
        <header className="mb-12 text-center">
          <span className="font-data text-xs text-primary-container block mb-3 tracking-[0.3em] uppercase opacity-50"></span>
          <h1 className="font-headline text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">توثيق الهوية (KYC)</h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            تتطلب الأنظمة المالية العالمية التحقق من هوية كافة المشاركين في الصفقات الاستثمارية لضمان قانونية التحويلات وحماية كافة الأطراف.
          </p>
        </header>

        <div className="mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 -z-10"></div>
          <div className="flex justify-between">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-4 bg-background px-4">
                <div 
                  className={`w-14 h-14 flex items-center justify-center clip-button border-2 transition-all duration-500 ${step >= s.num ? 'bg-primary-container border-primary-container text-background shadow-[0_0_20px_#00ffd1]' : 'bg-slate-900 border-white/10 text-slate-500'}`}
                >
                  <span className="material-symbols-outlined font-black">{s.icon}</span>
                </div>
                <span className={`text-[10px] uppercase font-data font-black tracking-widest ${step >= s.num ? 'text-primary-container' : 'text-slate-600'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0A1628] border border-white/5 p-8 md:p-12 relative overflow-hidden">
          <div className="l-bracket-tr opacity-20"></div>
          <div className="l-bracket-bl opacity-20"></div>

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-left-4 duration-500">
              <h2 className="text-2xl font-black text-white mb-8 font-headline">تحميل وثيقة الهوية</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <label className="block font-data text-xs text-slate-500 uppercase tracking-widest">نوع الوثيقة</label>
                  <select 
                    className="w-full bg-slate-900 border border-white/10 p-4 rounded-xl text-white focus:border-primary-container transition-all outline-none"
                    value={docType}
                    onChange={(e) => setDocType(e.target.value)}
                  >
                    <option>الهوية الوطنية</option>
                    <option>جواز السفر</option>
                    <option>إقامة (للمقيمين)</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="block font-data text-xs text-slate-500 uppercase tracking-widest">رقم الهوية</label>
                  <input 
                    type="text" 
                    placeholder="10XXXXXXXX" 
                    className="w-full bg-slate-900 border border-white/10 p-4 rounded-xl text-white focus:border-primary-container transition-all outline-none" 
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <label className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center group hover:border-primary-container/50 transition-all cursor-pointer block relative">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    accept="image/*,.pdf" 
                    onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
                  />
                  <span className="material-symbols-outlined text-4xl text-slate-500 mb-4 group-hover:text-primary-container transition-colors">upload_file</span>
                  <p className="text-sm text-slate-400 mb-2">{frontImage ? frontImage.name : 'وجه الوثيقة الأمامي'}</p>
                  <p className="text-[10px] text-slate-600">JPG, PNG, PDF (Max 5MB)</p>
                </label>
                <label className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center group hover:border-primary-container/50 transition-all cursor-pointer block relative">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    accept="image/*,.pdf" 
                    onChange={(e) => setBackImage(e.target.files?.[0] || null)}
                  />
                  <span className="material-symbols-outlined text-4xl text-slate-500 mb-4 group-hover:text-primary-container transition-colors">upload_file</span>
                  <p className="text-sm text-slate-400 mb-2">{backImage ? backImage.name : 'وجه الوثيقة الخلفي'}</p>
                  <p className="text-[10px] text-slate-600">JPG, PNG, PDF (Max 5MB)</p>
                </label>
              </div>

              <div className="flex justify-end pt-8 border-t border-white/5">
                <button 
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-primary-container text-background font-black px-12 py-5 clip-button flex items-center gap-4 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
                >
                  {loading ? 'جاري الرفع...' : 'رفع المستندات وإرسال للتوثيق'}
                  {!loading && <span className="material-symbols-outlined">arrow_back</span>}
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center py-20 animate-in zoom-in duration-500">
              <span className="material-symbols-outlined text-7xl text-primary-container mb-6">task_alt</span>
              <h2 className="text-3xl font-black text-white mb-4 font-headline">تم الإرسال بنجاح</h2>
              <p className="text-slate-500 mb-12">طُلِب تحديث بيانات الـ KYC وسيتم البت فيها قريباً من قبل المسؤولين.</p>
              <button 
                onClick={() => router.push('/dashboard/investor')}
                className="bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-2 mx-auto px-6 py-3 rounded-xl"
              >
                العودة للوحة القيادة
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 bg-secondary-container/5 border border-secondary-container/20 p-6 rounded-2xl flex gap-6 items-start">
          <span className="material-symbols-outlined text-secondary-container text-4xl">encrypted</span>
          <div>
            <h5 className="text-white font-bold mb-2">تشفير من طرف إلى طرف (End-to-End Encryption)</h5>
            <p className="text-slate-500 text-sm leading-relaxed">
              يتم تشفير كافة مستنداتك وإرسالها مباشرة إلى شريك التحقق المعتمد لدينا. لا نقوم بتخزين النسخ الأصلية على خوادم يسهل الوصول إليها، ونلتزم بالمعايير الصارمة لحماية البيانات (GDPR).
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
