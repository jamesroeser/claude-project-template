# Deployment Guide - Khol Gray Archive

## Overview

This guide walks through setting up hosting for kholgray.com using Vercel, connecting your custom domain from Namecheap, and configuring automatic deployments from GitHub.

## Why This Setup?

**GitHub → Vercel → kholgray.com** creates a professional deployment pipeline:

- **GitHub**: Stores your code and tracks changes
- **Vercel**: Builds and hosts your website automatically when you push code
- **Custom Domain**: Professional appearance (kholgray.com vs random-name.vercel.app)

## Prerequisites

- [x] GitHub account and repository
- [x] Vercel account (free tier)
- [x] Domain kholgray.com owned through Namecheap
- [x] Project code ready for deployment

## Step 1: Connect GitHub to Vercel

### What we're doing:

Setting up automatic deployments so every time you push code to GitHub, your website updates automatically.

### Steps:

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click "Import Project" or "New Project"
3. Select your `khol-gray-archive` repository
4. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: Leave blank (uses project root)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

### Why these settings?

- Vercel automatically detects Next.js projects and configures optimal settings
- The build process compiles your TypeScript and optimizes your assets
- The output directory is where the compiled website files are stored

## Step 2: Configure Environment Variables

### What we're doing:

Adding secret keys and configuration that shouldn't be in your public code.

### In Vercel Dashboard:

1. Go to your project → Settings → Environment Variables
2. Add these variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   STRIPE_SECRET_KEY=your_stripe_secret_key (when ready)
   ```

### Why environment variables?

- Keeps sensitive information secure (not visible in your code)
- Different values for development vs production environments
- Easy to update without changing code

## Step 3: Connect Custom Domain (kholgray.com)

### What we're doing:

Making your website accessible at kholgray.com instead of a random Vercel URL.

### In Vercel:

1. Go to your project → Settings → Domains
2. Add domain: `kholgray.com`
3. Add subdomain: `www.kholgray.com` (recommended for SEO)

### In Namecheap:

1. Log into your Namecheap account
2. Go to Domain List → Manage → Advanced DNS
3. Delete existing A records and CNAME records
4. Add these records:

```
Type: A Record
Host: @
Value: 76.76.19.19
TTL: Automatic

Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

### Why these DNS settings?

- **A Record**: Points your main domain (kholgray.com) to Vercel's servers
- **CNAME Record**: Points www.kholgray.com to Vercel's content delivery network
- **TTL (Time To Live)**: How long DNS servers cache this information

### Expected Timeline:

- DNS changes can take 24-48 hours to propagate globally
- Vercel will show "Configuration Error" until DNS propagates
- SSL certificate will be automatically issued once DNS is working

## Step 4: Test Deployment

### What to verify:

1. **Build Success**: Check Vercel dashboard for successful deployment
2. **Environment Variables**: Ensure no undefined environment variable errors
3. **Domain Access**: Test both kholgray.com and www.kholgray.com
4. **SSL Certificate**: Look for the lock icon in your browser
5. **Mobile Responsive**: Test on different screen sizes

### Common Issues and Solutions:

**Build Fails:**

- Check the build logs in Vercel dashboard
- Usually TypeScript errors or missing dependencies
- Run `npm run build` locally to reproduce the error

**Domain Not Working:**

- DNS propagation takes time (24-48 hours maximum)
- Use [whatsmydns.net](https://whatsmydns.net) to check propagation
- Verify DNS records match exactly what Vercel requires

**Environment Variables Missing:**

- Make sure variables are added in Vercel dashboard
- Variable names must match exactly (case-sensitive)
- Redeploy after adding new environment variables

## Step 5: Set Up Automatic Deployments

### What happens automatically:

1. You push code to GitHub main branch
2. Vercel detects the change within seconds
3. Vercel builds your project with latest code
4. If build succeeds, new version goes live at kholgray.com
5. If build fails, previous version stays live (no downtime)

### Branch Strategy:

- **main branch**: Automatically deploys to kholgray.com
- **feature branches**: Create preview deployments for testing
- **Pull requests**: Generate preview links for code review

## Step 6: Monitoring and Maintenance

### Vercel Analytics (Free):

- Page views and performance metrics
- Core Web Vitals tracking
- No setup required, automatically enabled

### GitHub Integration:

- Deployment status shown in GitHub commits
- Preview links automatically added to pull requests
- Failed deployments create GitHub issues

### Performance Monitoring:

- Vercel automatically optimizes images, fonts, and JavaScript
- Global CDN ensures fast loading worldwide
- Built-in monitoring alerts for downtime

## Production Checklist

Before going live with real users:

- [ ] Custom domain working (kholgray.com)
- [ ] SSL certificate active (https://)
- [ ] Environment variables configured
- [ ] Database connection working
- [ ] Error pages customized
- [ ] Analytics tracking setup
- [ ] Performance testing completed
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags configured

## Future Enhancements

### Advanced Vercel Features:

- **Edge Functions**: Run code closer to users for better performance
- **Image Optimization**: Automatic WebP conversion and resizing
- **Analytics**: Detailed performance and user behavior insights
- **Preview Deployments**: Test changes before going live

### Domain Management:

- **Email Setup**: Configure email@kholgray.com through email service
- **Subdomain Strategy**: blog.kholgray.com, shop.kholgray.com, etc.
- **CDN Configuration**: Optimize global content delivery

## Cost Breakdown

### Free Tier Limits (Vercel):

- 100GB bandwidth per month
- Unlimited personal projects
- Custom domains included
- SSL certificates included

### When to upgrade:

- Higher traffic (>100GB/month)
- Need team collaboration features
- Advanced analytics and monitoring
- Enterprise security requirements

This setup gives you a professional, scalable foundation that can grow with your project!
