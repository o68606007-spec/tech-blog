import QiitaHeader from "../components/QiitaHeader";
import QiitaListAll from "../components/QiitaListAll";
import QiitaArticlesAll from "../lib/fetchQiitaItems";


export default async function Qiita() {

    const fetchQiitaItems = await QiitaArticlesAll();

    return (
        <div>
        {/* Page Header */}
        <QiitaHeader />

        {/* Article List */}            
        <QiitaListAll items={fetchQiitaItems} />
        </div>
    );
}
