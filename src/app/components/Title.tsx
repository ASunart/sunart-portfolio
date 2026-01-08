export function Title({ children } : { children: React.ReactNode }) {
    return (
        <h2 className="font-bold text-lg lg:text-xl">{children}</h2>
    )
}