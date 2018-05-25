export interface IArticle {
    _id: string;
    publishedAt: string;
    hotness: number;
    activityHotness: number;
    primaryCategory: string;
    words: number;
    similarArticles: [{
        _id: string;
        publishedAt: string;
        title: string;
        url: string;
    }];
    coins: [{
        _id: string;
        name: string;
        slug: string;
        tradingSymbol: string;
    }];
    description: string;
    title: string;
    url: string;
    thumbnail?: string;
    originalImageUrl?: string;
}
export interface ICategoryResponse {
    analysis: IArticle[];
    blockchain: IArticle[];
    exchanges: IArticle[];
    general: IArticle[];
    government: IArticle[];
    ico: IArticle[];
    mining: IArticle[];
}
