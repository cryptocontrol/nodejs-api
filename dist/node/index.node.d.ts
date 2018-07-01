import * as API from './src/CryptoControlApi';
export * from './src/CryptoControlApi';
declare const _default: {
    new (apikey: string): {
        apikey: string;
        _fetch(url: string, query?: any): Promise<any>;
        getTopNews(): Promise<API.IArticle[]>;
        getLatestNews(): Promise<API.IArticle[]>;
        getTopNewsByCategory(): Promise<API.ICategoryResponse>;
        getTopNewsByCoin(coinSlug: string): Promise<API.IArticle[]>;
        getLatestNewsByCoin(coinSlug: string): Promise<API.IArticle[]>;
        getTopNewsByCoinCategory(coinSlug: string): Promise<API.ICategoryResponse>;
        getTopTweeetsByCoin(coinSlug: string): Promise<API.ITweet[]>;
        getLatestTweetsByCoin(coinSlug: string): Promise<API.ITweet[]>;
        getTopRedditPostsByCoin(coinSlug: string): Promise<API.IRedditItem[]>;
        getLatestRedditPostsByCoin(coinSlug: string): Promise<API.IRedditItem[]>;
        getTopFeedByCoin(coinSlug: string): Promise<API.IFeed[]>;
        getLatestFeedByCoin(coinSlug: string): Promise<API.IFeed[]>;
    };
};
export default _default;
