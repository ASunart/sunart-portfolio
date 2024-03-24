export function About() {
    const boldText = "font-bold";
    const pElement = "font-light text-sm text-balance lg:text-lg";
    return (
        <section className="relative">
            <span className="absolute block w-[154px] h-[154px] bg-light-blue blur-[100px] -z-10 -left-1/3 top-1/4 lg:-left-12"></span>
            <h2 className="font-bold text-xl lg:text-4xl">About me</h2>
            <p className={pElement}>Interactive Media Design student with a strong vocation to work in <span className={boldText}>front-end development</span>, <span className={boldText}>UX research</span> and <span className={boldText}>UI/UX design</span>.</p>
            <br />
            <p className={pElement}>I am oriented towards working in software development companies, user experience research and interactive experience design.</p>
            <br />
            <p className={pElement}>I have skills in <span className={boldText}>problem solving</span>, <span className={boldText}>programming</span>, <span className={boldText}>identification</span> and <span className={boldText}>analysis</span> of <span className={boldText}>user needs</span>, which allows me to focus on creating <span className={boldText}>intuitive digital experiences</span>, using data to make informed decisions.</p>
        </section>
    )
}