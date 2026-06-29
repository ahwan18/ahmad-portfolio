export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "iOS" | "macOS" | "Android" | "Web" | "Full-stack" | "Other";
  objective: string;
  roles: string[];
  techStack: string[];
  results: string;
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "dreamrank",
    slug: "dreamrank",
    title: "DreamRank",
    category: "iOS",
    objective: "Gamified sleep-habit app using daily quests, leaderboards, and competition to build consistent rest routines.",
    techStack: ["Swift", "SwiftUI", "HealthKit", "CloudKit", "Xcode", "Figma"],
    roles: ["Developer", "Researcher", "Designer"],
    results: "Successfully published on App Store; HealthKit and CloudKit integration validated with 30+ users for gamified habit building.",
    image: "/PortoDreamRank.jpg"
  },
  {
    id: "huemen-id",
    slug: "huemen-id",
    title: "HueMen",
    category: "iOS",
    objective: "Personal wardrobe assistant using camera-based color detection and virtual closet for styling recommendations.",
    techStack: ["Swift", "SwiftUI", "CoreML", "AVFoundation", "Xcode"],
    roles: ["Developer", "Researcher"],
    results: "Released on TestFlight with 33 installs and 117 sessions; used user feedback to iterate on photo-based color picking.",
    link: "https://github.com/ahwan18/C2-HueMen"
  },
  {
    id: "siraj-app",
    slug: "siraj-app",
    title: "S.I.R.A.J",
    category: "iOS",
    objective: "An interactive posture guidance app designed to help Pencak Silat beginners refine movements through visual feedback.",
    techStack: ["Swift", "SwiftUI", "Vision", "CoreML", "Xcode"],
    roles: ["Developer", "Researcher"],
    results: "Published on TestFlight; 5+ users reported feeling helped by the clear posture guidance provided.",
    link: "https://github.com/ahwan18/CameraPosture"
  },
  {
    id: "interntrack",
    slug: "interntrack",
    title: "InternTrack",
    category: "Android",
    objective: "Android app that helps students and early-career developers track internship applications, statuses, deadlines, and progress analytics in one place.",
    techStack: ["Kotlin", "Jetpack Compose", "Room Database", "StateFlow", "MVVM"],
    roles: ["Android Developer", "Product Designer"],
    results: "Built a complete local-first internship tracking flow with CRUD, status filtering, dashboard metrics, and deadline awareness.",
    link: "https://github.com/ahwan18/InternTrack"
  },
  {
    id: "safa-ecommerce",
    slug: "safa-ecommerce",
    title: "Safa E-Commerce",
    category: "Full-stack",
    objective: "Custom printing e-commerce platform that centralizes storefront browsing, design upload, checkout, order tracking, and admin CMS workflows.",
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    roles: ["Full-stack Developer", "UI Developer"],
    results: "Delivered a complete customer and admin prototype covering product catalog, checkout, orders, content settings, and analytics modules.",
    link: "https://github.com/ahwan18/safa_ecommerce"
  },
  {
    id: "toko-mainan-jalan-dongi",
    slug: "toko-mainan-jalan-dongi",
    title: "Toko Mainan Jalan Dongi",
    category: "Full-stack",
    objective: "Toy-store e-commerce app with separate customer shopping flow and admin dashboard for products, categories, orders, and sales analytics.",
    techStack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
    roles: ["Full-stack Developer", "Frontend Developer"],
    results: "Built product browsing, cart persistence, checkout, protected admin routes, CRUD management, and Supabase Row Level Security setup.",
    link: "https://e-commerce-project-kappa-seven.vercel.app"
  },
  {
    id: "zenith-motionquest",
    slug: "zenith-motionquest",
    title: "Zenith MotionQuest",
    category: "Web",
    objective: "Web-based AI motion game that combines real-time body tracking, story-driven interaction, and a high-energy training experience.",
    techStack: ["Next.js", "TypeScript", "Supabase", "AI", "Vercel"],
    roles: ["Web Developer", "Interaction Developer"],
    results: "Created a deployed motion-game prototype with AI-driven storytelling, body-tracking interaction, and Supabase-backed app structure.",
    link: "https://zenith-dojo.vercel.app"
  },
  {
    id: "pomoboo-macos",
    slug: "pomoboo-macos",
    title: "Pomoboo (Desktop)",
    category: "macOS",
    objective: "Advanced iteration of the iOS version with menu bar integration and adjustable cycles for seamless desktop productivity.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "macOS SDK", "Xcode"],
    roles: ["Developer", "Researcher", "Designer"],
    results: "Validated by 10+ users as a more focused iteration with successful implementation of anti-distraction features for desktop."
  },
  {
    id: "pomoboo-ios",
    slug: "pomoboo-ios",
    title: "Pomoboo",
    category: "iOS",
    objective: "Productivity app using Pomodoro technique with a playful tomato mascot to balance work and breaks.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "Xcode", "Figma"],
    roles: ["Developer", "Researcher"],
    results: "Validated by 5+ users for clear flow; anti-distraction feature highlighted as highly effective for focus."
  }
];
