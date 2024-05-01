import Image from "next/image";
import { POSITIONS } from "../constants/positions";
import { SOCIAL_MEDIA } from "../constants/socialMedia";
import { PositionBadge } from "./PositionBadge";
import { SocialBadge } from "./SocialBadge";

export default function Hero() {
    return (
        <section className="hero flex flex-col items-center overflow-hidden relative gap-4 lg:items-center lg:flex-row-reverse lg:justify-between lg:mt-14 lg:overflow-visible">
            <Image
                src="/points-orange.svg"
                alt="Points Vector"
                width={232}
                height={68}
                loading="eager"
                className="relative -top-2 -left-1/3 lg:-left-12 lg:-top-14 lg:absolute" />
                <figure className="image grid place-items-center relative bg-orange rounded-full w-52 h-52 lg:w-[384px] lg:h-[384px] overflow-clip hover:scale-105 transition-transform">
                    <Image
                        src="/sunart_photo.webp"
                        alt="Alejandro Solarte Image"
                        width={384}
                        height={551}
                        loading="eager"
                        className="relative rounded-full w-44 lg:w-80 lg:grayscale hover:grayscale-0 transition-all"
                    />
                </figure>
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
                loading="eager"
                className="relative -bottom-0 -right-[34%] lg:-right-16 lg:-bottom-28 -z-10 lg:absolute overflow-hidden" />
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