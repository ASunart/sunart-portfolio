export function SocialBadge({ label, icon, link }) {
    return (
        <a
            href={link}
            className="flex justify-center gap-1 w-min transition-shadow items-center px-3 py-[10px] rounded-md bg-white bg-opacity-5 border border-white border-opacity-35 cursor-pointer lg:text-lg hover:border-light-blue hover:shadow-sm hover:shadow-light-blue"
            target="_blank">
            {icon}
            {label}
        </a>
    )
}