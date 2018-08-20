import { IArticle, ICategoryResponse, ITweet, IRedditItem, ILanguage, IFeed, ICoinDetail, ICombinedFeed } from './interfaces';
declare const generateAPI: (fetch: any) => {
    new (apikey: string, proxyURL?: string | undefined): {
        apikey: string;
        proxyURL?: string | undefined;
        sentimentEnabled: boolean;
        _fetch(url: string, query?: any): Promise<any>;
        enableSentiment(): Promise<void>;
        getTopNews(language?: ILanguage): Promise<IArticle[]>;
        getLatestNews(language?: ILanguage): Promise<IArticle[]>;
        getTopNewsByCategory(language?: ILanguage): Promise<ICategoryResponse>;
        getTopNewsByCoin(coinSlug: string, language?: ILanguage): Promise<IArticle[]>;
        getLatestNewsByCoin(coinSlug: string, language?: ILanguage): Promise<IArticle[]>;
        getTopNewsByCoinCategory(coinSlug: string, language?: ILanguage): Promise<ICategoryResponse>;
        getTopTweeetsByCoin(coinSlug: string, language?: ILanguage): Promise<ITweet[]>;
        getLatestTweetsByCoin(coinSlug: string, language?: ILanguage): Promise<ITweet[]>;
        getTopRedditPostsByCoin(coinSlug: string, language?: ILanguage): Promise<IRedditItem[]>;
        getLatestRedditPostsByCoin(coinSlug: string, language?: ILanguage): Promise<IRedditItem[]>;
        getTopFeedByCoin(coinSlug: string, language?: ILanguage): Promise<IFeed[]>;
        getLatestFeedByCoin(coinSlug: string, language?: ILanguage): Promise<IFeed[]>;
        getTopItemsByCoin(coinSlug: string, language?: ILanguage): Promise<ICombinedFeed[]>;
        getLatestItemsByCoin(coinSlug: string, language?: ILanguage): Promise<ICombinedFeed[]>;
        getCoinDetails(coinSlug: string, language?: ILanguage): Promise<ICoinDetail[]>;
    };
};
export { generateAPI, IArticle, ICategoryResponse, ICoinDetail, ICombinedFeed, IFeed, ILanguage, IRedditItem, ITweet };
