import axios from "axios";
import { MicrocmsResponse } from "../../domain/Articles";

export default async function MicrocmsArticles() {
    'use cache';
    const response = await axios.get<MicrocmsResponse>(
        "https://qunzddq7fn.microcms.io/api/v1/blogs?per_page=4",
        {
        headers: {
            "X-MICROCMS-API-KEY": `${process.env.MICROCMS_API_KEY}`,
        },
        }
    );

    const items = response.data.contents.map((item) => ({
        id: item.id,
        title: item.title,
        url: `/blogs/${item.id}`,
        image: item.eyecatch.url,
    }));

    return items;
}