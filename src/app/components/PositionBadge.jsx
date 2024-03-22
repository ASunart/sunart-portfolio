
export function PositionBadge({ position }) {
    return (
        <div className="px-2 py-[6px] bg-orange bg-opacity-20 border-[0.5px] border-orange border-opacity-25 rounded-xl w-max position-badge">
            <p className="font-light text-[12.5px] text-white">{position}</p>
        </div>
    )
}