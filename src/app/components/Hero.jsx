import Image from "next/image";
import { POSITIONS } from "../constants/positions";
import { SOCIAL_MEDIA } from "../constants/socialMedia";
import { PositionBadge } from "./PositionBadge";
import { SocialBadge } from "./SocialBadge";

export function Hero() {
    return (
        <section className="flex flex-col items-center relative gap-6 px-4 mt-36">
            <Image
                src="/image_card.webp"
                alt="Alejandro Solarte Image"
                width={206}
                height={206}
                className="image rounded-full"
            />
            <div className="flex flex-col gap-[10px] items-center">
                <h1 className="font-extrabold text-5xl text-center">Hi there, I&apos;m Alejandro <span className="text-orange">Sunart</span></h1>
                <PositionSection />
            </div>

            <div className="flex flex-col gap-3 items-center">
                <p className="text-center mx-auto"><span className="font-bold">From user insights to digital delight.</span> <br />
                    Unraveling needs, crafting intuitive experiences.</p>
                <SocialSection />
            </div>


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
        <section className="flex gap-4">
            {
                SOCIAL_MEDIA.map(({ id, label, icon, link }) => {
                    return <SocialBadge key={id} label={label} icon={icon} link={link} />
                })
            }
        </section>
    )
}