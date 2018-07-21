import * as API from './src/CryptoControlApi';
declare const CryptoControlApi: {
    new (apikey: string, proxyURL?: string | undefined): {
        apikey: string;
        proxyURL?: string | undefined;
        _fetch(url: string, query?: any): Promise<any>;
        getTopNews(language?: string): Promise<API.IArticle[]>;
        getLatestNews(language?: string): Promise<API.IArticle[]>;
        getTopNewsByCategory(language?: string): Promise<API.ICategoryResponse>;
        getTopNewsByCoin(coinSlug: string, language?: string): Promise<API.IArticle[]>;
        getLatestNewsByCoin(coinSlug: string, language?: string): Promise<API.IArticle[]>;
        getTopNewsByCoinCategory(coinSlug: string, language?: string): Promise<API.ICategoryResponse>;
        getTopTweeetsByCoin(coinSlug: string, language?: string): Promise<API.ITweet[]>;
        getLatestTweetsByCoin(coinSlug: string, language?: string): Promise<API.ITweet[]>;
        getTopRedditPostsByCoin(coinSlug: string, language?: string): Promise<API.IRedditItem[]>;
        getLatestRedditPostsByCoin(coinSlug: string, language?: string): Promise<API.IRedditItem[]>;
        getTopFeedByCoin(coinSlug: string, language?: string): Promise<API.IFeed[]>;
        getLatestFeedByCoin(coinSlug: string, language?: string): Promise<API.IFeed[]>;
        getTopItemsByCoin(coinSlug: string, language?: string): Promise<API.ICombinedFeed[]>;
        getLatestItemsByCoin(coinSlug: string, language?: string): Promise<API.ICombinedFeed[]>;
        getCoinDetails(coinSlug: string, language?: string): Promise<API.ICoinDetail[]>;
    };
};
export default CryptoControlApi;
export * from './src/CryptoControlApi';
