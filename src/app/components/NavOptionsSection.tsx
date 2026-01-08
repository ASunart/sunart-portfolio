/* eslint-disable @next/next/no-img-element */
import { SOCIAL_MEDIA, SocialMedia } from "../constants/socialMedia";
import { motion } from "framer-motion";

interface NavOptionsSectionProps {
  state: boolean;
  action: () => void;
}

export function NavOptionsSection({ state, action }: NavOptionsSectionProps) {
  const menuState = state
    ? "absolute top-0 left-0 bg-black h-screen w-screen p-4 flex flex-col items-end gap-5 lg:flex w-1/3 font-light text-base"
    : "hidden lg:flex lg:justify-between lg:w-1/3";
  return (
    <motion.ul
      className={menuState}
      layout
      animate={{ opacity: state ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.svg
        layout
        animate={{ rotate: state ? 0 : 45 }}
        transition={{ duration: 0.3 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="#ffffff"
        fill="none"
        className="lg:hidden"
        onClick={action}
      >
        <path
          d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      {SOCIAL_MEDIA.map(({ id, link, label, icon }: SocialMedia) => {
        return (
          <li key={id} className="cursor-pointer w-full hover:text-orange">
            <a
              href={link}
              className="flex items-center gap-1 p-3 border-opacity-70 lg:border-none"
              target="_blank"
            >
              <img src={icon} alt={label} width={24} height={24} />
              {label}
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
}
