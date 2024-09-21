export function ExperienceCard({ company, position, description }) {
    return (
        <article className="flex flex-col gap-[6px] bg-gray bg-opacity-5 rounded-xl p-4 border border-orange hover:border-opacity-100 transition-colors border-opacity-25 backdrop-blur-[32px]">
            <span>
                <h3 className="font-bold text-sm lg:text-xl">{position}</h3>
                <h4 className="font-extralight text-[13px] lg:text-base">{company}</h4>
            </span>
            <p className="font-light text-sm lg:text-lg">{description}</p>
        </article>
    )
}