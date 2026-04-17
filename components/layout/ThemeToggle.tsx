'use client';

import { useTheme } from '@/components/providers/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
      className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary-container"
      title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    >
      <span className="material-symbols-outlined text-xl">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}
