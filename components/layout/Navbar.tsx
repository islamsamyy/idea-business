'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { type User } from '@supabase/supabase-js';
import { LogoutButton } from './LogoutButton';
import NotificationBell from './NotificationBell';
import type { Profile } from '@/lib/types';

const NAV_LINKS = [
  { href: '/', label: 'الرئيسية' },
  { href: '/opportunities', label: 'الفرص' },
  { href: '/investors', label: 'المستثمرون' },
  { href: '/pricing', label: 'الأسعار' },
];

const NavLinks = ({ onClick, pathname }: { onClick?: () => void, pathname: string }) => (
  <>
    {NAV_LINKS.map(({ href, label }) => {
      const isActive = pathname === href;
      return (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className={`transition-colors ${isActive ? 'text-primary-container' : 'hover:text-primary-container'}`}
        >
          {label}
        </Link>
      );
    })}
  </>
);

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const supabase = createClient();

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
      setLoading(false);
    }
    getUser();
  }, [supabase]);

  const dashboardHref = profile?.role
    ? `/dashboard/${profile.role}`
    : '/dashboard/founder';

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-20 bg-[#050b14]/90 backdrop-blur-3xl border-b border-primary-container/15 shadow-neon">
      <Link href="/" className="flex items-center gap-2 font-data font-bold text-primary-container text-xl tracking-tighter hover:opacity-80 transition-opacity">
        IDEA BUSINESS
      </Link>

      <nav className="hidden md:flex items-center gap-8 font-label text-[#E8F4FF] uppercase tracking-wider text-sm">
        <NavLinks pathname={pathname} />
      </nav>

      <div className="flex items-center gap-3">
        {!loading && (
          user ? (
            <>
              <NotificationBell currentUserId={user.id} />
              <Link
                href={dashboardHref}
                className="hidden md:flex items-center gap-2 text-xs font-headline uppercase tracking-widest text-primary-container hover:opacity-80 transition-opacity"
              >
                <span className="material-symbols-outlined text-sm">dashboard</span>
                <span>{profile?.full_name?.split(' ')[0] ?? 'لوحة التحكم'}</span>
              </Link>
              <div className="hidden md:block">
                <LogoutButton />
              </div>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login">
                <button className="text-[#E8F4FF] font-black px-6 py-2.5 text-sm border border-white/10 rounded-md hover:bg-white/5 transition-colors">
                  دخول
                </button>
              </Link>
              <Link href="/register">
                <button className="bg-[#00ffd1] text-black font-black px-6 py-2.5 rounded-md hover:brightness-110 transition-all duration-300 active:scale-95 text-sm shadow-[0_0_20px_rgba(0,255,209,0.2)]">
                  إنشاء حساب
                </button>
              </Link>
            </div>
          )
        )}
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-primary-container p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col gap-6 font-label text-[#E8F4FF] uppercase tracking-wider text-lg">
          <NavLinks onClick={() => setIsMobileMenuOpen(false)} pathname={pathname} />
        </nav>
        
        <div className="mt-8 pt-8 border-t border-outline-variant/20 flex flex-col gap-4">
          {!loading && (
            user ? (
              <>
                <Link
                  href={dashboardHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center items-center gap-2 text-sm font-headline uppercase tracking-widest text-primary-container py-3 border border-primary-container/20 hover:bg-primary-container/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">dashboard</span>
                  <span>{profile?.full_name?.split(' ')[0] ?? 'لوحة التحكم'}</span>
                </Link>
                <div onClick={() => setIsMobileMenuOpen(false)}>
                  <LogoutButton />
                </div>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full border border-primary-container/20 text-[#E8F4FF] font-medium px-4 py-3 text-sm hover:text-primary-container transition-colors">
                    دخول
                  </button>
                </Link>
                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full bg-primary-container text-[#050b14] font-bold px-6 py-3 clip-button active:scale-95 text-sm">
                    إنشاء حساب
                  </button>
                </Link>
              </>
            )
          )}
        </div>
      </div>
    </header>
  );
}
