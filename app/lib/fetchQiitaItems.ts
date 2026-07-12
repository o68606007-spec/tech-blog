import axios from "axios";
import { QiitaResponse } from "../../domain/Articles";

export default async function QiitaArticlesAll() {
    'use cache';
    const response = await axios.get<QiitaResponse[]>(
        "https://qiita.com/api/v2/items?query=user:o68606007&per_page=20",
        {
        headers: {
            Authorization: `Bearer ${process.env.QIITA_API_KEY}`,
        },
        }
    );
    return response.data;
}