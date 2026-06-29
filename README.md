# Mohamed Shafvan — Portfolio

A production-grade personal portfolio website built with React 18, TypeScript, Vite, and TailwindCSS. Designed for professional deployment on GitHub Pages.

---

## ✨ Features

- **Dark / Light Mode** — Automatically detects system preference, persists to localStorage
- **Animated Hero** — Typing effect, floating stats badges, animated counters
- **Interactive Experience Timeline** — Expandable cards with achievement metrics and tech stacks
- **Categorised Skills Panel** — Animated proficiency bars across 6 technology domains
- **Certifications Gallery** — Filterable Google Cloud badge showcase with Credly links
- **Education & Languages** — Clean card layout with animated language proficiency
- **Contact Hub** — All channels with availability status
- **Scroll Spy Navigation** — Active section highlighting in the navbar
- **Responsive** — Mobile-first, looks great on all screen sizes
- **SEO Ready** — OpenGraph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt
- **GitHub Actions CI/CD** — Auto-deploys on every push to `main`

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Install & Run

```bash
# 1. Clone or unzip the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output goes to ./dist/
```

### Preview Production Build Locally

```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages

### Option A — Automatic (GitHub Actions — Recommended)

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/shafvan4136/portfolio.git
   git push -u origin main
   ```

2. In your GitHub repository settings:
   - Go to **Settings → Pages**
   - Set **Source** to `Deploy from a branch`
   - Set **Branch** to `gh-pages` and folder `/root`
   - Click **Save**

3. On every push to `main`, GitHub Actions will build and deploy automatically.

4. Your portfolio will be live at:
   ```
   https://shafvan4136.github.io/portfolio/
   ```

### Option B — Manual Deploy

```bash
npm run deploy
# Builds the project and pushes ./dist to the gh-pages branch
```

---

## ⚙️ Configuration

### Update Repository Base Path

If your GitHub repository name is **not** `portfolio`, update `vite.config.ts`:

```ts
export default defineConfig({
  base: './',   // works for most GitHub Pages setups
  // OR use the specific path:
  // base: '/your-repo-name/',
})
```

### Update SEO Meta Tags

Edit `index.html` to update:
- `<meta property="og:url">` — your actual GitHub Pages URL
- `<title>` — your name and titles

### Update Personal Data

All portfolio content is centralized in `src/data/portfolio.ts`. Edit this file to update:
- Personal information & social links
- Experience entries
- Skill categories and proficiency levels
- Certifications and badges
- Education details

---

## 🏗️ Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD — auto-deploys on push to main
├── public/
│   ├── profile.png             # Professional photo
│   ├── favicon.svg             # Browser tab icon
│   ├── robots.txt              # SEO
│   └── sitemap.xml             # SEO
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Fixed nav with scroll spy & theme toggle
│   │   │   └── Footer.tsx      # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Full-screen hero with typing effect
│   │   │   ├── About.tsx       # Professional summary + highlight cards
│   │   │   ├── Experience.tsx  # Expandable timeline
│   │   │   ├── Skills.tsx      # Categorised skills with animated bars
│   │   │   ├── Certifications.tsx # Filterable badge gallery
│   │   │   ├── Education.tsx   # Education & language proficiency
│   │   │   └── Contact.tsx     # Contact hub with availability
│   │   └── ui/
│   │       └── SectionWrapper.tsx # Shared animation wrapper + utils
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Dark/light mode state & persistence
│   ├── data/
│   │   └── portfolio.ts        # ← All content lives here
│   ├── hooks/
│   │   └── index.ts            # Typing effect, scroll spy, counter hooks
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # TailwindCSS + global styles
├── index.html                  # HTML entry point with SEO meta tags
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite 5 | Build tool |
| TailwindCSS 3 | Utility-first styling |
| Framer Motion 11 | Animations & transitions |
| Lucide React | Professional icon library |
| GitHub Actions | CI/CD deployment |

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build + deploy to gh-pages branch |

---

## 🎨 Design Philosophy

- **Professional over flashy** — No gimmicks, every element serves a purpose
- **Dark mode first** — Premium feel with careful light mode support
- **Performance** — Code splitting, lazy loading, memoization
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation, focus indicators
- **Mobile-first** — Responsive at every breakpoint

---

## 📜 License

MIT — Feel free to use this as a template for your own portfolio.

---

*Built with precision for Mohamed Shafvan · Ramanathapuram, India*
