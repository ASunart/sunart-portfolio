export interface Project {
    id: string;
    title: string;
    description: string;
    categories: string[];
    image: string;
    grid_area: string;
    link: string;
}

export const PROJECTS: Project[] = [
    {
        id: crypto.randomUUID(),
        title: "Sonesta International Hotels",
        description: "Contributed to Sonesta’s web platform by optimizing cookie consent with Gatsby SSR (87% faster), resolving critical accessibility issues using AI-assisted debugging, and building reusable, type-safe UI components to speed up development.",
        categories: ["Front-end Development", "UX Design"],
        image: "/sonesta-preview.webp",
        grid_area: "project-1",
        link: "https://www.sonesta.com/"
    },
    {
        id: crypto.randomUUID(),
        title: "Colombiatodo CI SAS",
        description: "Ecommerce platform from scratch, using technologies such as React, Strapi, Next.js, Supabase, Firebase, MercadoPago, Jira, to generate a complete solution, and friendly for both the end user and the customer, and improving the conversion of sales of the company.",
        categories: ["Front-end Development", "Back-end Development", "Front-end Development"],
        image: "/ctdo-preview.webp",
        grid_area: "project-2",
        link: "https://www.colombiatodo.com/"
    },
    {
        id: crypto.randomUUID(),
        title: "InnLab",
        description: "Developed and updated the Innlab website to reflect its internal restructuring, supporting both technical implementation and research-driven improvements aligned with the center’s innovation goals.",
        categories: ["UX/UI Design", "UX Research", "Front-end Development"],
        image: "/innlab-preview.webp",
        grid_area: "project-3",
        link: "https://www.innlab.org/"
    },
]