export default function QiitaListAll(params) {
    const { items } = params
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
            <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-card-border bg-card p-5 transition-all hover:border-qiita-green hover:shadow-lg"
            >
            <h2 className="line-clamp-2 text-base font-semibold leading-snug text-foreground group-hover:text-qiita-green">
                {item.title}
            </h2>
            <div className="mt-3 flex items-center gap-2">
                <span className="inline-block rounded-full bg-qiita-green-light px-2.5 py-0.5 text-xs font-medium text-qiita-green">
                Qiita
                </span>
                <span className="text-xs text-muted">外部リンク</span>
            </div>
            </a>
        ))}
        </div>
    );
}

