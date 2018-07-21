import { IArticle, ICategoryResponse, ITweet, IRedditItem, IFeed, ICoinDetail, ICombinedFeed } from './interfaces';
declare const generateAPI: (fetch: any) => {
    new (apikey: string, proxyURL?: string | undefined): {
        apikey: string;
        proxyURL?: string | undefined;
        _fetch(url: string, query?: any): Promise<any>;
        getTopNews(language?: string): Promise<IArticle[]>;
        getLatestNews(language?: string): Promise<IArticle[]>;
        getTopNewsByCategory(language?: string): Promise<ICategoryResponse>;
        getTopNewsByCoin(coinSlug: string, language?: string): Promise<IArticle[]>;
        getLatestNewsByCoin(coinSlug: string, language?: string): Promise<IArticle[]>;
        getTopNewsByCoinCategory(coinSlug: string, language?: string): Promise<ICategoryResponse>;
        getTopTweeetsByCoin(coinSlug: string, language?: string): Promise<ITweet[]>;
        getLatestTweetsByCoin(coinSlug: string, language?: string): Promise<ITweet[]>;
        getTopRedditPostsByCoin(coinSlug: string, language?: string): Promise<IRedditItem[]>;
        getLatestRedditPostsByCoin(coinSlug: string, language?: string): Promise<IRedditItem[]>;
        getTopFeedByCoin(coinSlug: string, language?: string): Promise<IFeed[]>;
        getLatestFeedByCoin(coinSlug: string, language?: string): Promise<IFeed[]>;
        getTopItemsByCoin(coinSlug: string, language?: string): Promise<ICombinedFeed[]>;
        getLatestItemsByCoin(coinSlug: string, language?: string): Promise<ICombinedFeed[]>;
        getCoinDetails(coinSlug: string, language?: string): Promise<ICoinDetail[]>;
    };
};
export { generateAPI, IArticle, ICategoryResponse, ICoinDetail, ICombinedFeed, IFeed, IRedditItem, ITweet };
