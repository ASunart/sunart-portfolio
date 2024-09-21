import { TECH_STACK } from "../constants/techStack"

export function TechStack(params) {
    return (
        <section className='flex flex-col gap-4 lg:gap-8'>
            <h2 className="font-bold text-xl lg:text-4xl">Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    TECH_STACK.map(({ id, name, icon }) => {
                        return (
                            <div key={id} className="flex items-center gap-4 p-4 rounded-lg bg-white border border-orange border-opacity-25 hover:border-opacity-100 bg-opacity-10 hover:bg-opacity-20 transition-colors">
                                <img src={icon} alt={`${name} Icon`} className="w-10 h-10" />
                                <p className="text-lg truncate">{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}