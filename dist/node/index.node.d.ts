import * as CryptoControlApi from './src/CryptoControlApi';
export * from './src/CryptoControlApi';
declare const _default: {
    new (apikey: string, proxyURL?: string | undefined): {
        apikey: string;
        proxyURL?: string | undefined;
        sentimentEnabled: boolean;
        _fetch(url: string, query?: any): Promise<any>;
        enableSentiment(): Promise<void>;
        getTopNews(language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.IArticle[]>;
        getLatestNews(language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.IArticle[]>;
        getTopNewsByCategory(language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.ICategoryResponse>;
        getTopNewsByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.IArticle[]>;
        getLatestNewsByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.IArticle[]>;
        getTopNewsByCoinCategory(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.ICategoryResponse>;
        getTopTweeetsByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.ITweet[]>;
        getLatestTweetsByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.ITweet[]>;
        getTopRedditPostsByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.IRedditItem[]>;
        getLatestRedditPostsByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.IRedditItem[]>;
        getTopFeedByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.IFeed[]>;
        getLatestFeedByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.IFeed[]>;
        getTopItemsByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.ICombinedFeed[]>;
        getLatestItemsByCoin(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.ICombinedFeed[]>;
        getCoinDetails(coinSlug: string, language?: CryptoControlApi.ILanguage): Promise<CryptoControlApi.ICoinDetail[]>;
    };
};
export default _default;
