# Ahmad Kurniawan Ibrahim Portfolio

A professional portfolio for Ahmad Kurniawan Ibrahim, Software Engineer Enthusiast and Apple Developer Academy alumnus. The site highlights selected iOS, macOS, web, and full-stack projects with SEO-ready metadata, social previews, sitemap generation, and a polished responsive interface.

Live site: https://ahmad-portfolios.vercel.app

## Highlights

- Recruiter-focused project storytelling with objective, role, tech stack, and result for every project.
- SEO setup with Metadata API, canonical URLs, Open Graph, Twitter cards, sitemap, robots, and JSON-LD Person schema.
- Responsive interface built with Next.js App Router, React, TypeScript, and Tailwind CSS.
- Accessible content structure with semantic sections, readable headings, and meaningful image alt text.
- Data-driven project pages generated from `data/projects.ts`.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes
- Vercel deployment

## Featured Projects

| Project | Category | Summary | Result |
| --- | --- | --- | --- |
| DreamRank | iOS | Gamified sleep-habit app using quests, leaderboards, HealthKit, and CloudKit | Published on the App Store and validated with 30+ users |
| HueMen | iOS | Wardrobe assistant using camera-based color detection and a virtual closet | Released on TestFlight with 33 installs and 117 sessions |
| S.I.R.A.J | iOS | Pencak Silat posture guidance app using Apple Vision and SwiftUI | Published on TestFlight and validated with 5+ users |
| Pomoboo Desktop | macOS | Desktop Pomodoro app with menu bar integration and anti-distraction reminders | Validated with 10+ users |
| Pomoboo | iOS | Pomodoro productivity app using SwiftUI and SwiftData | Validated with 5+ users |

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Build for production:

```bash
npm run build
npm start
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
app/                  App Router pages, layout, sitemap, and robots
components/           Reusable UI sections and navigation
data/projects.ts      Project content used by the home page and dynamic project pages
lib/site.ts           Site URL and shared domain configuration
public/               Static assets, CV, images, favicon, and OG image
```

## Updating Content

Most portfolio content is data-driven. To update projects, edit `data/projects.ts`:

```ts
{
  id: "project-id",
  slug: "project-slug",
  title: "Project Name",
  category: "iOS",
  objective: "Short problem and solution summary.",
  roles: ["Developer", "Researcher"],
  techStack: ["Swift", "SwiftUI"],
  results: "Concrete result or validation metric.",
  highlights: ["App Store release", "30+ user validation"],
  status: "App Store",
  ctaLabel: "View GitHub",
  featured: true,
  image: "/images/project-image.jpg",
  link: "https://example.com"
}
```

Available categories currently used by the site: `iOS`, `macOS`, `Android`, `Web`, `Full-stack`, and `Other`.

Use a simple format for every project:

1. Problem: what user or business problem the project solves.
2. Role: what you personally contributed.
3. Stack: the most relevant technologies.
4. Result: user validation, release status, metrics, or outcome.

## SEO And Domain Setup

The site metadata, sitemap, robots file, canonical URLs, Open Graph tags, and Twitter card links use the base domain from `NEXT_PUBLIC_SITE_URL`.

Set it in Vercel or in a local `.env` file:

```bash
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

If no environment variable is provided, the fallback is defined in `lib/site.ts`.

After changing the domain:

1. Rebuild and redeploy the site.
2. Open `/sitemap.xml` and `/robots.txt` to verify they load correctly.
3. Resubmit the sitemap in Google Search Console.
4. Use URL Inspection for the home page and important project pages.

## Recommended GitHub Profile Setup

For best recruiter visibility, pin these repositories on GitHub:

1. `ahmad-portfolio`
2. `CameraPosture`
3. `C2-HueMen`
4. `safa_ecommerce`
5. `InternTrack`
6. `e-Commerce-Project`

Avoid pinning support-only repositories such as privacy policy or support pages unless they are part of an app release requirement.
