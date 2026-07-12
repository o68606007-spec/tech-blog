import axios from "axios";
import { QiitaResponse } from "../../domain/Articles";

export default async function QiitaArticles() {
    'use cache';
    console.log(process.env.QIITA_API_KEY);
    const response = await axios.get<QiitaResponse[]>(
        "https://qiita.com/api/v2/items?query=user:o68606007&per_page=4",
        {
        headers: {
            Authorization: `Bearer ${process.env.QIITA_API_KEY}`,
        },
        }
    );

    const items = response.data.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.url,
        image: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F810513%2F04c6ef92-7b08-467f-95b0-efd05a0e7ea4.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=255a4084e07534dc5871b77aa1318d0e",
    }));

    return items;
}