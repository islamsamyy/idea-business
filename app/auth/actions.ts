'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { error: error.message }
  }

  // Get user profile to determine role and redirect
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'حدث خطأ. حاول مجدداً.' }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  revalidatePath('/', 'layout')
  redirect(`/dashboard/${profile?.role ?? 'founder'}`)
}

export async function register(formData: FormData) {
  const supabase = await createClient()

  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = (formData.get('role') as string) || 'founder'

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role,
      },
    },
  })

  if (error) {
    return { error: error.message }
  }

  // If session is null, it means email confirmation is required
  if (!data.session) {
    return { 
      message: 'تم إنشاء الحساب بنجاح! يرجى التحقق من بريدك الإلكتروني لتنشيط الحساب قبل تسجيل الدخول.' 
    }
  }

  revalidatePath('/', 'layout')
  redirect('/onboarding')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function updateProfile(role: string, interests: string[]) {
  console.log('--- updateProfile called ---');
  console.log('Role:', role);
  console.log('Interests:', interests);

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    console.error('updateProfile error: No user session found');
    return { error: 'جلسة العمل انتهت، يرجى تسجيل الدخول مرة أخرى' };
  }

  console.log('Updating profile for user:', user.id);

  const { error } = await supabase
    .from('profiles')
    .update({ 
      role, 
      interests,
      // Ensure we mark them as having completed onboarding if we have a flag, 
      // but here we just update role and interests.
    })
    .eq('id', user.id)

  if (error) {
    console.error('Supabase update error:', error);
    return { error: `خطأ في تحديث البيانات: ${error.message}` };
  }
  
  console.log('Update profile success. Revalidating and redirecting...');
  
  // Revalidate the entire site to update dashboards and navbars
  revalidatePath('/', 'layout')
  
  // Construct destination
  const destination = `/dashboard/${role}`;
  console.log('Redirecting to:', destination);
  
  // Perform redirect
  redirect(destination)
}
