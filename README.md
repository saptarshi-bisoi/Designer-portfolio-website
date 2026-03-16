# Designer Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS (v4)**, and **Radix UI** components. This project is structured for easy customization and includes a theme switcher, interactive sections, and accessible UI components.

## 🚀 Features

- **Next.js 16** app router with server components
- Theme switching (light/dark) using `next-themes`
- Custom cursor and loading screen
- Responsive UI sections: Hero, About, Services, Portfolio, Contact
- Modular, reusable Radix UI-based components (buttons, dialogs, toasts, etc.)
- Tailwind CSS with utility-first styling + animations
- Form handling with `react-hook-form` + validation via `zod`

## 🌐 Live Demo

You can view the deployed site here:

- https://saptarshi-designer.vercel.app/

## 🗂 Project Structure

- `app/` - Next.js app router pages + global styles
- `components/` - Page sections and shared components
- `components/ui/` - Reusable UI primitives (Radix + Tailwind)
- `hooks/` - Custom React hooks
- `lib/` - Data and helper utilities
- `public/` - Static assets (images, icons)
- `styles/` - Global Tailwind CSS styles

## 🧰 Technologies

- **Next.js** (v16)
- **React** (v19)
- **TypeScript**
- **Tailwind CSS** (v4)
- **Radix UI**
- **Framer Motion**
- **react-hook-form** + **zod**

## ▶️ Getting Started

### Prerequisites

- Node.js (recommended v20+)
- pnpm (project includes `pnpm-lock.yaml`)

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Then open http://localhost:3000

### Build for production

```bash
pnpm build
pnpm start
```

## 🧩 Customization Tips

- Update the portfolio data in `lib/projects-data.ts`
- Adjust colors, fonts, and theming in `styles/globals.css`
- Add or remove sections by editing `app/page.tsx` and components under `components/`

## 🧪 Linting

```bash
pnpm lint
```

## 📌 Notes

This project is configured for static and dynamic content with Next.js app router conventions. It is designed to be a starting point for a personal portfolio and can be extended with additional sections (blog, case studies, testimonials, etc.).
