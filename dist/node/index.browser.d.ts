import * as API from './src/CryptoControlApi';
declare const CryptoControlApi: {
    new (apikey: string): {
        apikey: string;
        _fetch(url: string, query?: any): Promise<any>;
        getTopNews(): Promise<API.IArticle[]>;
        getLatestNews(): Promise<API.IArticle[]>;
        getTopNewsByCategory(): Promise<API.ICategoryResponse>;
        getTopNewsByCoin(coinSlug: string): Promise<API.IArticle[]>;
        getLatestNewsByCoin(coinSlug: string): Promise<API.IArticle[]>;
        getTopNewsByCoinCategory(coinSlug: string): Promise<API.ICategoryResponse>;
    };
};
export default CryptoControlApi;
export * from './src/CryptoControlApi';
