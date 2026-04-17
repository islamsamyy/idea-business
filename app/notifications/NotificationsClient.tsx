'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { Footer } from '@/components/layout/Footer';
interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type?: string;
  is_read: boolean;
  created_at: string | null;
}

interface NotificationsClientProps {
  initialData: Notification[];
  userId: string;
}

type FilterType = 'all' | 'unread' | 'investment' | 'messages' | 'system';

export function NotificationsClient({ initialData, userId }: NotificationsClientProps) {
  const [notifications, setNotifications] = useState<Notification[]>(initialData);
  const [filter, setFilter] = useState<FilterType>('all');
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel(`notifications:${userId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          setNotifications((prev) => [payload.new as Notification, ...prev]);
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          setNotifications((prev) =>
            prev.map((n) => (n.id === payload.new.id ? (payload.new as Notification) : n))
          );
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [userId, supabase]);

  const handleMarkAsRead = async (id: string) => {
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('id', id);

    if (!error) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, is_read: true } : n))
      );
    }
  };

  const handleMarkAllAsRead = async () => {
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('user_id', userId)
      .eq('is_read', false);

    if (!error) {
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, is_read: true }))
      );
    }
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.is_read;
    if (filter === 'investment') return n.type?.includes('investment');
    if (filter === 'messages') return n.type?.includes('message');
    if (filter === 'system') return n.type?.includes('system');
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  const getIcon = (type?: string) => {
    if (type?.includes('investment')) return 'trending_up';
    if (type?.includes('message')) return 'mail';
    if (type?.includes('system')) return 'notifications_active';
    return 'notification_important';
  };

  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden">
      <Navbar />
      <DashboardSidebar />

      <main className="pt-32 pb-20 px-6 xl:mr-64 mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-5xl font-black font-headline text-foreground mb-2">الإخطارات</h1>
            {unreadCount > 0 && (
              <p className="text-muted-foreground">
                لديك <span className="text-primary-container font-bold">{unreadCount}</span> إخطارات غير مقروءة
              </p>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="px-6 py-2 bg-primary-container/10 hover:bg-primary-container/20 border border-primary-container/30 text-primary-container rounded-lg text-sm font-medium transition-colors"
            >
              اقرأ الكل
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {(['all', 'unread', 'investment', 'messages', 'system'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-primary-container text-[#050608] dark:text-[#050608]'
                  : 'bg-surface-container hover:bg-surface-container-high text-foreground'
              }`}
            >
              {f === 'all' && 'الكل'}
              {f === 'unread' && 'غير مقروءة'}
              {f === 'investment' && 'استثمارات'}
              {f === 'messages' && 'رسائل'}
              {f === 'system' && 'نظام'}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        {filteredNotifications.length > 0 ? (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => !notification.is_read && handleMarkAsRead(notification.id)}
                className={`group p-6 rounded-xl border transition-all cursor-pointer ${
                  !notification.is_read
                    ? 'bg-primary-container/5 border-primary-container/30 hover:bg-primary-container/10 hover:border-primary-container/50'
                    : 'bg-surface-container border-surface-container-high hover:border-primary-container/30'
                }`}
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    !notification.is_read
                      ? 'bg-primary-container/20'
                      : 'bg-surface-container-high'
                  }`}>
                    <span className="material-symbols-outlined text-lg text-primary-container">
                      {getIcon(notification.type)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`font-semibold text-foreground mb-1 ${
                      !notification.is_read ? 'font-black' : ''
                    }`}>
                      {notification.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 opacity-60">
                      {notification.created_at && (
                        new Date(notification.created_at).toLocaleString('ar-SA', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      )}
                    </p>
                  </div>

                  {/* Read Indicator */}
                  {!notification.is_read && (
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-container mt-1"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-muted-foreground/20 block mb-4">notifications_none</span>
            <p className="text-muted-foreground text-lg">
              {filter === 'unread' ? 'لا توجد إخطارات غير مقروءة' : 'لا توجد إخطارات'}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
