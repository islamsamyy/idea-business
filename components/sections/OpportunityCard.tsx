import React from 'react';
import Link from 'next/link';

interface OpportunityCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  aiScore: number;
  fundingRequired: string;
  status: 'نشطة' | 'قيد المراجعة';
  regionCode: string;
  themeColor?: 'primary' | 'secondary' | 'tertiary';
}

export default function OpportunityCard({
  id,
  title,
  description,
  tags,
  aiScore,
  fundingRequired,
  status,
  regionCode,
  themeColor = 'primary'
}: OpportunityCardProps) {
  const borderColor = themeColor === 'primary' ? 'border-primary-container' :
                    themeColor === 'secondary' ? 'border-secondary' :
                    'border-tertiary-fixed-dim';

  const textColor = themeColor === 'primary' ? 'text-primary-container' :
                   themeColor === 'secondary' ? 'text-secondary' :
                   'text-tertiary-fixed-dim';

  const isPending = status === 'قيد المراجعة';

  return (
    <div className={`relative group bg-surface-container-low dark:bg-[#0A1628] p-6 transition-all hover:-translate-y-2 overflow-hidden border-r-4 ${borderColor} ${isPending ? 'opacity-60 grayscale' : ''}`}>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary-container"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary-container"></div>

      {!isPending && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-primary-container/10 hidden group-hover:block z-10 animate-scanline"></div>
      )}

      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <span className="text-4xl font-headline font-black text-foreground/10 uppercase rotate-12 tracking-widest">قيد المراجعة</span>
        </div>
      )}

      <div className={`flex justify-between items-start mb-6 ${isPending ? 'blur-[1px]' : ''}`}>
        <div className="flex gap-2">
          <span className={`bg-surface-container-high dark:bg-white/5 ${textColor} font-data text-[10px] px-3 py-1 clip-button-sm uppercase tracking-tighter border border-primary-container/20 dark:border-white/10`}>
            {regionCode}
          </span>
          <span className="bg-surface-container-high text-primary-container px-3 py-1 flex items-center gap-2 font-body text-[12px] border border-primary-container/20">
            <span className={`w-1.5 h-1.5 rounded-full ${isPending ? 'bg-muted-foreground' : 'bg-primary-container animate-pulse'}`}></span>
            {status}
          </span>
        </div>

        {/* AI Gauge */}
        <div className="relative w-24 h-24 flex flex-col items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="transparent" className="stroke-surface-container-highest dark:stroke-[#1c2027]" strokeWidth="8" />
            {!isPending && (
              <circle
                cx="50" cy="50" r="40"
                fill="transparent"
                stroke={themeColor === 'tertiary' ? '#ffba3a' : '#00FFD1'}
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * aiScore / 100)}
                strokeLinecap="butt"
              />
            )}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
            <span className="font-data text-2xl font-black text-foreground leading-none">
              {isPending ? '--' : aiScore}
            </span>
            <span className="font-data text-[8px] text-muted-foreground uppercase tracking-tighter">AI SCORE</span>
          </div>
        </div>
      </div>

      <div className={`mb-8 ${isPending ? 'blur-[1px]' : ''}`}>
        <h3 className="font-headline text-xl font-bold text-foreground mb-2 group-hover:text-primary-container transition-colors">{title}</h3>
        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className={`text-[10px] ${textColor} border border-primary-container/20 dark:border-white/10 px-2 py-0.5 clip-button-sm bg-surface-container-high dark:bg-white/5`}>
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`flex items-center justify-between pt-6 border-t border-primary-container/15 dark:border-white/5 ${isPending ? 'blur-[1px]' : ''}`}>
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground font-body">التمويل المطلوب</span>
          <span className="font-data text-primary-container text-lg">{fundingRequired}</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center border border-primary-container/20 dark:border-white/10 hover:bg-surface-container-high text-foreground transition-colors">
            <span className="material-symbols-outlined text-sm">push_pin</span>
          </button>
          {!isPending ? (
            <Link href={`/opportunities/${id}`} className="bg-primary-container text-background px-6 py-2 font-bold clip-button text-sm flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all">
              التفاصيل <span className="text-lg">←</span>
            </Link>
          ) : (
            <button className="bg-surface-container-high text-muted-foreground px-6 py-2 font-bold clip-button text-sm" disabled>
              قيد المراجعة
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
