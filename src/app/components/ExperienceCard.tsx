"use client"

import { motion } from "motion/react"

interface ExperienceCardProps {
    company: string;
    position: string;
    description: JSX.Element | string;
}

export function ExperienceCard({ company, position, description } : ExperienceCardProps) {
    return (
        <motion.article 
            className="flex flex-col gap-[6px] bg-gray bg-opacity-5 rounded-xl p-4 border border-orange border-opacity-25 backdrop-blur-[32px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <span>
                <h3 className="font-bold text-sm lg:text-xl">{position}</h3>
                <h4 className="font-extralight text-[13px] lg:text-base">{company}</h4>
            </span>
            <p className="font-light text-sm lg:text-lg">{description}</p>
        </motion.article>
    )
}