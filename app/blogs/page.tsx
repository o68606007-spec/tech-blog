import MicrocmsArticles from "../lib/fetchMicrocms";
import MicroCMSHeader from "../components/MicroCMSHeader";
import MicrocmsArticleAll from "../components/BlogListAll";

export default async function Blogs() {

    const blogs = await MicrocmsArticles();

    return (
        <div>
            {/* Page Header */}
            <MicroCMSHeader />

            {/* Article Grid */}
            <MicrocmsArticleAll blogs={ blogs } />
        </div>
    );
}
