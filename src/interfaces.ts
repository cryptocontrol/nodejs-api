export type ILanguage = 'en' | 'ru' | 'po' | 'cn' | 'ko' | 'es' | 'it' | 'de' | 'jp'


export interface IArticle {
    _id: string
    publishedAt: string
    hotness: number
    activityHotness: number
    primaryCategory: string
    words: number
    source: {
        _id: string
        url: string
        name: string
    }
    similarArticles: [{
        _id: string
        publishedAt: string
        title: string
        url: string
        source: {
            _id: string
            url: string
            name: string
        }
    }]
    coins: [{
        _id: string
        name: string
        slug: string
        tradingSymbol: string
    }]
    description: string
    title: string
    url: string
    thumbnail?: string
    originalImageUrl?: string

    sentiment?: 'pos' | 'neg' | 'neu'
    sentimentScore?: number
}


export interface ICategoryResponse {
    analysis: IArticle[]
    blockchain: IArticle[]
    exchanges: IArticle[]
    general: IArticle[]
    government: IArticle[]
    ico: IArticle[]
    mining: IArticle[]
}


export interface IRedditItem {
    activityHotness?: number
    comments: number
    description: string
    downvotes: number
    hotness: number
    _id: string
    id: any
    isSelf: boolean
    publishedAt: Date
    score: number
    subreddit: string
    title: string
    upvotes: number
    url: string
}


export interface ITweet {
    _id: string
    activityHotness?: number
    favoriteCount: number
    hashtags: string[]
    hotness?: number
    id: any
    isRetweeted: boolean
    language: string
    links: string[]
    mentions: string[]
    publishedAt: Date
    retweetCount: number
    symbols: string[]
    text: string
    twitteratiScore?: number
    username: string
}


export interface IFeed {
    type: 'article' | 'tweet' | 'reddit'
    tweet: ITweet
    reddit: IRedditItem
    article: IArticle
}


export interface ICombinedFeed {
    tweets: ITweet[]
    redditPosts: IRedditItem[]
    articles: IArticle[]
}


export interface ICoinDetail {
    links: {
        type: string
        name: string
        link: string
    }[]
    gitrepos: string[]
    description: string
    subreddits: string[]
    twitterUsernames: string[]
}
