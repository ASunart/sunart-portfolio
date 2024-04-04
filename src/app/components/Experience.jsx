import { EXPERIENCE } from "../constants/experience"

export function Experience() {
    return (
        <section className="flex flex-col gap-2">
            <h2 className="font-bold text-xl lg:text-4xl">Experience</h2>
            <div className="flex flex-col gap-4">
                {
                    EXPERIENCE.map(({id, company, position, description}) => {
                        return <ExperienceCard key={id} company={company} position={position} description={description} />
                    })
                }
            </div>
        </section>
    )
}

function ExperienceCard({ company, position, description }) {
    return (
        <article className="flex flex-col gap-[6px] bg-gray bg-opacity-5 rounded-xl p-4 border border-orange border-opacity-25 backdrop-blur-[32px]">
            <span>
                <h3 className="font-bold text-sm">{position}</h3>
                <h4 className="font-extralight text-[13px]">{company}</h4>
            </span>
            <p className="font-light text-sm text-balance">{description}</p>
        </article>
    )
}