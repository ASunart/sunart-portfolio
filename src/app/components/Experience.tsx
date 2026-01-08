"use client";

import { EXPERIENCE } from "../constants/experience";
import { Title } from "./Title";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceData } from "../constants/experience";
import { motion } from "motion/react";


export default function Experience() {
  return (
    <section className="flex flex-col relative gap-2 lg:gap-4">
      <motion.img
        alt="Orange ellipse"
        src={"/svg/orange-ellipse.svg"}
        width={216}
        height={216}
        className="w-40 h-40 absolute -right-12 lg:w-56 lg:h-56 lg:-right-32"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <Title>Experience</Title>
      <div className="flex flex-col gap-4">
        {EXPERIENCE.map(
          ({ id, company, position, description }: ExperienceData) => {
            return (
              <ExperienceCard
                key={id}
                company={company}
                position={position}
                description={description}
              />
            );
          }
        )}
      </div>
      <motion.img
        alt="Blue ellipse"
        src={"/svg/blue-ellipse.svg"}
        width={216}
        height={216}
        className="w-40 h-40 absolute -left-20 -bottom-8 p-0 -z-10 lg:w-56 lg:h-56 lg:-left-32"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    </section>
  );
}
