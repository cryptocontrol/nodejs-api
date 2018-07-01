import { IArticle, ICategoryResponse, ITweet, IRedditItem, IFeed } from './interfaces';
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
        getTopTweeetsByCoin(coinSlug: string): Promise<ITweet[]>;
        getLatestTweetsByCoin(coinSlug: string): Promise<ITweet[]>;
        getTopRedditPostsByCoin(coinSlug: string): Promise<IRedditItem[]>;
        getLatestRedditPostsByCoin(coinSlug: string): Promise<IRedditItem[]>;
        getTopFeedByCoin(coinSlug: string): Promise<IFeed[]>;
        getLatestFeedByCoin(coinSlug: string): Promise<IFeed[]>;
    };
};
export { generateAPI, IArticle, ICategoryResponse, IFeed, IRedditItem, ITweet };
