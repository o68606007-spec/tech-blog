import Link from "next/link";
import Image from "next/image";


export default function MicrocmsArticleAll(props) {
    const { blogs } = props
    
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
            <Link
                key={blog.id}
                href={blog.url}
                className="group overflow-hidden rounded-xl border border-card-border bg-card transition-all hover:border-accent hover:shadow-lg"
            >
                <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="p-4">
                <h2 className="line-clamp-2 text-base font-semibold leading-snug text-foreground group-hover:text-accent">
                    {blog.title}
                </h2>
                <span className="mt-3 inline-block rounded-full bg-accent-bg px-2.5 py-0.5 text-xs font-medium text-accent">
                    Blog
                </span>
                </div>
            </Link>
            ))}
        </div>
    );
}
