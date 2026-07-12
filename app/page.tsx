import  QiitaArticles  from "../app/lib/fetchQiita";
import  MicrocmsArticles  from "../app/lib/fetchMicrocms";
import  Hero  from "../app/components/Hero";
import  QiitaList  from "../app/components/QiitaList";
import  BlogList  from "../app/components/BlogList";

export default async function Home() {
    const fetchQitta = await QiitaArticles();
    const fetchMicrocms = await MicrocmsArticles();
    return (
        <>
            <div className="space-y-12">
                {/* Hero1 */}
                <Hero />

                {/* Qiita Section */}
                <QiitaList items={fetchQitta}/>

                {/* Blog Section */}
                <BlogList items={fetchMicrocms} />
            </div>
        </>
    );
}
