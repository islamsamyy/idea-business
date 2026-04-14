'use client'

import React, { useState } from 'react'
import { approveKyc, rejectKyc } from './actions'
import { useTransition } from 'react'
import { toast } from 'sonner'

interface KYCSubmission {
  id: string
  full_name: string | null
  email?: string
  kyc_status: string
  kyc_data: Record<string, any> | null
  created_at: string
}

interface KYCReviewClientProps {
  submissions: KYCSubmission[]
}

export default function KYCReviewClient({ submissions }: KYCReviewClientProps) {
  const [isPending, startTransition] = useTransition()
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [rejectingId, setRejectingId] = useState<string | null>(null)
  const [rejectReason, setRejectReason] = useState('')

  const handleApprove = (userId: string) => {
    startTransition(async () => {
      const result = await approveKyc(userId)
      if (result?.error) {
        toast.error(result.error)
      } else {
        toast.success('تم الموافقة على التحقق')
      }
    })
  }

  const handleReject = (userId: string) => {
    if (!rejectReason.trim()) {
      toast.error('يجب إدخال سبب الرفض')
      return
    }
    startTransition(async () => {
      const result = await rejectKyc(userId, rejectReason)
      if (result?.error) {
        toast.error(result.error)
      } else {
        toast.success('تم رفض الطلب وإخطار المستخدم')
        setRejectingId(null)
        setRejectReason('')
      }
    })
  }

  if (submissions.length === 0) {
    return (
      <div className="text-center py-20 bg-[#0A1628] border border-white/5 rounded-lg">
        <span className="material-symbols-outlined text-6xl text-slate-600 mb-4 block opacity-50">
          task_alt
        </span>
        <p className="text-slate-400">لا توجد طلبات معلقة للمراجعة</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {submissions.map((submission) => (
        <div
          key={submission.id}
          className="bg-[#0A1628] border border-white/5 rounded-lg overflow-hidden hover:border-white/10 transition-all"
        >
          {/* Header */}
          <div
            onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
            className="p-6 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors"
          >
            <div className="flex-grow">
              <h3 className="font-headline text-lg font-bold text-white mb-1">
                {submission.full_name || 'مستخدم'}
              </h3>
              <p className="text-[10px] text-slate-500 font-data">
                تم الإرسال: {new Date(submission.created_at).toLocaleDateString('ar-SA')}
              </p>
            </div>
            <span
              className={`material-symbols-outlined transition-transform ${
                expandedId === submission.id ? 'rotate-180' : ''
              }`}
            >
              expand_more
            </span>
          </div>

          {/* Details */}
          {expandedId === submission.id && (
            <div className="p-6 border-t border-white/5 bg-slate-900/30 space-y-6">
              {/* Step 1: ID Documents */}
              {submission.kyc_data?.step1 && (
                <div className="space-y-3">
                  <h4 className="font-headline font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">person</span>
                    الهوية الشخصية
                  </h4>
                  <div className="bg-slate-900 p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">نوع الوثيقة:</span>
                      <span className="text-white">{submission.kyc_data.step1.docType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">رقم الهوية:</span>
                      <span className="text-white font-data">
                        {submission.kyc_data.step1.idNumber}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-2 pt-2 border-t border-white/10">
                      ✓ تم رفع الوثائق الأمامية والخلفية
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Address */}
              {submission.kyc_data?.step2 && (
                <div className="space-y-3">
                  <h4 className="font-headline font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    توثيق العنوان
                  </h4>
                  <div className="bg-slate-900 p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">الشارع:</span>
                      <span className="text-white">{submission.kyc_data.step2.street}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">المدينة:</span>
                      <span className="text-white">{submission.kyc_data.step2.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">الدولة:</span>
                      <span className="text-white">{submission.kyc_data.step2.country}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Tax Info */}
              {submission.kyc_data?.step3 && (
                <div className="space-y-3">
                  <h4 className="font-headline font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">account_balance</span>
                    الإقرار الضريبي
                  </h4>
                  <div className="bg-slate-900 p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">رقم الهوية:</span>
                      <span className="text-white font-data">
                        {submission.kyc_data.step3.nationalId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">رقم التسجيل الضريبي:</span>
                      <span className="text-white font-data">
                        {submission.kyc_data.step3.taxNumber}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-2 pt-2 border-t border-white/10">
                      ✓ تم التوقيع على الإقرار الذاتي
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-4 border-t border-white/5">
                {rejectingId === submission.id ? (
                  <div className="space-y-3">
                    <textarea
                      value={rejectReason}
                      onChange={(e) => setRejectReason(e.target.value)}
                      placeholder="اكتب سبب الرفض..."
                      className="w-full bg-slate-800 border border-white/10 p-3 rounded-lg text-sm text-white focus:border-primary-container outline-none resize-none"
                      rows={3}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleReject(submission.id)}
                        disabled={isPending}
                        className="flex-grow bg-red-500/20 text-red-400 font-black py-2 hover:bg-red-500/30 transition-colors disabled:opacity-50"
                      >
                        تأكيد الرفض
                      </button>
                      <button
                        onClick={() => {
                          setRejectingId(null)
                          setRejectReason('')
                        }}
                        className="flex-grow bg-white/5 text-white font-black py-2 hover:bg-white/10 transition-colors"
                      >
                        إلغاء
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApprove(submission.id)}
                      disabled={isPending}
                      className="flex-grow bg-primary-container text-background font-black py-3 clip-button hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-base">thumb_up</span>
                      موافقة
                    </button>
                    <button
                      onClick={() => setRejectingId(submission.id)}
                      disabled={isPending}
                      className="flex-grow bg-red-500/10 text-red-400 font-black py-3 border border-red-500/30 hover:bg-red-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-base">thumb_down</span>
                      رفض
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
