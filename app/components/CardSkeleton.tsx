export default function CardSkeleton() {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
        {[...Array(4)].map((_, i) => (
            <div
            key={i}
            className="overflow-hidden rounded-xl border border-card-border bg-card"
            >
            <div className="skeleton h-40 w-full" />
            <div className="p-4">
                <div className="skeleton mb-2 h-5 w-3/4" />
                <div className="skeleton h-4 w-1/2" />
            </div>
            </div>
        ))}
        </div>
    );
}