"use client"
import Image from "next/image";
import { useState } from "react";
import { NavOptionsSection } from "./NavOptionsSection";


export function TopBar() {
    const [menu, setMenu] = useState<boolean>(false)

    const handleMenu = () => {
        setMenu(prevState => !prevState)
    }

    return (
        <header className="top-bar flex z-10 justify-between items-center p-4 lg:px-16 lg:py-5 w-full sticky top-0 bg-white bg-opacity-[2%] backdrop-blur-[40px] border-b border-b-white border-opacity-10">
            <Image
                alt="Sunart Logo"
                src="/svg/logo.svg"
                width={90}
                height={23}
                className="lg:w-36 cursor-pointer hover:scale-105 transition-transform" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" className="lg:hidden" onClick={handleMenu}>
                <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <NavOptionsSection state={menu} action={handleMenu} />
        </header>
    )
}

