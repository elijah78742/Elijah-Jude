# New Life Comprehensive College (NLCC) - Official Portal & Web Application

Welcome to the full source repository for **New Life Comprehensive College (NLCC)**, a premier co-educational private secondary school situated in Ibadan, Oyo State, Nigeria.

📍 **Physical Campus Address:**  
**NEW LIFE CAMP GROUND, OLOOLA, SOKA AREA, IBADAN, NIGERIA**

🎯 **School Motto:**  
*"Building Excellence, Character and Future Leaders"*

🎨 **Brand Visual System:**  
- **Primary Navy Blue:** `#0A192F` & `#172A45`
- **Accent Gold Yellow:** `#FFC107` & `#D9A404`

---

## ✨ Features & Included Pages

This website project features **7 fully implemented pages** connected via React state & dynamic routing:

1. **Home (`/src/pages/Home.tsx`)**:
   - High-impact Hero Section with call-to-action buttons
   - School Name & Motto banner
   - Welcome message & Principal's Executive Foreword
   - Interactive School Highlights & Fast Facts counters
   - Live Announcements ticker with priority filtering
   - Upcoming Academic Events calendar preview
   - Parent & Alumni Testimonials carousel
   - Comprehensive Navigation Bar & Footer

2. **About Us (`/src/pages/AboutUs.tsx`)**:
   - Detailed College History (from founding to current campus)
   - Mission Statement & Vision Pillars
   - Core Moral Values (Integrity, Diligence, Godliness, Excellence)
   - Academic & Athletics Achievements Showcase

3. **Academics (`/src/pages/Academics.tsx`)**:
   - Junior Secondary School (JSS 1-3) & Senior Secondary School (SSS 1-3) Programs
   - Curriculum pathways (Sciences, Arts & Humanities, Commerce)
   - Holistic 21st-Century Learning Approach & STEM integration
   - Interactive Term-by-Term Academic Calendar

4. **Admissions (`/src/pages/Admissions.tsx`)**:
   - Comprehensive Admission Requirements & Entrance Exam guide
   - Step-by-Step Application Process
   - Instant Online Preliminary Admission Form modal trigger
   - Fee Structure overview & Admissions Helpdesk contact

5. **Staff Directory (`/src/pages/Staff.tsx`)**:
   - Certified Faculty Profiles & Department Heads
   - Department interactive filtering tabs (Sciences, Arts, Commerce, Administration)
   - Professional staff cards with qualifications & photo placeholders

6. **Student Life (`/src/pages/StudentLife.tsx`)**:
   - Campus Athletics & Sports teams (Football, Athletics, Basketball)
   - Co-curricular Clubs & Societies (JETS Club, Literary & Debating, Coding/Robotics)
   - Campus Photo Gallery with category filtering

7. **Contact Us (`/src/pages/Contact.tsx`)**:
   - Prominent physical address display: *New Life Camp Ground, Oloola, Soka Area, Ibadan, Nigeria*
   - Interactive Contact Inquiry Form with instant validation
   - Phone numbers & email placeholders (`+234 803 456 7890`, `info@newlifecollege.edu.ng`)
   - Interactive Campus Direction & Map finder
   - Social Media integration links (WhatsApp, Facebook, Instagram)

---

## 🛠️ Technical Stack

- **Framework:** React 18 with TypeScript (`.tsx`)
- **Build Tool:** Vite 6 (Fast compilation & optimized bundling)
- **Styling:** Tailwind CSS utility-first design system with custom school brand tokens
- **Animations:** `motion/react` for smooth page entrances and hover micro-interactions
- **Icons:** `lucide-react` modern vector iconography

---

## 💻 Quick Start & Verification Commands

This project is guaranteed to run immediately after running these standard commands:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Access the application live at `http://localhost:3000`.

### 3. Build Production Bundle
```bash
npm run build
```
Generates clean, static production artifacts in the `/dist` folder.

---

## 📦 GitHub Pages Deployment Guide

This project is pre-configured for direct GitHub Pages deployment.

### Automated Deployment (GitHub Actions)
1. Push this repository to GitHub.
2. In your GitHub repository navigate to **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` will automatically build and publish your site whenever you push to `main`!

### Manual Configuration (`vite.config.ts`)
If deploying to a repository subpath (e.g., `https://username.github.io/new-life-college/`), open `vite.config.ts` and set:
```typescript
export default defineConfig(() => {
  return {
    base: '/YOUR-REPOSITORY-NAME/', // Replace with your exact GitHub repo name
    plugins: [react(), tailwindcss()],
  };
});
```

---

## 🎁 Bonus: 100% Pure Vanilla HTML/CSS/JS Export
Inside `/public/vanilla/` you will also find a lightweight, framework-free single-page export (`index.html`, `styles.css`, `app.js`) that runs directly in any browser without Node.js or build tools! Click the **"HTML/JS Code"** button in the site header to inspect or download it.
