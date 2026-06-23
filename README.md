# Ahmad Kurniawan Ibrahim - Professional Portfolio

A high-performance, minimalist professional portfolio showcasing skills, experience as an Apple Developer Academy Alumnus, and selected projects. 
Built with Next.js (App Router), TypeScript, Tailwind CSS, `next-themes` (Dark/Light toggle), and Framer Motion.

## Features
- **Adaptive UI**: Switch between a sleek Light mode and the rich Apple-inspired Dark mode natively.
- **Micro-Animations**: Framer Motion scroll-reveals, view-triggered animations, and fluid icons.
- **Modular Data Structure**: Easily updatable dynamic project components.
- **Server and Client Component Separation**: Highly optimized for SEO, delivering interactive bits only where required.

## How to Run locally

### Prerequisites
Make sure you have Node.js and `npm` installed.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

---

## 🧭 Technical Implementation of Navigation

In technical interviews, recruiters may ask how the seamless "spy" navigation of this portfolio functions. Here is the technical breakdown:

### Smooth Scrolling & Active States
We rely on React's highly performant **Intersection Observer API** combined with Framer Motion. 
When the user scrolls, `Navbar.tsx` utilizes a client-side `useEffect` hook to calculate which specific section (`#about`, `#projects`, etc.) overlaps heavily within the viewport coordinates (`rootMargin`). 

* **State Tracking:** As sections cross the invisible threshold, React state `[activeSection, setActiveSection]` updates passively to match the intersecting HTML `id`.
* **Framer Motion Line:** The sliding underline across the desktop Nav is achieved using `<motion.div layoutId="navUnderline" />`. This allows Framer to map the spatial changes natively at 60fps across absolute boundaries without relying entirely on generic CSS transitions.

This guarantees smooth navigation and instantly signals exactly where heavily customized components lie in the document.

---

## 📖 The Owner's Manual (Manual To-Do List)

> [!IMPORTANT]
> **Action Required**: Before sending this portfolio to recruiters, Ahmad, please follow this checklist to finalize your professional footprint.

### 1. Project Descriptions (STAR Method)
When editing `data/projects.ts`, use the **STAR** (Situation, Task, Action, Result) method or "Problem-Solution-Result" format. 
* *Bad:* "Built an app for students."
* *Good:* "Engineered a spatial organizational portal using SwiftUI. Addressed fragmented communication workflows, resulting in a centralized platform scaling to 500+ active student users."

### 2. Update Media Assets
Right now, projects without images fall back to generic folder icons. 
- Go through your Apple Developer Academy projects (e.g., **DreamRank**) and capture **high-quality, high-resolution screenshots**.
- Save them in the `public/images/` folder and map the corresponding paths (e.g., `/images/dreamrank-demo.png`) to the `image` property in your `data/projects.ts`.

### 3. Personal Branding Continuity 
Your profile is now themed heavily around your identity as a **"Multidisciplinary Full-Stack Engineer"**. 
- Ensure your attached resumes, LinkedIn profile, and active GitHub repos echo this exact identity. 
- You bridge the gap between heavy Node/JS architecture and Apple ecosystem experiences. Lean into this rarity!

### 4. Certifications
Once your final semester completes:
- **Don't Forget**: Link your official Apple Developer Academy Certification directly into your About/Experience section, or append a visible digital badge link.

---

## 🛠 Adding New Projects

The portfolio dynamically loads projects using the data array found in `data/projects.ts`!
To add, edit or remove projects, you do **not** need to touch the UI code. 

**Step-by-step guide to adding a new project:**

1. Navigate to the `data/projects.ts` file in your code editor.
2. Locate the existing `projects` array at the bottom of the file.
3. Add a new object following this template format:

   ```typescript
   {
     id: "unique-project-slug",
     title: "Your Amazing Project Title",
     description: "A succinct 1-3 sentence summary of the challenge, role, and what you built.",
     tools: ["SwiftUI", "Node.js", "ExpressJS"], // 2-4 primary technologies
     link: "https://your-live-link.com", // (Optional) removes link button if omitted
     image: "/images/your-screenshot.jpg" // (Optional) shows folder icon placeholder if omitted
   }
   ```
4. Save the file! The page will instantly hot-reload with the new project elegantly animated into the showcase layout.

---

## 🔎 Final SEO Setup

The site metadata, sitemap, robots file, and social preview URLs all read the base domain from `NEXT_PUBLIC_SITE_URL`.

### Update the domain name

1. Set the environment variable in your deployment platform or local `.env` file:
   ```bash
   NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
   ```
2. If you prefer a hardcoded value, update the fallback in [`lib/site.ts`](./lib/site.ts).
3. Rebuild the project after changing the domain so the sitemap, canonical URLs, Open Graph tags, and Twitter card links all regenerate with the new host.

### What this powers

- Canonical URLs in `app/layout.tsx`
- Project metadata in `app/projects/[slug]/page.tsx`
- `sitemap.xml` from `app/sitemap.ts`
- `robots.txt` from `app/robots.ts`
- Social preview cards for LinkedIn, X, and other crawlers
