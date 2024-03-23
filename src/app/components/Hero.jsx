import Image from "next/image";
import { POSITIONS } from "../constants/positions";
import { SOCIAL_MEDIA } from "../constants/socialMedia";
import { PositionBadge } from "./PositionBadge";
import { SocialBadge } from "./SocialBadge";

export function Hero() {
    return (
        <section className="flex flex-col items-center relative gap-6 px-4 mt-12 h-[90dvh] lg:items-start lg:px-16 lg:flex-row-reverse lg:justify-between">
            <Image
                src="/points-orange.svg"
                alt="Points Vector"
                width={232}
                height={68}
                className="absolute -top-20 -left-1/4 lg:top-0 lg:left-0" />
            <Image
                src="/image_card.webp"
                alt="Alejandro Solarte Image"
                width={206}
                height={206}
                className="image rounded-full lg:w-[470px]"
            />
            <div className="flex flex-col lg:gap-6 lg:h-4/5 lg:justify-center">
                <div className="flex flex-col gap-4 items-center lg:items-start lg:gap-4">
                    <h1 className="font-extrabold text-[46px] text-center text-balance leading-none lg:text-[64px] lg:text-left">Hi there, <br className="hidden lg:block" /> I&apos;m Alejandro <span className="text-orange">Sunart</span></h1>
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
                className="absolute bottom-0 -right-1/4 lg:right-0 lg:bottom-12 overflow-clip" />
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