'use client';

import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  role: 'founder' | 'investor';
  tier: string | null;
  kyc_status: string | null;
  created_at: string | null;
}

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  funding_goal: number;
  amount_raised: number;
  status: string;
  img: string | null;
  founder_id: string;
}

interface ProfileClientProps {
  profile: Profile;
  projects: Project[];
  investmentCount: number;
}

const TIER_COLORS = {
  bronze: 'bg-amber-600',
  silver: 'bg-gray-400',
  gold: 'bg-yellow-500',
  platinum: 'bg-blue-400',
};

const TIER_LABELS = {
  bronze: 'برونزي',
  silver: 'فضي',
  gold: 'ذهبي',
  platinum: 'بلاتيني',
};

export function ProfileClient({ profile, projects, investmentCount }: ProfileClientProps) {
  const roleLabel = profile.role === 'founder' ? 'مؤسس' : 'مستثمر';
  const roleIcon = profile.role === 'founder' ? 'lightbulb' : 'trending_up';

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20 px-6 mx-auto max-w-6xl">
        {/* Profile Hero */}
        <div className="mb-16 relative">
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl border-4 border-primary-container overflow-hidden bg-surface-container-high flex items-center justify-center">
                {profile.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt={profile.full_name || 'Profile'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="material-symbols-outlined text-6xl text-muted-foreground">account_circle</span>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-4xl font-black font-headline text-foreground">
                  {profile.full_name || 'المستخدم'}
                </h1>
              </div>

              {/* Role & Status Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container/10 border border-primary-container/30 rounded-lg">
                  <span className="material-symbols-outlined text-sm text-primary-container">{roleIcon}</span>
                  <span className="text-sm font-semibold text-primary-container">{roleLabel}</span>
                </div>

                {profile.kyc_status === 'verified' && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <span className="material-symbols-outlined text-sm text-green-500">verified_user</span>
                    <span className="text-sm font-semibold text-green-500">تم التحقق</span>
                  </div>
                )}

                {profile.tier && (
                  <div className={`inline-flex items-center gap-2 px-4 py-2 ${TIER_COLORS[profile.tier as keyof typeof TIER_COLORS]}/10 border ${TIER_COLORS[profile.tier as keyof typeof TIER_COLORS]}/30 rounded-lg`}>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="text-sm font-semibold">{TIER_LABELS[profile.tier as keyof typeof TIER_LABELS]}</span>
                  </div>
                )}
              </div>

              {/* Bio */}
              {profile.bio && (
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                  {profile.bio}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap">
                <Link
                  href={`/messages?to=${profile.id}`}
                  className="px-6 py-2 bg-primary-container text-[#050608] font-semibold rounded-lg hover:brightness-110 transition-all active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">mail</span>
                    إرسال رسالة
                  </span>
                </Link>

                {profile.role === 'founder' && (
                  <Link
                    href={`/opportunities?founder=${profile.id}`}
                    className="px-6 py-2 border border-primary-container/30 text-primary-container font-semibold rounded-lg hover:bg-primary-container/10 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">lightbulb</span>
                      عرض المشاريع
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section (for founders) */}
        {profile.role === 'founder' && projects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-black font-headline text-foreground mb-8">
              <span className="text-primary-container">المشاريع</span> النشطة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link key={project.id} href={`/opportunities/${project.id}`} className="group">
                  <div className="p-6 border border-primary-container/20 rounded-xl bg-surface-container-low/40 hover:bg-surface-container-high/40 hover:border-primary-container/50 transition-all hover:-translate-y-2">
                    <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary-container transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center pt-4 border-t border-primary-container/10">
                      <span className="text-xs font-semibold text-primary-container">
                        {project.category}
                      </span>
                      <span className="text-sm font-data text-foreground">
                        SAR {project.funding_goal?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Investment Summary (for investors) */}
        {profile.role === 'investor' && (
          <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-surface-container border border-surface-container-high rounded-xl">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-4 block">trending_up</span>
              <p className="text-muted-foreground text-sm mb-2">إجمالي الاستثمارات</p>
              <p className="text-3xl font-black text-foreground">{investmentCount}</p>
              <p className="text-xs text-muted-foreground mt-4">مشروع مستثمر فيه</p>
            </div>
          </div>
        )}

        {/* Joined Date */}
        <div className="pt-12 border-t border-surface-container-high">
          <p className="text-muted-foreground text-sm">
            انضم في {profile.created_at && (
              new Date(profile.created_at).toLocaleString('ar-SA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            )}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
