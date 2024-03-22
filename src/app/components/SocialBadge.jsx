export function SocialBadge({ label, icon, link }) {
    return (
        <a
            href={link}
            className="flex justify-center gap-1 w-min items-center px-4 py-[10px] rounded-md bg-white bg-opacity-5 border border-white border-opacity-35 cursor-pointer"
            target="_blank">
            {icon}
            {label}
        </a>
    )
}