export interface CapabilityRow {
  label: string;
  items: string[];
}

export const CAPABILITIES: CapabilityRow[] = [
  {
    label: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Gatsby", "Tailwind CSS"],
  },
  {
    label: "Design systems & UX",
    items: ["Figma", "Storybook", "Design tokens", "Accessibility", "UX research", "Prototyping"],
  },
  {
    label: "Platform",
    items: ["Strapi", "Supabase", "Firebase", "Fastify", "MercadoPago", "Git"],
  },
];
