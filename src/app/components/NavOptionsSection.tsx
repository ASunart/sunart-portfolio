import { SOCIAL_MEDIA, SocialMedia } from "../constants/socialMedia"

interface NavOptionsSectionProps {
    state: boolean;
    action: () => void;
}

export function NavOptionsSection({ state, action } : NavOptionsSectionProps) {
    const menuState = state ? "absolute top-0 left-0 bg-black h-screen w-screen p-4 flex flex-col gap-5 lg:flex w-1/3 font-light text-base" : "hidden lg:flex lg:justify-between lg:w-1/3"
    return (
        <ul className={menuState}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" className="lg:hidden" onClick={action}>
                <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {
                SOCIAL_MEDIA.map(({ id, link, label, icon } : SocialMedia) => {
                    return <li
                        key={id}
                        className="cursor-pointer hover:text-orange">
                        <a
                            href={link}
                            className="flex items-center gap-1 p-3 border-b border-b-orange border-opacity-70 lg:border-none"
                            target="_blank">
                            <img src={icon} alt={label} />
                            {label}
                        </a>
                    </li>
                })
            }
        </ul>
    )
}