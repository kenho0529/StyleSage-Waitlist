# 🚀 StyleSage Waitlist - Vercel Deployment Guide

## ✅ What's Ready

- ✅ Supabase database connected and tested
- ✅ Waitlist form functional
- ✅ RLS policies configured for security
- ✅ Code pushed to GitHub: `kenho0529/StyleSage-Waitlist`

## 📋 Deployment Steps

### Step 1: Import to Vercel

1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select: **`kenho0529/StyleSage-Waitlist`**
4. Click **"Import"**

### Step 2: Configure Project Settings

On the import screen, configure:

```
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Step 3: Add Environment Variables

Click **"Environment Variables"** and add these 3 variables:

#### Variable 1:
```
Name: VITE_SUPABASE_PROJECT_ID
Value: rbtohkvrigdtqtoqeuwz
```

#### Variable 2:
```
Name: VITE_SUPABASE_URL
Value: https://rbtohkvrigdtqtoqeuwz.supabase.co
```

#### Variable 3:
```
Name: VITE_SUPABASE_PUBLISHABLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJidG9oa3ZyaWdkdHF0b3FldXd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTIyMzgsImV4cCI6MjA2OTE4ODIzOH0.yWSuSS8rgAii3spVwJr8OVHT8mgjxFCOLku6efZUblg
```

**Important**: Apply these to all environments (Production, Preview, Development)

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `https://stylesage-waitlist-[random].vercel.app`

### Step 5: Test Production Deployment

1. Visit your Vercel URL
2. Submit a test email
3. Verify in Supabase:
   - Go to: https://supabase.com/dashboard/project/rbtohkvrigdtqtoqeuwz/editor/public.waitlist
   - Check if your test email appears

### Step 6: Add Custom Domain (Optional)

If you have a domain:

1. In Vercel, go to **Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `waitlist.stylesage.com`)
4. Follow DNS configuration instructions

#### DNS Records (for subdomain):
```
Type: CNAME
Name: waitlist
Value: cname.vercel-dns.com
TTL: Auto
```

#### DNS Records (for root domain):
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

5. Wait 5-30 minutes for DNS propagation
6. SSL certificate will be auto-provisioned by Vercel

## 🧪 Testing Checklist

After deployment, test these scenarios:

- [ ] **New signup**: Submit valid email → See success message
- [ ] **Duplicate signup**: Submit same email → See "already on waitlist" message
- [ ] **Invalid email**: Submit invalid format → See error message
- [ ] **Empty form**: Submit without email → See error message
- [ ] **Mobile responsive**: Test on phone/tablet
- [ ] **Browser compatibility**: Test on Chrome, Safari, Firefox
- [ ] **Verify in database**: Check Supabase dashboard for new entries

## 📊 Monitoring & Analytics

### View Signups
**Supabase Dashboard**:
https://supabase.com/dashboard/project/rbtohkvrigdtqtoqeuwz/editor/public.waitlist

### Check Logs
**Vercel Runtime Logs**:
1. Go to your project in Vercel
2. Click **"Logs"** tab
3. Filter by production deployment

**Supabase Logs**:
https://supabase.com/dashboard/project/rbtohkvrigdtqtoqeuwz/logs/explorer

### Export Signups
Run in Supabase SQL Editor:
```sql
-- Export all signups
SELECT 
  email,
  created_at,
  DATE(created_at) as signup_date
FROM public.waitlist
ORDER BY created_at DESC;

-- Get daily counts
SELECT 
  DATE(created_at) as date,
  COUNT(*) as signups
FROM public.waitlist
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

## 🔒 Security Checklist

- [x] Environment variables not committed to git
- [x] Row Level Security (RLS) enabled
- [x] Anonymous users can only INSERT, not SELECT
- [x] Email uniqueness enforced at database level
- [x] HTTPS enabled by default (Vercel)
- [x] API keys use anon/public key (not service role)

## 🚨 Troubleshooting

### Build Fails on Vercel
**Solution**: Check build logs for errors
- Missing dependencies? Run `npm install` locally first
- TypeScript errors? Run `npm run build` locally
- Environment variables set? Double-check in Vercel settings

### "Missing Supabase credentials" in production
**Solution**: 
1. Go to Vercel project → Settings → Environment Variables
2. Verify all 3 variables are present
3. Click **"Redeploy"** to apply changes

### Form submission fails in production
**Solution**:
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests
4. Verify Supabase URL and key are correct

### DNS not resolving (custom domain)
**Solution**:
1. Check DNS propagation: `dig your-domain.com`
2. Verify CNAME points to `cname.vercel-dns.com`
3. Wait up to 48 hours (usually 5-30 minutes)
4. Check Vercel domain status shows "Active"

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Vercel Support**: https://vercel.com/help
- **Supabase Support**: https://supabase.com/dashboard/support/new

## 🎯 Next Steps After Deployment

1. **Share the link** with your audience
2. **Add analytics** (Google Analytics, Plausible)
3. **Set up email notifications** for new signups
4. **Create admin dashboard** to view/manage signups
5. **A/B test** different copy and CTAs
6. **Add social proof** ("Join 500+ people")
7. **Integrate with email marketing** (Mailchimp, ConvertKit)

---

## 🎉 Quick Deploy (TL;DR)

```bash
# 1. Already done ✅
git push origin main

# 2. Go to Vercel
https://vercel.com/new

# 3. Import: kenho0529/StyleSage-Waitlist

# 4. Add 3 environment variables (see Step 3 above)

# 5. Deploy!

# 6. Test at your Vercel URL

# 7. (Optional) Add custom domain
```

---

**Your Supabase is ready! Just deploy to Vercel and you're live! 🚀**
