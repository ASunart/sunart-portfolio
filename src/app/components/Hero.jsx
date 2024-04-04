import Image from "next/image";
import { POSITIONS } from "../constants/positions";
import { SOCIAL_MEDIA } from "../constants/socialMedia";
import { PositionBadge } from "./PositionBadge";
import { SocialBadge } from "./SocialBadge";

export function Hero() {
    return (
        <section className="flex flex-col items-center overflow-hidden relative gap-4 lg:items-start lg:flex-row-reverse lg:justify-between">
            <Image
                src="/points-orange.svg"
                alt="Points Vector"
                width={232}
                height={68}
                className="relative -top-2 -left-1/3 lg:-left-12" />
            <Image
                src="/image_card.webp"
                alt="Alejandro Solarte Image"
                width={470}
                height={472}
                className="image rounded-full w-52 lg:w-[470px]"
            />
            <div className="flex flex-col gap-4 lg:gap-6 lg:h-4/5 lg:justify-center">
                <div className="flex flex-col gap-4 items-center lg:items-start lg:gap-4">
                    <h1 className="font-extrabold text-[44px] text-center text-balance leading-none lg:text-[64px] lg:text-left">Hi there, <br className="hidden lg:block" /> I&apos;m Alejandro <span className="text-orange text-change"></span></h1>
                    <PositionSection />
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start">
                    <p className="text-center mx-auto text-balance lg:text-left lg:mx-0 lg:text-xl"><span className="font-bold">From user insights to digital delight.</span> <br />
                        Unraveling needs, crafting intuitive experiences.</p>
                    <SocialSection />
                </div>

            </div>

            <Image
                src="/points-blue.svg"
                alt="Points Vector"
                width={232}
                height={68}
                className="relative -bottom-0 -right-[34%] lg:-right-16 lg:bottom-12 overflow-hidden" />
        </section>
    )
}

function PositionSection() {
    return (
        <section className="flex gap-4">
            {
                POSITIONS.map(({ id, position }) => {
                    return <PositionBadge key={id} position={position} />
                })
            }
        </section>
    )
}

function SocialSection() {
    return (
        <section className="flex gap-2">
            {
                SOCIAL_MEDIA.map(({ id, label, icon, link }) => {
                    return <SocialBadge key={id} label={label} icon={icon} link={link} />
                })
            }
        </section>
    )
}