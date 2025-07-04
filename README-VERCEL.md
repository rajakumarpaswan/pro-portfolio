# Portfolio Website - Vercel Deployment Guide

This is a static React.js portfolio website optimized for Vercel deployment.

## 🚀 Quick Deploy to Vercel

### Method 1: Direct Upload
1. **Download** this portfolio folder
2. **Extract** the files from the tar.gz archive
3. **Go to** [vercel.com](https://vercel.com)
4. **Click** "New Project"
5. **Drag and drop** the `portfolio-website` folder
6. **Click** "Deploy"

### Method 2: GitHub Integration
1. **Create** a new GitHub repository
2. **Upload** all files from the `portfolio-website` folder
3. **Connect** your GitHub repo to Vercel
4. **Deploy** automatically

## 📝 Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Portfolio pages
│   │   ├── assets/        # Images (including your profile photo)
│   │   └── hooks/         # Custom hooks
│   └── index.html         # Main HTML file
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── README-VERCEL.md       # This file
```

## ⚙️ Build Settings for Vercel

If you need to configure manually:

- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

## 🎯 Features

- ✅ **Static Site** - No server required
- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark/Light Theme** - Toggle between themes
- ✅ **Contact Form** - Opens email client directly
- ✅ **Profile Image** - Your actual photo included
- ✅ **SEO Optimized** - Good search engine visibility
- ✅ **Fast Loading** - Optimized for performance

## 🔧 Environment Variables

No environment variables are required for the static version.

## 📧 Contact Form

The contact form now works by opening the user's default email client with pre-filled information. This is perfect for static hosting and ensures messages reach you directly.

## 🌐 After Deployment

Once deployed, your portfolio will be available at:
- `https://your-project-name.vercel.app`
- You can also configure a custom domain in Vercel settings

## 📱 Mobile Optimization

The portfolio is fully responsive and optimized for:
- Mobile phones
- Tablets
- Desktop computers
- All screen sizes

## 🎨 Customization

To modify content:
1. Edit files in `client/src/components/portfolio/`
2. Update personal information
3. Redeploy to Vercel

Your portfolio is now ready for professional deployment!