'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { LogoutButton } from './LogoutButton';

export function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('full_name, role')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
      setLoading(false);
    }
    getUser();
  }, []);

  const dashboardHref = profile?.role
    ? `/dashboard/${profile.role}`
    : '/dashboard/founder';

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-[#050b14]/90 backdrop-blur-3xl border-b border-primary-container/15 shadow-neon">
      <Link href="/" className="flex items-center gap-2 font-data font-bold text-primary-container text-xl tracking-tighter hover:opacity-80 transition-opacity">
        IDEA BUSINESS
      </Link>

      <nav className="hidden md:flex items-center gap-8 font-label text-[#E8F4FF] uppercase tracking-wider text-sm">
        <Link href="/" className="hover:text-primary-container transition-colors">الرئيسية</Link>
        <Link href="/opportunities" className="hover:text-primary-container transition-colors">الفرص</Link>
        <Link href="/investors" className="hover:text-primary-container transition-colors">المستثمرون</Link>
        <Link href="/pricing" className="hover:text-primary-container transition-colors">الأسعار</Link>
      </nav>

      <div className="flex items-center gap-3">
        {!loading && (
          user ? (
            <>
              <Link
                href={dashboardHref}
                className="hidden md:flex items-center gap-2 text-xs font-headline uppercase tracking-widest text-primary-container hover:opacity-80 transition-opacity"
              >
                <span className="material-symbols-outlined text-sm">dashboard</span>
                <span>{profile?.full_name?.split(' ')[0] ?? 'لوحة التحكم'}</span>
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="text-[#E8F4FF] font-medium px-4 py-2 text-sm hover:text-primary-container transition-colors">
                  دخول
                </button>
              </Link>
              <Link href="/register">
                <button className="bg-primary-container text-[#050b14] font-bold px-6 py-2 clip-button hover:shadow-[0_0_15px_rgba(0,255,209,0.3)] transition-all duration-300 active:scale-95 text-sm">
                  إنشاء حساب
                </button>
              </Link>
            </>
          )
        )}
      </div>
    </header>
  );
}
