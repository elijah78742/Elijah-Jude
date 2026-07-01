# New Life Comprehensive College (NLCC) - Official Deployment Guide

Welcome to the official, production-ready React + Vite repository for **New Life Comprehensive College (NLCC)** located at **New Life Campground, Oloola, Soka Area, Ibadan, Nigeria**.

This project contains 100% complete, functional, and production-tested source code files built with modern React 18, TypeScript, Vite, and Tailwind CSS.

---

## 📁 Repository Structure & Included Files

```text
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automated GitHub Actions workflow for GitHub Pages
├── public/
│   ├── favicon.svg          # School brand emblem
│   └── vanilla/             # Bonus pure HTML/CSS/JS version
├── src/
│   ├── components/          # Reusable UI components (Header, Footer, Modals, Cards)
│   ├── pages/               # 7 Core Pages (Home, AboutUs, Academics, Admissions, Staff, StudentLife, Contact)
│   ├── data.ts              # Complete school information, curricula, faculty & FAQ data
│   ├── index.css            # Global Tailwind styling & theme variables
│   ├── main.tsx             # React entry bootstrap
│   └── App.tsx              # Main routing & layout controller
├── package.json             # NPM dependencies & production build scripts
├── vite.config.ts           # Vite configuration with GitHub Pages base path support
├── tsconfig.json            # TypeScript compiler options
└── README.md                # Project overview & documentation
```

---

## ⚡ Quick Start (Local Development)

The website works immediately right out of the box after running standard npm commands:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:3000` (or the URL displayed in terminal).

### 3. Build for Production
```bash
npm run build
```
This compiles optimized static assets into the `/dist` directory with zero errors.

---

## 🚀 GitHub Pages Deployment Instructions

There are two easy ways to deploy this exact codebase to GitHub Pages:

### Method A: Automated Deployment via GitHub Actions (Recommended)
This repository includes a pre-configured `.github/workflows/deploy.yml` workflow file.

1. **Upload / Push to GitHub:**
   Commit all files in this directory and push them to a new GitHub repository (e.g., `new-life-college`).
   ```bash
   git init
   git add .
   git commit -m "Initial commit of New Life Comprehensive College portal"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY-NAME>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub.com → **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - That's it! Every time you push to `main`, GitHub Actions will automatically compile the site and deploy it live to `https://<YOUR-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/`.

---

### Method B: Manual Configuration (`vite.config.ts`)

If you are deploying manually or using `gh-pages` npm utility:

1. Open `vite.config.ts` and set your base path to match your GitHub repository name:
   ```typescript
   export default defineConfig(() => {
     return {
       base: '/YOUR-REPOSITORY-NAME/', // Replace YOUR-REPOSITORY-NAME with your repo slug
       plugins: [react(), tailwindcss()],
       // ...
     };
   });
   ```

2. Build and deploy:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

---

## 🏫 School Brand Colors & Design System

- **Primary Brand Color:** Deep Royal Navy Blue (`#0A192F` / `#172A45`)
- **Accent Brand Color:** Vibrant Gold Yellow (`#FFC107` / `#D9A404`)
- **Typography:** Display Headings (Space Grotesk / Inter Bold), Body Text (Inter)
- **Address:** New Life Camp Ground, Oloola, Soka Area, Ibadan, Nigeria

---

## 💡 Exporting from AI Studio
If viewing inside Google AI Studio:
- Click the **Export / Download** button in the top menu or settings panel to download the complete source ZIP file or push directly to your GitHub account.
