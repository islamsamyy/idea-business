'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { LogoutButton } from './LogoutButton';

interface Profile {
  full_name: string;
  role: 'founder' | 'investor';
  tier: string;
  kyc_status: string;
}

export function DashboardSidebar() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const supabase = createClient();

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('full_name, role, tier, kyc_status')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
      setLoading(false);
    }
    getUser();
  }, [supabase]);

  if (loading) return null;

  const isFounder = profile?.role === 'founder';

  const founderMenu = [
    { icon: 'dashboard', label: 'لوحة التحكم', href: '/dashboard/founder' },
    { icon: 'lightbulb', label: 'مشاريعي', href: '/projects' },
    { icon: 'add_circle', label: 'أضف فكرة', href: '/add-idea' },
    { icon: 'trending_up', label: 'تقدم التمويل', href: '/funding-progress' },
    { icon: 'chat', label: 'الرسائل', href: '/messages' },
    { icon: 'settings', label: 'الإعدادات', href: '/settings' },
  ];

  const investorMenu = [
    { icon: 'dashboard', label: 'لوحة التحكم', href: '/dashboard/investor' },
    { icon: 'explore', label: 'الفرص', href: '/opportunities' },
    { icon: 'account_balance_wallet', label: 'محفظتي', href: '/portfolio' },
    { icon: 'bookmark', label: 'المحفوظات', href: '/saved' },
    { icon: 'chat', label: 'الرسائل', href: '/messages' },
    { icon: 'settings', label: 'الإعدادات', href: '/settings' },
  ];

  const menuItems = isFounder ? founderMenu : investorMenu;
  const tierLabel = profile?.tier === 'platinum' ? 'البلاتيني' : profile?.tier === 'gold' ? 'الذهبي' : 'الأساسي';
  const roleLabel = isFounder ? 'مؤسس' : 'مستثمر';

  return (
    <aside className="hidden xl:flex fixed right-0 top-20 h-[calc(100vh-80px)] w-64 bg-surface-container-low dark:bg-[#0a0e15] border-r border-primary-container/15 dark:border-[#00FFD1]/10 flex-col z-30">
      {/* User Info */}
      <div className="p-6 border-b border-primary-container/10 dark:border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container flex items-center justify-center bg-primary-container/20">
            <span className="material-symbols-outlined text-primary-container">person</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-body text-sm text-primary-container font-bold truncate">
              {profile?.full_name ?? user?.email?.split('@')[0] ?? 'مستخدم'}
            </h4>
            <p className="font-body text-[10px] text-muted-foreground">{roleLabel} · {tierLabel}</p>
          </div>
        </div>
        {profile?.kyc_status !== 'verified' && (
          <Link
            href="/kyc"
            className="w-full py-2 px-3 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-[10px] font-bold border border-yellow-500/20 hover:bg-yellow-500/20 transition-all flex items-center gap-2 justify-center"
          >
            <span className="material-symbols-outlined text-xs">warning</span>
            أكمل التحقق من الهوية
          </Link>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`px-4 py-3 flex items-center gap-3 font-body text-sm transition-all border-r-4 ${
                isActive
                  ? 'text-primary-container bg-primary-container/10 border-primary-container'
                  : 'text-muted-foreground hover:text-primary-container hover:bg-primary-container/5 border-transparent hover:border-primary-container/30'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-primary-container/10 dark:border-white/5 space-y-2">
        <div className="bg-surface-container dark:bg-[#050b14] p-3 border border-primary-container/15 dark:border-[#00FFD1]/10 mb-2 rounded-lg">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] text-muted-foreground font-data">NETWORK STATUS</span>
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          </div>
          <div className="font-data text-[10px] text-primary-container">SECURE NODE: ACTIVE</div>
        </div>
        <LogoutButton />
      </div>
    </aside>
  );
}
