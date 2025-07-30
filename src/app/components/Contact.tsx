export function Contact() {
    return (
        <section className='mb-8'>
            <h2 className="text-center font-bold text-xl mb-2 lg:text-4xl lg:mb-4">Get in touch</h2>
            <p className="font-light text-center mx-auto text-balance text-sm lg:text-lg lg:w-3/4">Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
            <a href="mailto:ja.solarter@gmail.com" className='flex justify-center mt-4'>
                <button className="font-regular hover:font-bold text-sm lg:text-lg border border-orange border-opacity-45 hover:border-opacity-100 bg-white bg-opacity-10 px-6 py-3 rounded-lg hover:scale-105 transition-all">
                    <span className=" text-white">Say hello</span>
                </button>
            </a>
        </section>
    )
}