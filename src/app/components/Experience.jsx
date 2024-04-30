import Image from "next/image"
import { EXPERIENCE } from "../constants/experience"
import { Title } from "./Title"

export function Experience() {
    return (
        <section className="flex flex-col relative gap-2 lg:gap-4">
            <Image
            alt="Orange ellipse"
            src={"/orange-ellipse.svg"}
            width={216}
            height={216}
            className="w-40 h-40 absolute -right-12 lg:w-56 lg:h-56 lg:-right-32"
            />
            <Title>Experience</Title>
            <div className="flex flex-col gap-4">
                {
                    EXPERIENCE.map(({id, company, position, description}) => {
                        return <ExperienceCard key={id} company={company} position={position} description={description} />
                    })
                }
            </div>
            <Image
            alt="Blue ellipse"
            src={"/blue-ellipse.svg"}
            width={216}
            height={216}
            className="w-40 h-40 absolute -left-20 -bottom-8 p-0 -z-10 lg:w-56 lg:h-56 lg:-left-32"
            />
        </section>
    )
}

function ExperienceCard({ company, position, description }) {
    return (
        <article className="flex flex-col gap-[6px] bg-gray bg-opacity-5 rounded-xl p-4 border border-orange border-opacity-25 backdrop-blur-[32px]">
            <span>
                <h3 className="font-bold text-sm lg:text-xl">{position}</h3>
                <h4 className="font-extralight text-[13px] lg:text-base">{company}</h4>
            </span>
            <p className="font-light text-sm lg:text-lg">{description}</p>
        </article>
    )
}