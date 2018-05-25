import { IArticle, ICategoryResponse } from './interfaces';
export default class CryptoControlApi {
    apikey: string;
    constructor(apikey: string);
    private _fetch(url, query?);
    getTopNews(): Promise<IArticle[]>;
    getLatestNews(): Promise<IArticle[]>;
    getTopNewsByCategory(): Promise<ICategoryResponse>;
    getTopNewsByCoin(coinSlug: string): Promise<IArticle[]>;
    getLatestNewsByCoin(coinSlug: string): Promise<IArticle[]>;
    getTopNewsByCoinCategory(coinSlug: string): Promise<ICategoryResponse>;
}
