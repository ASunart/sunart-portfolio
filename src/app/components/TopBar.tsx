"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NAV_ITEMS } from "../constants/nav";

export function TopBar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // shortcut: no focus trap while the mobile menu is open; add one if the menu grows past four links.

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/95">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" aria-label="Alejandro Solarte — home" onClick={close} className="relative z-50 inline-flex">
          <Image
            alt=""
            src="/svg/logo.svg"
            width={110}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 ml-auto flex h-11 w-11 items-center justify-center lg:ml-0 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <motion.svg
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M19 5L5 19M5 5l14 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M4 7h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </motion.svg>
        </button>

        <nav aria-label="Primary">
          <ul
            id="primary-nav"
            className={
              open
                ? "fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-ink/95 backdrop-blur-xl lg:static lg:z-auto lg:flex-row lg:gap-8 lg:bg-transparent lg:backdrop-blur-none"
                : "hidden lg:flex lg:items-center lg:gap-8"
            }
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="w-full text-center lg:w-auto">
                <Link
                  href={item.href}
                  onClick={close}
                  className="nav-link flex min-h-[44px] items-center justify-center font-mono text-sm text-paper/70 transition-colors hover:text-signal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
