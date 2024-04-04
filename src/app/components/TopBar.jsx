import { Menu01Icon } from "hugeicons-react";
import Image from "next/image";
import { NAV_OPTIONS } from "../constants/navOptions";

export function TopBar() {
    return (
        <header className="top-bar flex z-10 justify-between items-center p-4 lg:px-16 lg:py-5 w-full sticky top-0 bg-white bg-opacity-[2%] backdrop-blur-[40px] border-b border-b-white border-opacity-10">
            <Image
                alt="Sunart Logo"
                src="/logo.svg"
                width={90}
                height={23}
                className="lg:w-36 cursor-pointer hover:scale-105 transition-transform" />
            <Menu01Icon className="lg:hidden" />
            <NavOptionsSection />
        </header>
    )
}

function NavOptionsSection() {
    return (
        <ul className="hidden lg:flex justify-between w-1/3 font-light text-base ">
            {
                NAV_OPTIONS.map(({ id, label, section }) => {
                    return <li
                        key={id}
                        className="cursor-pointer hover:text-orange">
                            <a href={section}>{label}</a>
                    </li>
                })
            }
        </ul>
    )
}