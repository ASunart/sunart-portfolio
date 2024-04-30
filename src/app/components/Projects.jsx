"use client"
import Image from "next/image";
import { Title } from "./Title";
import { PROJECTS } from "../constants/projects";
import { useState } from "react";

export function Projects() {
    return (
        <section className="flex flex-col relative gap-4 lg:gap-8">
            <h2 className="font-bold text-xl lg:text-4xl">Projects</h2>
            <div className="flex flex-col gap-4 projects-container">
                {
                    PROJECTS.map(({id, title, description, categories, image, grid_area, link}) => {
                        return (
                            <ProjectCard key={id} title={title} description={description} categories={categories} image={image} grid_area={grid_area} link={link} />
                        )
                    })
                }
            </div>
        </section>

    )
}

function ProjectCard({title, description, categories, image, grid_area, link}) {
    const [cardHover, setCardHover] = useState(false)

    const handleCardHover = () => {
        setCardHover(prevState =>!prevState)
    }

    return (
        <a className={`flex flex-col lg:h-max bg-white bg-opacity-5 rounded-xl border border-orange hover:scale-105 transition-all cursor-pointer border-opacity-25 backdrop-blur-[32px] grid-area ${grid_area}`}
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
                    className={`w-full lg:h-96 object-cover rounded-t-xl grayscale-0 lg:${cardHover ? "grayscale-0" : "grayscale"}`}
                />                                                                                                                                          
            </figure>
            <section className="p-4">
                <Title>{title}</Title>
                <p className="text-balance">{description}</p>
            </section>
        </a>
    )
}