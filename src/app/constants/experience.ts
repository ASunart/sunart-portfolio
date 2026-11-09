export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "bosanet",
    company: "Bosanet",
    role: "Front-end Developer & Designer",
    period: "2025 — present",
    summary:
      "Marketplace and seller portal: performance and UX on Xpress, design system and dashboards on the Portal.",
  },
  {
    id: "colombiatodo",
    company: "Colombiatodo CI SAS",
    role: "Web Developer & Designer",
    period: "2024 — present",
    summary: "Ecommerce platform end to end: storefront, CMS, checkout, payments and shipping.",
  },
  {
    id: "globant",
    company: "Globant — Sonesta International Hotels",
    role: "Web UI Developer",
    period: "Jan – Jul 2025",
    summary: "Public web team: consent flow, accessibility and a shared typed component.",
  },
  {
    id: "innlab",
    company: "InnLab Icesi",
    role: "Lead Developer",
    period: "Jan – Dec 2024",
    summary: "Led the website rebuild and a small team, running Scrum with the client.",
  },
  {
    id: "icesi",
    company: "Universidad Icesi",
    role: "Coding Mentor",
    period: "Jan 2023 – Nov 2024",
    summary: "100+ hours tutoring 20+ peers in programming and web fundamentals.",
  },
  {
    id: "enerbit",
    company: "enerBit",
    role: "UX/UI Designer",
    period: "Aug – Dec 2023",
    summary: "Redesigned the mobile app for users with low digital literacy.",
  },
  {
    id: "bancow",
    company: "Banco W",
    role: "Front-end Developer",
    period: "Jul – Nov 2023",
    summary: "Rebuilt five sections of the public site in HTML, CSS and JavaScript.",
  },
];
