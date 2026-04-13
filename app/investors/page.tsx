import { createClient } from '@/lib/supabase/server';
import { InvestorsClient } from './InvestorsClient';
import type { Profile } from '@/lib/types';

export default async function InvestorsPage() {
  const supabase = await createClient();
  
  // Fetch profiles with investor role
  const { data: investors } = await supabase
    .from('profiles')
    .select('*')
    .eq('role', 'investor');
    
  return <InvestorsClient initialInvestors={(investors as Profile[]) || []} />;
}
