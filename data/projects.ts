export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "iOS" | "macOS" | "Web" | "Other";
  objective: string;
  roles: string[];
  techStack: string[];
  results: string;
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "pomoboo-ios",
    slug: "pomoboo-ios",
    title: "Pomoboo",
    category: "iOS",
    objective: "Productivity app using Pomodoro technique with a playful tomato mascot to balance work and breaks.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "Xcode", "Figma"],
    roles: ["Developer", "Researcher"],
    results: "Validated by 5+ users for clear flow; anti-distraction feature highlighted as highly effective for focus."
  },
  {
    id: "huemen-id",
    slug: "huemen-id",
    title: "HueMen",
    category: "iOS",
    objective: "Personal wardrobe assistant using camera-based color detection and virtual closet for styling recommendations.",
    techStack: ["Swift", "SwiftUI", "CoreML", "AVFoundation", "Xcode"],
    roles: ["Developer", "Researcher"],
    results: "Released on TestFlight with 33 installs and 117 sessions; used user feedback to iterate on photo-based color picking."
  },
  {
    id: "siraj-app",
    slug: "siraj-app",
    title: "S.I.R.A.J",
    category: "iOS",
    objective: "An interactive posture guidance app designed to help Pencak Silat beginners refine movements through visual feedback",
    techStack: ["Swift", "SwiftUI", "Vision", "CoreML", "Xcode"],
    roles: ["Developer", "Researcher"],
    results: "Published on TestFlight; 5+ users reported feeling helped by the clear posture guidance provided."
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
    id: "dreamrank",
    slug: "dreamrank",
    title: "DreamRank",
    category: "iOS",
    objective: "Gamified sleep-habit app using daily quests, leaderboards, and competition to build consistent rest routines.",
    techStack: ["Swift", "SwiftUI", "HealthKit", "CloudKit", "Xcode", "Figma"],
    roles: ["Developer", "Researcher", "Designer"],
    results: "Successfully published on App Store; HealthKit and CloudKit integration validated with 30+ users for gamified habit building.",
    image: "/PortoDreamRank.jpg"
  }
];
