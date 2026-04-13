import { Navbar } from '@/components/layout/Navbar';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function FounderDashboardLoading() {
  return (
    <div className="bg-background min-h-screen font-body text-foreground" dir="rtl">
      <Navbar />
      <div className="flex pt-20 h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-40 bg-surface-container-low border border-white/5 p-8 rounded-lg">
              <div className="h-6 bg-white/10 w-1/4 mb-4 rounded"></div>
              <div className="h-4 bg-white/5 w-1/2 mb-4 rounded"></div>
              <div className="flex gap-4 mt-6">
                <div className="h-10 w-32 bg-white/10 rounded"></div>
                <div className="h-10 w-40 bg-white/10 rounded"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-surface-container-low border border-white/5 p-6 rounded-lg">
                  <div className="h-4 w-1/2 bg-white/5 mb-4 rounded"></div>
                  <div className="h-8 w-3/4 bg-white/10 rounded"></div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 h-96 bg-surface-container-low border border-white/5 p-8 rounded-lg">
                <div className="h-6 w-1/4 bg-white/10 mb-6 rounded"></div>
                <div className="h-64 bg-white/5 rounded"></div>
              </div>
              <div className="h-96 bg-surface-container-low border border-white/5 p-8 rounded-lg">
                <div className="h-6 w-1/3 bg-white/10 mb-6 rounded"></div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 bg-white/5 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
