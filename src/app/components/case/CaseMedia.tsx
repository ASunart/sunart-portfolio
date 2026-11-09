"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function CaseMedia({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <figure ref={ref} className="overflow-hidden rounded-lg border border-paper/10">
      <div className="relative aspect-[16/9]">
        <motion.div className="absolute -inset-y-6 inset-x-0" style={reduced ? undefined : { y }}>
          <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover object-top" />
        </motion.div>
      </div>
      {caption ? (
        <figcaption className="border-t border-paper/10 px-3 py-2 font-mono text-xs text-paper/50">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
