import { createClient } from '@/lib/supabase/server';
import { OpportunitiesClient } from './OpportunitiesClient';
import type { Project } from '@/lib/types';

export default async function OpportunitiesPage() {
  const supabase = await createClient();
  
  // Fetch active projects that are ready for investment
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching projects:', error);
  }

  return <OpportunitiesClient initialProjects={(projects as Project[]) || []} />;
}
