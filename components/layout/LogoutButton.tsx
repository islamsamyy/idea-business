'use client';

import { useTransition } from 'react';
import { logout } from '@/app/auth/actions';

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => logout())}
      disabled={isPending}
      className="flex items-center gap-2 px-3 py-2 text-xs font-headline uppercase tracking-widest text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all disabled:opacity-50"
    >
      <span className="material-symbols-outlined text-sm">
        {isPending ? 'progress_activity' : 'logout'}
      </span>
      {isPending ? '...' : 'خروج'}
    </button>
  );
}
