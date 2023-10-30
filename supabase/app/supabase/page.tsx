import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const cookieStore = cookies();

export const dynamic = 'force-dynamic';

export default async function Notes() {
  const supabase = createClient(cookieStore);
  const { data: notes } = await supabase.from('notes').select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
