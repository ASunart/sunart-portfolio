"use client";
import { Project, PROJECTS } from "../constants/projects";
import { ProjectCard } from "./ProjectCard";
import { motion } from "motion/react";
import { useMobile } from "../utils/useMobile";

export default function Projects() {
  const isMobile = useMobile();
  return (
    <section className="flex flex-col relative gap-4 lg:gap-8">
      <h2 className="font-bold text-xl lg:text-4xl">Projects</h2>
      <motion.div
        initial={!isMobile ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 md:gap-8 md:grid md:grid-cols-2"
      >
        {PROJECTS.map(
          ({
            id,
            title,
            description,
            categories,
            image,
            link,
          }: Project) => {
            return (
              <ProjectCard
                key={id}
                title={title}
                description={description}
                categories={categories}
                image={image}
                link={link}
              />
            );
          }
        )}
      </motion.div>
    </section>
  );
}
