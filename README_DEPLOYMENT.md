# Portfolio Deployment Guide

## 🎉 Successfully Deployed!

Your portfolio is now live at: **https://portfolio.manupawick.men**

## What Was Set Up

### 1. Portfolio Application
- ✅ Next.js application built for production
- ✅ All LinkedIn profile data structured in TypeScript files
- ✅ Responsive design with dark mode support
- ✅ Running on port 3030 via PM2 process manager

### 2. Process Management (PM2)
- ✅ PM2 installed and configured
- ✅ Portfolio app running as managed process
- ✅ Auto-restart on crashes enabled
- ✅ Process configuration saved

### 3. Cloudflare Tunnel
- ✅ Tunnel configured: portfolio-tunnel (93fbb5a7-cb46-4df0-a0af-dda086370469)
- ✅ DNS route: portfolio.manupawick.men → localhost:3030
- ✅ Currently running (PID: 19132)

## Current Architecture

```
Internet (HTTPS)
      ↓
Cloudflare Tunnel (portfolio.manupawick.men)
      ↓
localhost:3030
      ↓
Next.js App (PM2 Managed)
```

## Make Services Start on Boot

To ensure your portfolio starts automatically when your system boots:

```bash
bash /tmp/setup-services.sh
```

This creates systemd services for both PM2 and Cloudflared.

## Quick Commands

### Check Status
```bash
# PM2 status
npx pm2 status

# Tunnel status
ps aux | grep cloudflared | grep config.yml
```

### View Logs
```bash
# PM2 logs
npx pm2 logs portfolio

# Follow PM2 logs
npx pm2 logs portfolio --lines 50
```

### Restart Services
```bash
# Restart Next.js app
npx pm2 restart portfolio

# Restart tunnel (if systemd service installed)
sudo systemctl restart cloudflared-portfolio
```

## Update Your Portfolio

To update content:

1. **Edit Data Files**: Modify files in `app/data/`
   - `profile.ts` - Personal info, about section
   - `experience.ts` - Work experience
   - `education.ts` - Education details
   - `projects.ts` - Projects and featured posts
   - `skills.ts` - Technical skills
   - `certifications.ts` - Certifications and awards
   - `volunteering.ts` - Volunteer work
   - `publications.ts` - Publications
   - `recommendations.ts` - Recommendations

2. **Rebuild and Restart**:
   ```bash
   cd /home/manupa/SD/Docs/Portfolio/portfolio
   npm run build
   npx pm2 restart portfolio
   ```

## Troubleshooting

### Site Not Loading
```bash
# 1. Check if Next.js is running
npx pm2 status

# If not running, start it
npx pm2 start ecosystem.config.js

# 2. Check if tunnel is connected
ps aux | grep cloudflared | grep config.yml

# If not running, restart it
cloudflared tunnel --config ~/.cloudflared/config.yml run &
```

### After System Reboot
If you haven't installed systemd services yet:
```bash
# Start PM2
cd /home/manupa/SD/Docs/Portfolio/portfolio
npx pm2 start ecosystem.config.js

# Start tunnel
cloudflared tunnel --config ~/.cloudflared/config.yml run &
```

## Files and Locations

```
Portfolio Application:
  /home/manupa/SD/Docs/Portfolio/portfolio/

Configuration Files:
  /home/manupa/SD/Docs/Portfolio/portfolio/ecosystem.config.js  (PM2 config)
  /home/manupa/.cloudflared/config.yml                          (Tunnel config)
  /home/manupa/.pm2/                                            (PM2 data)

Systemd Services (after running setup script):
  /etc/systemd/system/portfolio-pm2.service
  /etc/systemd/system/cloudflared-portfolio.service

Optional Nginx Config:
  /tmp/portfolio-nginx.conf
```

## Performance Monitoring

```bash
# PM2 monitoring dashboard
npx pm2 monit

# PM2 web interface
npx pm2 web

# Check memory usage
npx pm2 show portfolio
```

## Security Notes

- Portfolio runs on localhost:3030 (not exposed to public)
- All external traffic goes through Cloudflare's encrypted tunnel
- No need to open firewall ports
- Cloudflare provides DDoS protection automatically

## Next Steps

1. ✅ Test your portfolio: https://portfolio.manupawick.men
2. ⏳ Install systemd services: `bash /tmp/setup-services.sh`
3. ⏳ Customize content in `app/data/` directory
4. ⏳ Consider adding:
   - Custom domain SSL certificate (handled by Cloudflare)
   - Analytics (Google Analytics, Plausible, etc.)
   - Contact form
   - Blog section

## Support

For detailed instructions, see: `/tmp/SETUP_INSTRUCTIONS.md`

---
**Last Updated**: November 3, 2025
**Deployment Method**: PM2 + Cloudflare Tunnel (No Nginx)
