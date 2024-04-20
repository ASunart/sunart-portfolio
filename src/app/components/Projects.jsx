import Image from "next/image";
import { Title } from "./Title";

export function Projects() {
    return (
        <section className="flex flex-col relative gap-4 lg:gap-8">
            <h2 className="font-bold text-xl lg:text-4xl">Projects</h2>
            <div>
                <article className="flex flex-col bg-white bg-opacity-5 rounded-xl border border-orange border-opacity-25 backdrop-blur-[32px]">
                    <figure className="relative">
                        <span className="absolute top-0 gap-1 p-4 left-0 w-full flex">
                            <p className="bg-black bg-opacity-25 p-1 rounded-md font-light text-[12.5px] backdrop-blur-xl w-max">UX/UI Design</p>
                            <p className="bg-black bg-opacity-25 p-1 rounded-md font-light text-[12.5px] backdrop-blur-xl w-max">UX Research</p>

                        </span>
                        <Image
                            alt="Project"
                            src={"/enerbit-cover.webp"}
                            width={539}
                            height={423}
                            className="w-full"
                        />
                    </figure>
                    <section className="p-4">
                    <Title>Enerbit para todos</Title>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquid! Quibusdam, vero sit animi incidunt, quaerat fugiat labore ullam distinctio unde dignissimos veniam maxime, id soluta consequuntur voluptatem est enim?</p>
                    </section>
                </article>
            </div>
        </section>

    )
}