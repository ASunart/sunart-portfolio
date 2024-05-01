"use client"
import { PROJECTS } from "../constants/projects";
import { ProjectCard } from "./ProjectCard";


export default function Projects() {
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

