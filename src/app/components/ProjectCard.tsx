import Image from "next/image";
import { useState } from "react";
import { Title } from "./Title";
import { motion } from "framer-motion";
import { useMobile } from "../utils/useMobile";

interface ProjectCardProps {
  title: string;
  description: string;
  categories: string[];
  image: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  categories,
  image,
  link,
}: ProjectCardProps) {
  const isMobile = useMobile();

  return (
    <motion.a
      initial={isMobile ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
      whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: 2,
        scale: 1.02,
        transition: {
          duration: 0.4,
          ease: [0.23, 1, 0.32, 1],
        },
      }}
      transition={{ duration: 1 }}
      className="group flex flex-col lg:h-full bg-white bg-opacity-5 rounded-xl border border-orange cursor-pointer border-opacity-25 hover:border-opacity-100 backdrop-blur-[32px]"
      style={{ transformStyle: "preserve-3d" }}
      target="_blank"
      href={link}
    >
      <figure className="relative overflow-hidden">
        <span className="absolute top-0 gap-1 p-4 left-0 z-10 w-full flex">
          {categories.map((category, index) => {
            return (
              <motion.p
                key={index}
                className="bg-black bg-opacity-25 p-1 rounded-md font-light text-xs backdrop-blur-xl w-max hover:bg-opacity-100 hover:text-white transition-colors"
              >
                {category}
              </motion.p>
            );
          })}
        </span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            alt="Project"
            src={image}
            width={1400}
            height={944}
            loading="lazy"
            className="w-full md:h-48 lg:h-60 object-cover object-top rounded-t-xl lg:grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </figure>
      <section className="p-4">
        <Title>{title}</Title>
        <p className="text-xs md:text-sm font-light text-balance">
          {description}
        </p>
      </section>
    </motion.a>
  );
}
