# How to Push Portfolio to GitHub

Your portfolio code has been committed locally. To push it to GitHub, you need to authenticate.

## Option 1: Using Personal Access Token (Recommended)

1. Create a GitHub Personal Access Token:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `repo` (full control)
   - Generate and copy the token

2. Push to GitHub:
   ```bash
   cd /home/manupa/SD/Docs/Portfolio/portfolio
   git push -u origin main
   ```
   
   When prompted:
   - Username: `Zektopic` (or your GitHub username)
   - Password: `<paste your token>`

## Option 2: Using SSH Key

1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "manupa@manupawick.men"
   cat ~/.ssh/id_ed25519.pub
   ```

2. Add the public key to GitHub:
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste the key from above

3. Push to GitHub:
   ```bash
   cd /home/manupa/SD/Docs/Portfolio/portfolio
   git push -u origin main
   ```

## Current Status

✅ Repository initialized
✅ All files committed locally
✅ Remote set to: git@github.com:Zektopic/portfolio-manupa.git
⏳ Waiting to be pushed to GitHub

## What's Been Committed

- Complete Next.js portfolio with all LinkedIn data
- Production-ready build configuration
- PM2 and Cloudflare tunnel configs
- Documentation (README_DEPLOYMENT.md)
- All 9 data files with your profile information

## Quick Command

After authentication is set up:
```bash
cd /home/manupa/SD/Docs/Portfolio/portfolio && git push -u origin main
```

