export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  image: string;
  link: string;
}

export const PROJECTS: Project[] = [
  {
    id: crypto.randomUUID(),
    title: "Sonesta International Hotels",
    description:
      "Contributed to Sonesta’s web platform by optimizing cookie consent with Gatsby SSR (87% faster), resolving critical accessibility issues using AI-assisted debugging, and building reusable, type-safe UI components to speed up development.",
    categories: ["Front-end Development", "UX Design"],
    image: "/sonesta-preview.webp",
    link: "https://www.sonesta.com/",
  },
  {
    id: crypto.randomUUID(),
    title: "Colombiatodo CI SAS",
    description:
      "Ecommerce platform from scratch, using technologies such as React, Strapi, Next.js, Supabase, Firebase, MercadoPago, Jira, to generate a complete solution, and friendly for both the end user and the customer, and improving the conversion of sales of the company.",
    categories: [
      "Front-end Development",
      "Back-end Development",
      "UX/UI Design",
    ],
    image: "/ctdo-preview.webp",
    link: "https://www.colombiatodo.com/",
  },
  {
    id: crypto.randomUUID(),
    title: "Bosanet",
    description:
      "Transform ideas into scalable, user-centric solutions by aligning business objectives with development best practices across both internal tools and marketplace platforms..",
    categories: ["Front-end Development", "UX/UI Design"],
    image: "/bosanet-preview.webp",
    link: "https://www.bosanetxpress.com/",
  },
  {
    id: crypto.randomUUID(),
    title: "InnLab",
    description:
      "Developed and updated the Innlab website to reflect its internal restructuring, supporting both technical implementation and research-driven improvements aligned with the center’s innovation goals.",
    categories: ["UX/UI Design", "UX Research", "Front-end Development"],
    image: "/innlab-preview.webp",
    link: "https://www.innlab.org/",
  },
];
