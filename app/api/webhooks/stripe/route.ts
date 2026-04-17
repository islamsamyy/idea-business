import { headers } from 'next/headers';
import type Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase/server';
import { createNotification } from '@/lib/notifications';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const body = await request.text();
  const headersList = await headers();
  const sig = headersList.get('stripe-signature');

  if (!sig) {
    return new Response('Missing stripe-signature header', { status: 400 });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response('Missing STRIPE_WEBHOOK_SECRET', { status: 500 });
  }

  let event: Stripe.Event;

  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(`Webhook signature verification failed: ${message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const { investment_id, investor_id } = session.metadata ?? {};

    if (!investment_id || !investor_id) {
      return new Response('Missing metadata', { status: 400 });
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from('investments')
      .update({ status: 'paid' })
      .eq('id', investment_id)
      .eq('investor_id', investor_id);

    if (error) {
      console.error('Failed to update investment status:', error);
      return new Response('Database update failed', { status: 500 });
    }

    await createNotification(
      investor_id,
      'investment',
      'تم تأكيد استثمارك',
      'تمت معالجة دفعتك بنجاح وتم تأكيد استثمارك.',
      '/portfolio'
    );
  }

  return new Response('OK', { status: 200 });
}
