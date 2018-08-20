import * as API from './src/CryptoControlApi';
declare const CryptoControlApi: {
    new (apikey: string, proxyURL?: string | undefined): {
        apikey: string;
        proxyURL?: string | undefined;
        sentimentEnabled: boolean;
        _fetch(url: string, query?: any): Promise<any>;
        enableSentiment(): Promise<void>;
        getTopNews(language?: API.ILanguage): Promise<API.IArticle[]>;
        getLatestNews(language?: API.ILanguage): Promise<API.IArticle[]>;
        getTopNewsByCategory(language?: API.ILanguage): Promise<API.ICategoryResponse>;
        getTopNewsByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.IArticle[]>;
        getLatestNewsByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.IArticle[]>;
        getTopNewsByCoinCategory(coinSlug: string, language?: API.ILanguage): Promise<API.ICategoryResponse>;
        getTopTweeetsByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.ITweet[]>;
        getLatestTweetsByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.ITweet[]>;
        getTopRedditPostsByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.IRedditItem[]>;
        getLatestRedditPostsByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.IRedditItem[]>;
        getTopFeedByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.IFeed[]>;
        getLatestFeedByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.IFeed[]>;
        getTopItemsByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.ICombinedFeed[]>;
        getLatestItemsByCoin(coinSlug: string, language?: API.ILanguage): Promise<API.ICombinedFeed[]>;
        getCoinDetails(coinSlug: string, language?: API.ILanguage): Promise<API.ICoinDetail[]>;
    };
};
export default CryptoControlApi;
export * from './src/CryptoControlApi';
