# 🚀 OrbitWin — AI Automation & Website Agency Landing Page

A premium, high-converting SaaS-style landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark theme** with purple/blue glow aesthetics
- **Glassmorphism cards** with animated borders
- **Framer Motion animations** — fade-in sections, hover effects, smooth transitions
- **Contact form** with `/api/contact` API route
- **Fully responsive** — mobile-first design
- **8 complete sections** — Navbar, Hero, Services, How It Works, Benefits, Use Cases, Testimonials, CTA, Footer
- **Custom fonts** — Syne (display) + DM Sans (body) + JetBrains Mono (mono)
- **Production-ready** TypeScript code

---

## 📁 Project Structure

```
orbitwin/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page (composes all sections)
│   ├── globals.css             # Global styles, custom utilities
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form API endpoint
├── components/
│   ├── Navbar.tsx              # Fixed navbar with mobile drawer
│   ├── Hero.tsx                # Hero with animated orbs + stats
│   ├── Services.tsx            # 3 service cards with hover animations
│   ├── HowItWorks.tsx          # 3-step process with icons
│   ├── Benefits.tsx            # 6-benefit grid
│   ├── UseCases.tsx            # Tabbed use cases (Real Estate, Clinics, etc.)
│   ├── Testimonials.tsx        # 3 testimonial cards
│   ├── CTA.tsx                 # Contact form + persuasive copy
│   └── Footer.tsx              # Links, socials, ticker
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.mjs
```

---

## 🛠 Installation

### Prerequisites
- Node.js 18.17+ 
- npm or yarn or pnpm

### Steps

```bash
# 1. Navigate to the project folder
cd orbitwin

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Configuration

### Contact Form
The `/api/contact` route currently logs submissions to the console. To send real emails:

**Option A: Resend (recommended)**
```bash
npm install resend
```
```ts
// app/api/contact/route.ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'OrbitWin <no-reply@orbitwin.com>',
  to: ['hello@orbitwin.com'],
  subject: `New lead: ${name}`,
  html: `<p>${message}</p>`
});
```

**Option B: SendGrid, Nodemailer, etc.** — same pattern.

### Environment Variables
Create a `.env.local` file:
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
# Add other keys as needed
```

---

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI (fastest)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Link to existing project or create new
# - Framework: Next.js (auto-detected)
# - Build command: npm run build
# - Output directory: .next

# For production deploy:
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Add environment variables in **Settings → Environment Variables**

### Option 3: One-click (if you have Vercel account)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📦 Build for Production

```bash
# Build
npm run build

# Run production server locally
npm start
```

---

## 🎨 Customization

### Branding
- Change company name: search/replace `OrbitWin` across all files
- Update email in `Footer.tsx`: `hello@orbitwin.com`
- Swap logo in `Navbar.tsx` and `Footer.tsx`

### Colors
All colors are defined in `tailwind.config.ts` under `colors.orbit`:
```ts
orbit: {
  purple: "#7C3AED",    // Primary brand color
  blue: "#2563EB",      // Secondary
  cyan: "#06B6D4",      // Accent
  // ...
}
```

### Fonts
Loaded via Google Fonts in `globals.css`. Change `Syne` and `DM Sans` to any Google Fonts.

### Content
All section content is in clearly labeled arrays at the top of each component file — easy to update without touching layout code.

---

## 🧪 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2 | App Router, SSR, API routes |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Animations |
| Lucide React | Latest | Icons |

---

## 📄 License

MIT — free to use for commercial projects.

---

**Built by OrbitWin** · [hello@orbitwin.com](mailto:hello@orbitwin.com)
