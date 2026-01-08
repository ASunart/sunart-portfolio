"use client";

import Image from "next/image";
import { Position, POSITIONS } from "../constants/positions";
import { SOCIAL_MEDIA } from "../constants/socialMedia";
import { PositionBadge } from "./PositionBadge";
import { SocialBadge } from "./SocialBadge";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const NAMES = ["Solarte", "Sunart", "Developer", "Designer"];

function TypewriterName() {
  const [displayedText, setDisplayedText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentName = NAMES[nameIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentName.length) {
          setDisplayedText(currentName.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentName.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setNameIndex((prev) => (prev + 1) % NAMES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, nameIndex]);

  return (
    <span className="text-orange">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero flex flex-col items-center overflow-hidden relative gap-4 lg:items-center lg:flex-row-reverse lg:justify-between lg:mt-14 lg:overflow-visible">
      <Image
        src="/svg/points-orange.svg"
        alt="Points Vector"
        width={232}
        height={68}
        loading="eager"
        className="relative -top-2 -left-1/3 lg:-left-12 lg:-top-14 lg:absolute"
      />
      <figure className="image grid place-items-center relative bg-orange rounded-full w-52 h-52 lg:w-[384px] lg:h-[384px] overflow-clip hover:scale-105 transition-transform">
        <Image
          src="/sunart_pic.webp"
          alt="Alejandro Solarte Image"
          width={1200}
          height={1200}
          loading="eager"
          className="relative w-full top-4"
        />
      </figure>
      <div className="flex flex-col gap-4 lg:gap-6 lg:h-4/5 lg:justify-center">
        <div className="flex flex-col gap-4 items-center lg:items-start lg:gap-4">
          <h1 className="font-extrabold text-3xl text-center text-balance leading-none md:text-4xl lg:text-6xl lg:text-left">
            Hi there, <br/> I&apos;m Alejandro{" "} <br className="xl:hidden"/>
            <TypewriterName />
          </h1>
          <PositionSection />
        </div>

        <div className="flex flex-col gap-4 items-center lg:items-start">
          <p className="text-center mx-auto text-sm md:text-base text-balance lg:text-left lg:mx-0 lg:text-xl">
            <span className="font-bold">
              From user insights to digital delight.
            </span>{" "}
            <br />
            Unraveling needs, crafting intuitive experiences.
          </p>
          <SocialSection />
        </div>
      </div>

      <Image
        src="/svg/points-blue.svg"
        alt="Points Vector"
        width={232}
        height={68}
        loading="eager"
        className="relative -bottom-0 -right-[34%] lg:-right-16 lg:-bottom-28 -z-10 lg:absolute overflow-hidden"
      />
    </section>
  );
}

function PositionSection() {
  return (
    <section className="flex gap-2 md:gap-4">
      {POSITIONS.map(({ id, position }: Position) => {
        return <PositionBadge key={id} position={position} />;
      })}
    </section>
  );
}

function SocialSection() {
  return (
    <section className="flex gap-2">
      {SOCIAL_MEDIA.map(({ id, label, icon, link }) => {
        return <SocialBadge key={id} label={label} icon={icon} link={link} />;
      })}
    </section>
  );
}
