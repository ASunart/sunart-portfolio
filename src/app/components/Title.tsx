export function Title({ children } : { children: React.ReactNode }) {
    return (
        <h2 className="font-bold text-xl lg:text-4xl">{children}</h2>
    )
}