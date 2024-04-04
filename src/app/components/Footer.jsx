"use client";
import { ArrowUp01Icon } from "hugeicons-react";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <footer className="relative flex justify-around items-center w-full border-t border-white border-opacity-30 p-4">
            <p className="font-light text-sm hidden lg:block lg:text-base">{currentYear}</p>
            <h2 className="font-light text-sm lg:text-base">This portfolio is under <span className="text-orange">development</span></h2>
            <p className="font-light cursor-pointer text-sm hidden lg:flex lg:text-base hover:text-orange"
                onClick={backToTop}>Back to top <ArrowUp01Icon /></p>
        </footer>
    )
}