# IDEA BUSINESS - Quick Start Guide

## 🚀 Development Server
```bash
npm run dev
# Opens at http://localhost:3000
```

## 🗄️ Database Setup (CRITICAL FIRST STEP)
```bash
# 1. Get token: https://supabase.com/dashboard/account/tokens
export SUPABASE_ACCESS_TOKEN=your_token_here

# 2. Link to Supabase
npx supabase link --project-ref dqszxefplefuuovdrnru

# 3. Apply all migrations
npx supabase db push

# Alternatively, paste SQL from supabase/all_migrations.sql into Supabase SQL editor
```

## 💳 Stripe Setup
1. Add to `.env.local`:
   - `STRIPE_SECRET_KEY=sk_test_...`
   - `STRIPE_PUBLISHABLE_KEY=pk_test_...`
   - `STRIPE_WEBHOOK_SECRET=whsec_...`

2. In Vercel, add same env vars

3. Test webhook: `http://localhost:3000/api/webhooks/stripe`

## 📖 Project Structure
```
app/                 # Next.js App Router pages
components/          # Reusable React components
lib/                 # Utilities, types, Supabase client
supabase/            # SQL migrations
public/              # Static assets
.env.local           # Local env vars (git-ignored)
```

## 🔑 Key Features

### Authentication
- Login: `/login` → email/password
- Register: `/register` → creates profile
- Forgot Password: `/forgot-password` → email reset link

### Investor Flow
1. Browse opportunities: `/opportunities`
2. View project detail: `/opportunities/[id]`
3. Click "استثمر الآن" → `/checkout?projectId=...`
4. Complete Stripe checkout
5. View portfolio: `/portfolio`

### Founder Flow
1. Create project: `/add-idea`
2. View projects: `/projects`
3. Edit project: `/projects/[id]/edit`
4. View funding: `/projects/[id]/funding` or `/funding-progress`

### Admin Flow
1. Dashboard: `/admin` (metrics + user count)
2. KYC review: `/admin/kyc`
3. User management: `/admin/users`

## 🧪 Testing Payments
Use Stripe test card: `4242 4242 4242 4242` (any future date, any CVC)

## 📝 Key Env Vars
```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://dqszxefplefuuovdrnru.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Or on Vercel: https://your-domain.vercel.app
```

## 🐛 Common Issues

**useSearchParams() error?**
→ Already fixed, pages wrapped in Suspense

**Build fails?**
→ Run `npm run build` to check full errors

**Stripe not working?**
→ Check env vars in `.env.local`
→ Verify webhook secret matches Vercel

**Messages not real-time?**
→ Ensure Supabase schema applied
→ Check browser console for errors

## 📊 Database Tables (After Migration)
- `profiles` — users + KYC status
- `projects` — founder's ideas
- `investments` — investor commitments
- `messages` — real-time chat
- `saved_opportunities` — bookmarked projects
- `notifications` — alerts
- `contact_messages` — contact form submissions
- `kyc_documents` — document storage (Supabase Storage)

## 🚢 Deploy to Vercel

```bash
# 1. Push all commits
git push origin main

# 2. Connect repo to Vercel (https://vercel.com/new)

# 3. Add env vars in Vercel dashboard:
#    - STRIPE_SECRET_KEY
#    - STRIPE_WEBHOOK_SECRET
#    - NEXT_PUBLIC_APP_URL

# 4. Deploy!
```

## 📞 Support
- Check IMPLEMENTATION_STATUS.md for full feature list
- Review Git commits for recent changes
- TypeScript will catch most errors
- Supabase dashboard for database issues

---

**Status:** ✅ Ready to develop & deploy!
