import { Menu01Icon } from "hugeicons-react";
import Image from "next/image";

export function TopBar() {
    return (
        <header className="flex justify-between p-4 w-full sticky top-0 bg-white bg-opacity-[2%] backdrop-blur-[40px] border-b border-b-white border-opacity-10">
            <Image
                alt="Sunart Logo"
                src="/logo.svg"
                width={90}
                height={23} />
            <Menu01Icon />
        </header>
    )
}