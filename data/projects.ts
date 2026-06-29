export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "iOS" | "macOS" | "Android" | "Web" | "Full-stack" | "Other";
  objective: string;
  roles: string[];
  techStack: string[];
  results: string;
  highlights: string[];
  status: string;
  ctaLabel?: string;
  featured?: boolean;
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "dreamrank",
    slug: "dreamrank",
    title: "DreamRank",
    category: "iOS",
    objective: "A sleep-habit app that turns bedtime consistency into quests, streaks, and friendly competition.",
    techStack: ["Swift", "SwiftUI", "HealthKit", "CloudKit", "Xcode", "Figma"],
    roles: ["Developer", "Researcher", "Designer"],
    results: "Published on the App Store and validated with 30+ users for gamified sleep-habit building.",
    highlights: ["App Store release", "HealthKit sleep data", "CloudKit leaderboard", "30+ user validation"],
    status: "App Store",
    featured: true,
    image: "/PortoDreamRank.jpg"
  },
  {
    id: "huemen-id",
    slug: "huemen-id",
    title: "HueMen",
    category: "iOS",
    objective: "A wardrobe assistant that uses camera-based color detection to help users organize outfits and avoid color-matching guesswork.",
    techStack: ["Swift", "SwiftUI", "CoreML", "AVFoundation", "Xcode"],
    roles: ["Developer", "Researcher"],
    results: "Released on TestFlight with 33 installs and 117 sessions; feedback was used to improve the color-picking flow.",
    highlights: ["Camera color detection", "Virtual closet", "33 TestFlight installs", "117 sessions"],
    status: "TestFlight",
    ctaLabel: "View GitHub",
    featured: true,
    link: "https://github.com/ahwan18/C2-HueMen"
  },
  {
    id: "siraj-app",
    slug: "siraj-app",
    title: "S.I.R.A.J",
    category: "iOS",
    objective: "A Pencak Silat posture-guidance prototype that helps beginners compare practice movements against reference poses.",
    techStack: ["Swift", "SwiftUI", "Vision", "CoreML", "Xcode"],
    roles: ["Developer", "Researcher"],
    results: "Published on TestFlight; 5+ early users said the visual posture guidance made basic movement positions easier to understand.",
    highlights: ["Vision pose detection", "Reference-pose workflow", "Visual posture feedback", "5+ user validation"],
    status: "TestFlight",
    ctaLabel: "View GitHub",
    featured: true,
    link: "https://github.com/ahwan18/CameraPosture"
  },
  {
    id: "interntrack",
    slug: "interntrack",
    title: "InternTrack",
    category: "Android",
    objective: "An Android tracker for internship applications, statuses, deadlines, and progress metrics.",
    techStack: ["Kotlin", "Jetpack Compose", "Room Database", "StateFlow", "MVVM"],
    roles: ["Android Developer", "Product Designer"],
    results: "Built a local-first workflow with CRUD, status filtering, dashboard metrics, and deadline awareness.",
    highlights: ["Jetpack Compose UI", "Room persistence", "Dashboard metrics", "Deadline tracking"],
    status: "Portfolio build",
    ctaLabel: "View GitHub",
    link: "https://github.com/ahwan18/InternTrack"
  },
  {
    id: "safa-ecommerce",
    slug: "safa-ecommerce",
    title: "Safa E-Commerce",
    category: "Full-stack",
    objective: "A custom-printing commerce platform covering storefront browsing, design upload, checkout, order tracking, and admin CMS work.",
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    roles: ["Full-stack Developer", "UI Developer"],
    results: "Delivered a customer and admin prototype with catalog, checkout, orders, content settings, and analytics modules.",
    highlights: ["Storefront flow", "Admin CMS", "Order management", "Supabase-backed structure"],
    status: "Full-stack prototype",
    ctaLabel: "View GitHub",
    link: "https://github.com/ahwan18/safa_ecommerce"
  },
  {
    id: "toko-mainan-jalan-dongi",
    slug: "toko-mainan-jalan-dongi",
    title: "Toko Mainan Jalan Dongi",
    category: "Full-stack",
    objective: "A toy-store commerce app with a customer shopping flow and an admin dashboard for products, categories, orders, and sales analytics.",
    techStack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
    roles: ["Full-stack Developer", "Frontend Developer"],
    results: "Built product browsing, cart persistence, checkout, protected admin routes, CRUD management, and Supabase RLS setup.",
    highlights: ["Cart persistence", "Protected admin routes", "CRUD dashboard", "Supabase RLS"],
    status: "Live demo",
    ctaLabel: "Open Live Demo",
    link: "https://e-commerce-project-kappa-seven.vercel.app"
  },
  {
    id: "zenith-motionquest",
    slug: "zenith-motionquest",
    title: "Zenith MotionQuest",
    category: "Web",
    objective: "A web-based motion game experiment combining body-tracking interaction, story prompts, and a high-energy training theme.",
    techStack: ["Next.js", "TypeScript", "Supabase", "AI", "Vercel"],
    roles: ["Web Developer", "Interaction Developer"],
    results: "Created a deployed prototype with AI-assisted storytelling, motion interaction, and a Supabase-backed app structure.",
    highlights: ["Motion-game prototype", "AI-assisted story flow", "Supabase structure", "Vercel deployment"],
    status: "Live demo",
    ctaLabel: "Open Live Demo",
    link: "https://zenith-dojo.vercel.app"
  },
  {
    id: "pomoboo-macos",
    slug: "pomoboo-macos",
    title: "Pomoboo (Desktop)",
    category: "macOS",
    objective: "A desktop Pomodoro app with menu bar access, adjustable focus cycles, and lightweight interruption control.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "macOS SDK", "Xcode"],
    roles: ["Developer", "Researcher", "Designer"],
    results: "Validated by 10+ users as a clearer desktop-focused iteration of the original Pomoboo concept.",
    highlights: ["Menu bar workflow", "Adjustable cycles", "SwiftData storage", "10+ user validation"],
    status: "Validated prototype"
  },
  {
    id: "pomoboo-ios",
    slug: "pomoboo-ios",
    title: "Pomoboo",
    category: "iOS",
    objective: "A Pomodoro productivity app with a playful tomato mascot and an anti-distraction flow for focus sessions.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "Xcode", "Figma"],
    roles: ["Developer", "Researcher"],
    results: "Validated by 5+ users; the anti-distraction feature was highlighted as useful for maintaining focus.",
    highlights: ["Pomodoro flow", "Anti-distraction mode", "SwiftData storage", "5+ user validation"],
    status: "Validated prototype"
  }
];
