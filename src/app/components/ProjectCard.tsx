import Image from "next/image"
import { useState } from "react"
import { Title } from "./Title"

interface ProjectCardProps {
    title: string,
    description: string,
    categories: string[],
    image: string,
    grid_area: string,
    link: string
}

export function ProjectCard({title, description, categories, image, grid_area, link} : ProjectCardProps) {
    const [cardHover, setCardHover] = useState<boolean>(false)

    const handleCardHover = () => {
        setCardHover(prevState =>!prevState)
    }

    return (
        <a className={`flex flex-col lg:h-full bg-white bg-opacity-5 rounded-xl border border-orange hover:scale-105 transition-all cursor-pointer border-opacity-25 hover:border-opacity-100 backdrop-blur-[32px] grid-area ${grid_area}`}
        target="_blank"
        href={link}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardHover}
        >
            <figure className="relative">
                <span className="absolute top-0 gap-1 p-4 left-0 z-10 w-full flex">
                    {
                        categories.map((category, index) => {
                            return (
                                <p key={index} className="bg-black bg-opacity-25 p-1 rounded-md font-light text-[12.5px] backdrop-blur-xl w-max">{category}</p>
                            )
                        })
                    }
                </span>
                <Image
                    alt="Project"
                    src={image}
                    width={1400}
                    height={944}    
                    loading="lazy"                                                                                                    
                    className={`w-full lg:h-96 object-cover object-top rounded-t-xl grayscale-0 lg:${cardHover ? "grayscale-0" : "grayscale"}`}
                />                                                                                                                                          
            </figure>
            <section className="p-4">
                <Title>{title}</Title>
                <p className="text-balance">{description}</p>
            </section>
        </a>
    )
}