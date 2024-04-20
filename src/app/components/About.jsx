import Image from "next/image";

export function About() {
    const boldText = "font-bold";
    const pElement = "font-light text-sm lg:text-lg lg:w-3/4";
    return (
        <section className="relative flex">
            <div>
                <span className="absolute block w-[154px] h-[154px] bg-light-blue blur-[100px] -z-10 -left-1/3 top-1/4 lg:-left-12"></span>
                <h2 className="font-bold text-xl mb-2 lg:text-4xl lg:mb-4">About me</h2>
                <p className={pElement}>Interactive Media Design student with a strong vocation to work in <span className={boldText}>front-end development</span>, <span className={boldText}>UX research</span> and <span className={boldText}>UI/UX&nbsp;design</span>.</p>
                <br />
                <p className={pElement}>I am oriented towards working in software development companies, user experience research and interactive experience&nbsp;design.</p>
                <br />
                <p className={pElement}>I have skills in <span className={boldText}>problem solving</span>, <span className={boldText}>programming</span>, <span className={boldText}>identification</span> and <span className={boldText}>analysis</span> of <span className={boldText}>user needs</span>, which allows me to focus on creating <span className={boldText}>intuitive digital experiences</span>, using data to make informed&nbsp;decisions.</p>
            </div>
            <Image
            src="/icon-big.svg"
            width={224}
            height={222}
            alt="Sunart Icon"
            className="hidden lg:block lg:mr-20"
            />
        </section>
    )
}