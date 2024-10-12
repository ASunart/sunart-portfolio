export interface ExperienceData {
    id: string,
    position: string,
    company: string,
    description: JSX.Element | string,
}

export const EXPERIENCE: ExperienceData[] = [
    {
        id: crypto.randomUUID(),
        position: 'Web Developer & Designer',
        company: 'Colombiatodo CI SAS | 2024 - Present',
        description: <>Development and design of an ecommerce platform from scratch, using technologies such as React, Strapi, Next.js, Supabase, firebase, MercadoPago, to generate a complete solution, and friendly for both the end user and&nbsp;the customer.</>
    },
    {
        id: crypto.randomUUID(),
        position: 'Monitor - Programming | Web Programming | Design with algorithms',
        company: 'Universidad Icesi | 2023 - Present',
        description: <>I provide academic and personal support to colleagues in programming topics such as: programming fundamentals for design, design with algorithms, application ecosystems and web programming. Strengthening my development of tutoring skills, results-oriented communication, listening skills, attention to detail and web&nbsp;technologies.</>
    },
    {
        id: crypto.randomUUID(),
        position: 'UX/UI Designer',
        company: 'enerBit | August 2023 - December 2023',
        description: <>We developed a solution to improve the user experience, focused on people with low digital literacy, for enerBit&apos;s mobile application, improving usability&nbsp;by&nbsp;25%.</>
    },
    {
        id: crypto.randomUUID(),
        position: 'Front-end Developer',
        company: 'Banco W | July 2023 - November 2023',
        description: <>We implemented the proposed design to redesign Banco W&apos;s website, using web technologies such as html, css and javascript, improving the user experience and page&nbsp;performance.</>
    },
]