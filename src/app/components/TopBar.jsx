"use client"
import { Cancel01Icon, Menu01Icon } from "hugeicons-react";
import Image from "next/image";
import { NAV_OPTIONS } from "../constants/navOptions";
import { useState } from "react";
import { SOCIAL_MEDIA } from "../constants/socialMedia";

export function TopBar() {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(prevState => !prevState)
    }
    return (
        <header className="top-bar flex z-10 justify-between items-center p-4 lg:px-16 lg:py-5 w-full sticky top-0 bg-white bg-opacity-[2%] backdrop-blur-[40px] border-b border-b-white border-opacity-10">
            <Image
                alt="Sunart Logo"
                src="/logo.svg"
                width={90}
                height={23}
                className="lg:w-36 cursor-pointer hover:scale-105 transition-transform" />
            <Menu01Icon
                className="lg:hidden"
                onClick={handleMenu}
            />
            <NavOptionsSection state={menu} action={handleMenu} />
        </header>
    )
}

function NavOptionsSection({ state, action }) {
    const menuState = state ? "absolute top-0 left-0 bg-black h-screen w-screen p-4 flex flex-col gap-5 lg:flex w-1/3 font-light text-base" : "hidden lg:flex lg:justify-between lg:w-1/3"
    return (
        <ul className={menuState}>
            <Cancel01Icon
                onClick={action}
                className="lg:hidden"
            />
            {
                SOCIAL_MEDIA.map(({ id, link, label, icon }) => {
                    return <li
                        key={id}
                        className="cursor-pointer hover:text-orange">
                        <a
                            href={link}
                            className="flex items-center gap-1 p-3 border-b border-b-orange border-opacity-70 lg:border-none"
                            target="_blank">
                            {icon}{label}
                        </a>
                    </li>
                })
            }
        </ul>
    )
}