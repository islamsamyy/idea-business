# Admin Dashboard - Complete Access Guide

## 📍 Admin Dashboard URLs

| Page | URL | Purpose |
|------|-----|---------|
| **Admin Overview** | `/admin` | Platform metrics & quick actions |
| **KYC Review Queue** | `/admin/kyc` | Review pending identity verifications |
| **User Management** | `/admin/users` | Manage user roles and tiers |

---

## 🔐 How Access Control Works

The Admin Dashboard is **protected by role-based access control**:

1. **Authentication Check** - User must be logged in
2. **Role Verification** - User's profile role must be `'admin'`
3. **Redirect on Failure** - Non-admin users are redirected to `/dashboard/founder`

### Admin Layout Security (`app/admin/layout.tsx`)
```typescript
// If NOT logged in → redirect to /login
// If logged in but role ≠ 'admin' → redirect to /dashboard/founder
// If role = 'admin' → GRANT ACCESS ✓
```

---

## 🚀 Steps to Access Admin Dashboard

### Step 1: Set Up Supabase Profile Role

**Option A: Using Supabase Dashboard**

1. Go to your Supabase project → **SQL Editor**
2. Run this SQL to set your user as admin:

```sql
UPDATE profiles 
SET role = 'admin' 
WHERE id = 'YOUR_USER_ID';
```

3. Get your user ID from: Supabase → **Authentication** → Users → Copy the ID

**Option B: Using SQL Console**

```sql
-- View your current role
SELECT id, role, full_name FROM profiles 
WHERE email = 'your-email@example.com';

-- Change your role to admin
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';

-- Verify the change
SELECT id, role, full_name FROM profiles 
WHERE email = 'your-email@example.com';
```

### Step 2: Log In to the Application

1. Go to `http://localhost:3000/login` (if running locally)
2. Enter your email and password
3. Click "دخول" (Sign In)

### Step 3: Navigate to Admin Dashboard

**Option A: Direct URL**
- Type in browser: `http://localhost:3000/admin`

**Option B: From Dashboard**
- After login, if you're admin, visit `/admin` directly
- Or from navbar (if you add a link): click "لوحة التحكم" (Admin Panel)

---

## 📊 Admin Dashboard Pages Overview

### 1. **Admin Overview** (`/admin`)

**Shows:**
- 📊 Total Users count
- ⏳ Pending KYC requests count
- 🚀 Active Projects count
- 💰 Total Investment amount

**Quick Actions:**
- Review KYC (link to `/admin/kyc`)
- Manage Users (link to `/admin/users`)
- Reports (coming soon)

**Visual:**
```
┌─────────────────────────────────────────┐
│         ADMIN DASHBOARD                 │
├─────────────────────────────────────────┤
│                                         │
│  [Total Users: 47]  [Pending KYC: 5]   │
│  [Active Projects: 12]  [Total Invested] │
│                                         │
│  ┌─ Quick Actions ─────────────────┐  │
│  │ - Review KYC Queue (5 pending)   │  │
│  │ - Manage Users (47 total)        │  │
│  │ - View Reports (coming soon)     │  │
│  └──────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

---

### 2. **KYC Review Queue** (`/admin/kyc`)

**Shows:**
- List of all pending KYC submissions
- User details (name, submission date)
- Submitted documentation (ID, Address, Tax Info)

**Actions Available:**
- ✅ **Approve KYC** - User becomes `kyc_status: 'verified'`
- ❌ **Reject KYC** - User gets rejection reason, can resubmit

**Workflow:**

```
User Submits KYC
    ↓
Appears in /admin/kyc (status: pending)
    ↓
Admin Reviews Submission
    ↓
Admin Clicks [Approve] or [Reject]
    ↓
User Receives Notification
    ↓
If Approved: kyc_status = 'verified' ✓
If Rejected: kyc_status = 'unverified' + reason
```

**KYC Data Submitted by User:**

User submits through `/kyc` page:
- Step 1: ID documents (front + back)
- Step 2: Address (street, city, postal, country)
- Step 3: Tax info (national ID, tax number, certification)

All saved in `profiles.kyc_data` JSONB column:
```json
{
  "step1": {
    "docType": "الهوية الوطنية",
    "idNumber": "1234567890",
    "frontDoc": "path/to/front",
    "backDoc": "path/to/back"
  },
  "step2": {
    "street": "شارع المملكة",
    "city": "الرياض",
    "postal": "11434",
    "country": "المملكة العربية السعودية"
  },
  "step3": {
    "nationalId": "1234567890",
    "taxNumber": "3001234567",
    "selfCertified": true
  }
}
```

---

### 3. **User Management** (`/admin/users`)

**Shows:**
- List of all users
- User info: name, role, tier, KYC status, join date

**Current Features:**
- View all users
- See roles (founder/investor/admin)
- See tier levels (basic/premium/enterprise)
- See KYC status (unverified/pending/verified)

**Future Features:**
- Edit roles directly
- Edit tiers
- Disable/enable accounts
- View user activity

---

## 🔑 Testing the Admin Dashboard

### Test Scenario 1: View Dashboard as Admin

1. Create or use an account
2. In Supabase, set `profile.role = 'admin'`
3. Log in to the app
4. Visit `/admin` → You should see the dashboard ✅

### Test Scenario 2: Try to Access as Non-Admin

1. Create or use a regular account (role = 'founder' or 'investor')
2. Try to visit `/admin`
3. You should be redirected to `/dashboard/founder` ✅

### Test Scenario 3: Access Without Login

1. Log out of the app
2. Try to visit `/admin`
3. You should be redirected to `/login` ✅

---

## 🛠️ Admin Features in Detail

### KYC Approval Workflow

**When Admin Clicks "Approve":**

1. User's `kyc_status` changes to `'verified'`
2. User receives notification: "تم التحقق من هويتك" (KYC Approved)
3. User can now invest in projects
4. User can see "متحقق" (Verified) badge

**Code:**
```typescript
// app/admin/kyc/actions.ts
export async function approveKyc(userId: string) {
  // 1. Verify caller is admin
  // 2. Update kyc_status = 'verified'
  // 3. Send notification to user
  // 4. Revalidate page
}
```

---

### KYC Rejection Workflow

**When Admin Clicks "Reject":**

1. Admin enters rejection reason (e.g., "صورة الهوية غير واضحة")
2. User's `kyc_status` changes back to `'unverified'`
3. Rejection reason is saved in `kyc_data.rejectionReason`
4. User receives notification with reason
5. User can resubmit from `/kyc` page

**Code:**
```typescript
// app/admin/kyc/actions.ts
export async function rejectKyc(userId: string, reason: string) {
  // 1. Verify caller is admin
  // 2. Save rejection reason
  // 3. Set kyc_status back to 'unverified'
  // 4. Send notification to user with reason
  // 5. Revalidate page
}
```

---

## 📊 Admin Dashboard Data

### Platform Metrics (Updated Real-Time)

| Metric | Source | Update Frequency |
|--------|--------|-------------------|
| Total Users | `profiles` table count | On page load |
| Pending KYC | `profiles` table where `kyc_status='pending'` | On page load |
| Active Projects | `projects` table where `status='active'` | On page load |
| Total Invested | Sum of `investments.amount` | On page load |

### KYC Queue Data

| Field | Source | Display |
|-------|--------|---------|
| User Name | `profiles.full_name` | Full name |
| Submission Date | `profiles.created_at` | Date in Arabic |
| KYC Data | `profiles.kyc_data` (JSONB) | Expandable details |
| Current Status | `profiles.kyc_status` | pending |

---

## 🔒 Security & Permissions

### Database Row-Level Security (RLS)

The admin routes are protected by:

1. **Middleware Protection** (`middleware.ts`)
   - `/admin` requires authentication
   - Checked before any page load

2. **Layout Protection** (`app/admin/layout.tsx`)
   - Must have `role = 'admin'`
   - Non-admins are redirected

3. **Action-Level Checks** (each server action)
   - Verify user is admin before executing
   - Verify user owns the resource

### Example: Approving KYC

```typescript
// Only admins can run this
export async function approveKyc(userId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Check 1: User logged in?
  if (!user) return { error: 'غير مصرح' }

  // Check 2: User is admin?
  const { data: adminProfile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (adminProfile?.role !== 'admin') {
    return { error: 'غير مصرح' }
  }

  // Check 3: Proceed with approval
  // ...
}
```

---

## 🎯 Common Admin Tasks

### Task 1: Review a Pending KYC Submission

1. Visit `/admin/kyc`
2. Find the user in the list
3. Click the row to expand details
4. Review Step 1 (ID documents)
5. Review Step 2 (Address)
6. Review Step 3 (Tax info)
7. Click [Approve] or [Reject]
8. If reject, enter reason
9. Click [Confirm]
10. User receives notification

### Task 2: View Platform Overview

1. Visit `/admin`
2. See 4 stat cards:
   - Total Users
   - Pending KYC
   - Active Projects
   - Total Investments
3. Click "مراجعة KYC" to go to review queue
4. Click "إدارة المستخدمين" to manage users

### Task 3: Check User Information

1. Visit `/admin/users`
2. See all users in a table
3. Columns: Name, Role, Tier, KYC Status, Join Date
4. Find user by scrolling or searching (future feature)
5. Click on user row for more details (future feature)

---

## ⚙️ Technical Details for Developers

### Admin Routes Structure

```
/app/admin/
├── layout.tsx           (Auth guard - checks role='admin')
├── page.tsx             (Dashboard overview)
├── kyc/
│   ├── page.tsx         (KYC queue server component)
│   ├── KYCReviewClient.tsx  (Review UI - client component)
│   └── actions.ts       (Approve/reject server actions)
└── users/
    └── page.tsx         (User list server component)
```

### Authentication Flow

```
User visits /admin
    ↓
middleware.ts checks: isAuthenticated?
    ↓ YES: Continue
    ↓ NO: Redirect to /login
    ↓
app/admin/layout.tsx checks: role='admin'?
    ↓ YES: Render admin layout
    ↓ NO: Redirect to /dashboard/founder
    ↓
Admin page loads safely
```

### Real-Time Updates

- KYC approval sends notification via `createNotification()`
- Page revalidates via `revalidatePath('/admin/kyc')`
- Next.js refreshes the page data

---

## 🐛 Troubleshooting

### "Access Denied" or "Redirected to Dashboard"

**Problem:** Not admin role  
**Solution:** 
1. Check your user role in Supabase: `SELECT role FROM profiles WHERE id='YOUR_ID'`
2. Update if needed: `UPDATE profiles SET role='admin' WHERE id='YOUR_ID'`
3. Log out and log back in

### "Redirected to Login"

**Problem:** Not authenticated  
**Solution:**
1. Make sure you're logged in
2. Check browser cookies/session
3. Clear cache and log in again

### KYC Data Not Showing

**Problem:** `kyc_data` column missing  
**Solution:**
1. Run migration: `ALTER TABLE profiles ADD COLUMN IF NOT EXISTS kyc_data jsonb default '{}'`
2. Refresh page

### Notifications Not Sent

**Problem:** Notification doesn't appear after approval  
**Solution:**
1. Check `notifications` table exists
2. Check realtime subscriptions enabled
3. Check RLS policies on notifications table

---

## 📝 Sample Admin Workflow

### Scenario: Approving a User's KYC

1. **User submits KYC** via `/kyc` page
   - Uploads ID documents
   - Fills address information
   - Confirms tax information

2. **Admin notified**
   - User appears in `/admin/kyc` queue
   - Status: `pending`

3. **Admin reviews**
   - Visits `/admin/kyc`
   - Clicks user row to expand
   - Reviews all 3 steps of submission

4. **Admin approves**
   - Clicks [Approve] button
   - Action runs: `approveKyc(userId)`

5. **Backend processes**
   - Updates `kyc_status = 'verified'`
   - Creates notification
   - Revalidates page

6. **User sees result**
   - Gets notification: "تم التحقق من هويتك"
   - Can now invest in projects
   - Profile shows "معتمد" (Verified) badge

---

## 📞 Need Help?

If you encounter issues:

1. **Check console errors** - Browser DevTools (F12)
2. **Check Supabase logs** - Supabase Dashboard → Logs
3. **Verify role** - SQL: `SELECT role FROM profiles WHERE email='your-email'`
4. **Check migrations** - Ensure `kyc_data` and `notifications` exist
5. **Test locally** - `npm run dev` and test step-by-step

---

## 🎉 You're All Set!

Admin Dashboard is now accessible to users with `role = 'admin'`. Start reviewing KYC submissions and managing your platform!

**Quick Links:**
- Dashboard: `/admin`
- KYC Review: `/admin/kyc`
- User Management: `/admin/users`

---

*Last Updated: April 14, 2026*  
*Admin Dashboard v1.0*
