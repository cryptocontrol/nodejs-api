import { IArticle, ICategoryResponse } from './interfaces';
declare const generateAPI: (fetch: any) => {
    new (apikey: string): {
        apikey: string;
        _fetch(url: string, query?: any): Promise<any>;
        getTopNews(): Promise<IArticle[]>;
        getLatestNews(): Promise<IArticle[]>;
        getTopNewsByCategory(): Promise<ICategoryResponse>;
        getTopNewsByCoin(coinSlug: string): Promise<IArticle[]>;
        getLatestNewsByCoin(coinSlug: string): Promise<IArticle[]>;
        getTopNewsByCoinCategory(coinSlug: string): Promise<ICategoryResponse>;
    };
};
export { IArticle, ICategoryResponse, generateAPI };
