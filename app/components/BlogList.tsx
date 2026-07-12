import Link from "next/link";
import Image from "next/image";

import  CardSkeleton  from "./CardSkeleton";

function MicrocmsArticle(params) {
    const { items } = params
    return (
        <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
            <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-xl border border-card-border bg-card transition-all hover:border-microcms-green hover:shadow-lg"
            >
            <div className="relative h-40 w-full overflow-hidden">
                <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <p className="line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-microcms-green">
                {item.title}
                </p>
                <span className="mt-2 inline-block rounded-full bg-microcms-green-light px-2.5 py-0.5 text-xs font-medium text-microcms-green">
                Microcms
                </span>
            </div>
            </a>
        ))}
        </div>
    );
}

export default function BlogList(params) {
    const { items } = params    
    return (
        <>
            <section>
                <div className="mb-4 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-xl font-bold">
                    <span className="inline-block h-6 w-1 rounded-full bg-accent" />
                    ブログ記事
                </h2>
                <Link
                    href="/blogs"
                    className="text-sm font-medium text-muted transition-colors hover:text-accent"
                >
                    すべて見る &rarr;
                </Link>
                </div>
                <MicrocmsArticle items={items}/>
            </section>
        </>
    )
}