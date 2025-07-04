# Portfolio Website - R. Raja Kumar Paswan

A professional React.js portfolio website showcasing frontend development skills and AI/ML experience with modern design and interactive features.

## Features

- 🌟 Modern responsive design with dark/light theme toggle
- 📱 Mobile-first approach with smooth animations
- ✉️ Working contact form with backend integration
- 🎨 Professional UI components with shadcn/ui
- 🚀 Fast development with Vite and TypeScript
- 📊 Skills visualization with progress bars
- 🎓 Education and achievements showcase
- 💼 Experience timeline with detailed descriptions

## Tech Stack

### Frontend
- **React.js 18** - Modern UI library with hooks
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Framer Motion** - Smooth animations and transitions
- **TanStack Query** - Server state management
- **Wouter** - Lightweight client-side routing

### Backend
- **Express.js** - Web application framework
- **TypeScript** - Server-side type safety
- **Zod** - Schema validation
- **Drizzle ORM** - Type-safe database toolkit

### Development Tools
- **Vite** - Fast build tool and development server
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing

## Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. **Clone or download this folder**
2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type checking with TypeScript

## Project Structure

```
portfolio-website/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   └── portfolio/ # Portfolio-specific components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and configurations
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main application component
│   │   ├── main.tsx       # Application entry point
│   │   └── index.css      # Global styles and Tailwind
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite development server setup
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schemas and types
├── attached_assets/      # Static assets (resume, images)
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite build configuration
└── README.md            # This file
```

## Customization

### Personal Information
Update the following files with your information:

1. **client/src/components/portfolio/hero-section.tsx** - Name, title, description
2. **client/src/components/portfolio/about-section.tsx** - About section content
3. **client/src/components/portfolio/experience-section.tsx** - Work experience
4. **client/src/components/portfolio/projects-section.tsx** - Project showcase
5. **client/src/components/portfolio/skills-section.tsx** - Technical skills
6. **client/src/components/portfolio/education-section.tsx** - Education and achievements
7. **client/src/components/portfolio/contact-section.tsx** - Contact information
8. **client/index.html** - SEO meta tags and Open Graph data

### Styling
- **Colors**: Modify CSS variables in `client/src/index.css`
- **Components**: Customize shadcn/ui components in `client/src/components/ui/`
- **Animations**: Add custom animations in `client/src/index.css`

### Adding New Sections
1. Create component in `client/src/components/portfolio/`
2. Import and add to `client/src/pages/portfolio.tsx`
3. Add navigation link in `client/src/components/portfolio/navigation.tsx`

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Set build command to `npm run build`
4. Set output directory to `dist/public`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload `dist/public` folder to Netlify

## Database (Optional)

The application uses in-memory storage by default. To use a real database:

1. Set up PostgreSQL database
2. Add `DATABASE_URL` environment variable
3. Run migrations: `npm run db:push`

## Contact Form

The contact form stores submissions in memory by default. Messages can be viewed by accessing `/api/contacts` endpoint.

## License

MIT License - feel free to use this template for your own portfolio.

## Support

If you encounter any issues:
1. Check Node.js version (18+ required)
2. Delete `node_modules` and run `npm install`
3. Clear browser cache
4. Check console for errors

---

Built with ❤️ by R. Raja Kumar Paswan