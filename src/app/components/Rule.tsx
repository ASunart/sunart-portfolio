"use client";

import { motion } from "motion/react";

export function Rule() {
  return (
    <motion.span
      aria-hidden="true"
      className="mt-4 block h-px w-16 origin-left bg-gradient-to-r from-signal to-transparent"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
