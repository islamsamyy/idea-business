'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(0);

  const chats = [
    {
      name: 'م. أحمد الصالح',
      lastMessage: 'تم إرسال الملفات الفنية المحدثة...',
      time: 'منذ ١٠ د',
      unread: true,
      online: true,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'عبدالله الراجحي',
      lastMessage: 'هل يمكننا تحديد موعد للاجتماع؟',
      time: 'منذ ساعتين',
      unread: false,
      online: false,
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'سارة القحطاني',
      lastMessage: 'شكراً لك، سأقوم بمراجعة العرض.',
      time: 'يوم أمس',
      unread: false,
      online: true,
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex relative overflow-hidden text-right" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 hex-grid opacity-5 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 blur-[150px] rounded-full -z-10"></div>

      <DashboardSidebar />

      <div className="flex-grow flex flex-col h-screen relative z-10 w-full">
        <Navbar />

        <main className="flex-grow flex p-6 gap-6 overflow-hidden pt-24">
          {/* Chat List */}
          <section className="w-full md:w-96 bg-[#0A1628] border border-white/5 flex flex-col overflow-hidden">
            <header className="p-6 border-b border-white/5 bg-slate-900/50 flex justify-between items-center">
              <h2 className="text-xl font-black text-white font-headline">الرسائل</h2>
              <button className="material-symbols-outlined text-primary-container">edit_square</button>
            </header>
            <div className="p-4 border-b border-white/5">
              <div className="relative">
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
                <input 
                  type="text" 
                  placeholder="بحث في المحادثات..." 
                  className="w-full bg-slate-900 border border-white/5 pr-10 pl-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-primary-container/30 transition-all font-body"
                />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto custom-scrollbar">
              {chats.map((chat, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveChat(i)}
                  className={`w-full p-4 flex gap-4 transition-all border-b border-white/5 last:border-0 hover:bg-white/5 ${activeChat === i ? 'bg-primary-container/5 border-r-4 border-r-primary-container' : ''}`}
                >
                  <div className="relative shrink-0">
                    <img src={chat.img} alt={chat.name} className="w-12 h-12 rounded-full object-cover grayscale brightness-75 border border-white/10" />
                    {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary-container rounded-full border-2 border-[#0A1628]"></div>}
                  </div>
                  <div className="flex-grow text-right overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className={`text-sm font-bold truncate ${chat.unread ? 'text-white' : 'text-slate-300'}`}>{chat.name}</h4>
                      <span className="text-[10px] text-slate-500 font-data shrink-0">{chat.time}</span>
                    </div>
                    <p className={`text-xs truncate ${chat.unread ? 'text-primary-container font-black' : 'text-slate-500'}`}>{chat.lastMessage}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Active Chat Window */}
          <section className="hidden md:flex flex-grow bg-[#0A1628] border border-white/5 flex flex-col overflow-hidden relative">
            <div className="l-bracket-tr opacity-10"></div>
            <header className="p-6 border-b border-white/5 bg-slate-900/50 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={chats[activeChat].img} alt={chats[activeChat].name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h3 className="text-white font-bold">{chats[activeChat].name}</h3>
                  <p className="text-[10px] text-primary-container font-data uppercase tracking-widest">{chats[activeChat].online ? 'متصل الآن' : 'غير متصل'}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="material-symbols-outlined text-slate-500 hover:text-white transition-colors">videocam</button>
                <button className="material-symbols-outlined text-slate-500 hover:text-white transition-colors">call</button>
                <button className="material-symbols-outlined text-slate-500 hover:text-white transition-colors">more_vert</button>
              </div>
            </header>

            {/* Message Area */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8 custom-scrollbar bg-slate-900/20">
              <div className="flex justify-center">
                <span className="bg-white/5 text-slate-500 text-[10px] px-4 py-1 rounded-full border border-white/5 uppercase font-data">اليوم</span>
              </div>

              {/* Message Left (Receiver) */}
              <div className="flex gap-4 max-w-[70%]">
                <img src={chats[activeChat].img} className="w-8 h-8 rounded-full self-end" alt="" />
                <div className="bg-white/5 border border-white/10 p-4 clip-button text-sm text-slate-300 leading-relaxed font-body">
                  مرحباً بك، اطلعت على فكرة "GreenPulse" وهي مبهرة. هل يمكننا مراجعة نموذج العمل الخاص بك غداً؟
                  <div className="text-[10px] text-slate-600 mt-2 text-left font-data">10:42 AM</div>
                </div>
              </div>

              {/* Message Right (Sender) */}
              <div className="flex flex-row-reverse gap-4 max-w-[70%] mr-auto">
                <div className="bg-primary-container text-background p-4 clip-button text-sm font-bold shadow-[0_0_20px_rgba(0,255,209,0.1)]">
                  أهلاً بك م. أحمد، بالطبع يسعدني ذلك. سأقوم بتجهيز عرض تقديمي مفصل وإرساله إليك قبل الموعد.
                  <div className="text-[10px] opacity-50 mt-2 text-right font-data">10:45 AM</div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <footer className="p-6 border-t border-white/5 bg-slate-900/50">
              <div className="flex gap-4 items-center bg-slate-900 border border-white/10 rounded-2xl p-2 pr-4">
                <button className="material-symbols-outlined text-slate-500 hover:text-primary-container transition-all">add_circle</button>
                <input 
                  type="text" 
                  placeholder="اكتب رسالتك هنا..." 
                  className="flex-grow bg-transparent border-none text-white focus:outline-none py-3 font-body text-sm"
                />
                <button className="bg-primary-container text-background w-12 h-12 flex items-center justify-center clip-button hover:brightness-110 active:scale-95 transition-all">
                  <span className="material-symbols-outlined font-black">send</span>
                </button>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
