import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { DashboardSidebar } from '@/components/layout/DashboardSidebar'
import EditProjectClient from './EditProjectClient'

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch project and verify ownership
  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (!project) {
    notFound()
  }

  if (project.founder_id !== user.id) {
    redirect('/projects')
  }

  return (
    <div
      className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden text-right"
      dir="rtl"
    >
      <div className="fixed inset-0 hex-grid pointer-events-none z-0 opacity-10"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0 opacity-5"></div>

      <Navbar />
      <DashboardSidebar />

      <main className="xl:mr-64 pt-32 pb-32 px-6 max-w-4xl mx-auto z-10 relative">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-headline mb-2">
            تعديل المشروع
          </h1>
          <p className="text-slate-400">تحديث تفاصيل مشروعك</p>
        </header>

        <EditProjectClient project={project} />
      </main>
    </div>
  )
}
