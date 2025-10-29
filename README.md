![E Smart Campus Portal](https://img.shields.io/badge/E%20Smart%20Campus-Student%20Management%20System-blue?style=for-the-badge)

# E Smart Campus Portal 🏫✨

> A modern student management ERP portal — login, signup, academic resources, placement support, AI assistant and more. Built with React + TypeScript, styled with Tailwind CSS and deployed to Netlify.

Live demo: https://student-management-system-v1.netlify.app/ 🔗

---

## 🚀 Project Overview

E Smart Campus Portal is a clean, responsive student ERP designed to help students access academic resources, manage profiles, explore courses, connect with the community, and interact with an AI helper. The landing page welcomes users with a bold title, clear call-to-actions for Login & Signup, and fast navigation to core features.

Key pages included:
- Home / Landing (E Smart Campus Portal)
- Auth (Login & Signup)
- Profile
- Academic Resources
- Courses
- Placement
- Skill Training
- Community
- AI Interface

## ✨ Highlights & Features

- Beautiful, responsive UI with Tailwind CSS
- Authentication (signup/login flow — Supabase integration available in `src/integrations/supabase`)
- Structured pages for academic resources, placement info, and student profiles
- Component-driven architecture with small reusable UI primitives
- Deployed live on Netlify (link above)

## 🧰 Tech Stack

- React 18 + TypeScript
- Vite (dev server + build)
- Tailwind CSS for styling
- Radix UI primitives & shadcn-style components
- Supabase for auth and DB (optional)
- React Query for data fetching/caching

From the repository files, your `package.json` shows these helpful scripts:

```zsh
npm run dev    # start dev server (vite)
npm run build  # production build
npm run preview# preview the production build
```

If you prefer pnpm or bun, this repo has a `bun.lockb` so Bun/pnpm are also options.

## 🛠️ How I made it (developer notes)

1. Project scaffold
	- Started with Vite + React + TypeScript for a fast dev environment.
2. Component & UI system
	- UI primitives live in `src/components/ui/`. I used Radix + Tailwind to make accessible building blocks.
3. Routing & pages
	- Pages are under `src/pages/` and use `react-router-dom` for navigation.
4. Auth & backend
	- `src/integrations/supabase/` contains the Supabase client setup for auth and simple DB queries.
5. State management and data fetching
	- `@tanstack/react-query` (React Query) for server state and caching.
6. Accessibility & polish
	- Radix primitives and aria attributes for accessible, keyboard-friendly components.

## ✅ How to run locally

Prerequisites: Node 18+ (or Bun), Git.

Clone and install:

```zsh
git clone <YOUR_REPO_URL>
cd <YOUR_PROJECT_FOLDER>

# with npm
npm install

# or with pnpm
pnpm install

# or with bun
bun install
```

Create environment variables for Supabase (optional):

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Start dev server:

```zsh
npm run dev
```

Open the URL the dev server prints (usually http://localhost:5173).

## 📦 Build & Deploy

Production build:

```zsh
npm run build
```

Preview build locally:

```zsh
npm run preview
```

Deploy on Netlify/Vercel:
- Connect your GitHub repo and set the build command to `npm run build` and publish directory to `dist`.

## 🎯 How to use the portal (user flows)

1. Visit the landing page and choose Login or Signup.
2. Signup creates a new student account (or login with existing credentials).
3. After login, access your Profile to update personal info.
4. Browse Academic Resources, Courses, or Skill Training to learn and practice.
5. Check Placement for announcements.
6. Use AI Interface for quick assistance (if enabled).

## 🧩 Project structure (quick)

- `src/pages/` — top-level pages
- `src/components/` — UI building blocks and shared components
- `src/integrations/supabase/` — supabase client + types
- `src/hooks/` — custom hooks (auth, toasts, mobile helpers)

## 🤝 Contributing

Suggestions and PRs welcome! Please:
- Open an issue first for large features
- Follow the existing component & styling patterns
- Keep changes small and focused

## 📬 Contact & Credits

If you'd like feedback or help, open an issue or reach out via the repository. Thanks for building E Smart Campus Portal — it's a fantastic foundation for a student ERP. ❤️

---

Made with ❤️ & coffee ☕ — happy coding! 🚀
