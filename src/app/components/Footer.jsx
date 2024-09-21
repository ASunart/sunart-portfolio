"use client";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <footer className="relative flex justify-around items-center w-full border-t border-white border-opacity-30 p-4">
            <p className="font-light text-sm hidden lg:block lg:text-base">{currentYear}</p>
            <p className="font-light cursor-pointer text-sm hidden lg:flex lg:text-base hover:text-orange"
                onClick={backToTop}>Back to top <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                    <path d="M18 15C18 15 13.5811 9.00001 12 9C10.4188 8.99999 6 15 6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg> </p>
        </footer>
    )
}