import * as debug from 'debug'
import * as qs from 'qs'

import { IArticle, ICategoryResponse, ITweet, IRedditItem, ILanguage, IFeed, ICoinDetail, ICombinedFeed } from './interfaces'


const logger = debug('crypto-news-api')


const generateAPI = (fetch: any) => {
    const CryptoControlApi = class CryptoControlApi {
        apikey: string
        proxyURL?: string
        sentimentEnabled: boolean = false


        constructor(apikey: string, proxyURL?: string) {
            if (!apikey) throw new Error('No API key found. Register for an API key at https://cryptocontrol.io/apis')
            this.apikey = apikey
            this.proxyURL = proxyURL

            logger('using cryptocontrol.io api v1')
        }


        _fetch(url: string, query: any = {}): Promise<any> {
            query.enableSentiment = this.sentimentEnabled
            const queryString = qs.stringify(query)
            const API_HOST = 'https://cryptocontrol.io/api/v1/public'
            const HOST = this.proxyURL || API_HOST

            return fetch(`${HOST}${url}?${queryString}`, {
                headers: {
                    'user-agent': 'CryptoControl Node.js API v2.2.0',
                    'x-api-key': this.apikey
                }
            })
                .then((response: any) => {
                    if (response.status === 401) throw new Error('Invalid API Key')
                    if (response.status === 405)  throw new Error('You are not a premium user. Visit https://cryptocontrol.io/about/premium for more info')
                    if (response.status !== 200) throw new Error('Bad response from the CryptoControl server')
                    return response.json()
                })
        }


        public async enableSentiment(){
          this.sentimentEnabled = true;
        }


        public async getTopNews(language: ILanguage = 'en', page: number = 0): Promise<IArticle[]> {
            return await this._fetch('/news', { language, page })
        }


        public async getLatestNews(language: ILanguage = 'en', page: number = 0): Promise<IArticle[]> {
            return await this._fetch('/news', { latest: true, language, page })
        }


        public async getTopNewsByCategory(language: ILanguage = 'en', page: number = 0): Promise<ICategoryResponse> {
            return await this._fetch(`/news/category`, { language, page })
        }


        public async getTopNewsByCoin(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<IArticle[]> {
            return await this._fetch(`/news/coin/${coinSlug}`, { language, page })
        }


        public async getLatestNewsByCoin(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<IArticle[]> {
            return await this._fetch(`/news/coin/${coinSlug}`, { latest: true, language, page })
        }


        public async getTopNewsByCoinCategory(coinSlug: string, language:ILanguage = 'en', page: number = 0): Promise<ICategoryResponse> {
            return await this._fetch(`/news/coin/${coinSlug}/category`, { language, page })
        }


        public async getTopTweeetsByCoin(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<ITweet[]> {
            return await this._fetch(`/tweets/coin/${coinSlug}`, { language, page })
        }


        public async getLatestTweetsByCoin(coinSlug: string, language:ILanguage  = 'en', page: number = 0): Promise<ITweet[]> {
            return await this._fetch(`/tweets/coin/${coinSlug}`, { latest: true, language, page })
        }


        public async getTopRedditPostsByCoin(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<IRedditItem[]> {
            return await this._fetch(`/reddit/coin/${coinSlug}`, { language, page })
        }


        public async getLatestRedditPostsByCoin(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<IRedditItem[]> {
            return await this._fetch(`/reddit/coin/${coinSlug}`, { latest: true, language, page })
        }


        public async getTopFeedByCoin(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<IFeed[]> {
            return await this._fetch(`/feed/coin/${coinSlug}`, { language , page })
        }


        public async getLatestFeedByCoin(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<IFeed[]> {
            return await this._fetch(`/feed/coin/${coinSlug}`, { latest: true, language, page })
        }


        public async getTopItemsByCoin(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<ICombinedFeed[]> {
            return await this._fetch(`/all/coin/${coinSlug}`, { language, page })
        }


        public async getLatestItemsByCoin(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<ICombinedFeed[]> {
            return await this._fetch(`/all/coin/${coinSlug}`, { latest: true, language , page})
        }


        public async getCoinDetails(coinSlug: string, language: ILanguage = 'en', page: number = 0): Promise<ICoinDetail[]> {
            return await this._fetch(`/details/coin/${coinSlug}`, { language, page })
        }
    }


    return CryptoControlApi
}


export {
    generateAPI,
    IArticle,
    ICategoryResponse,
    ICoinDetail,
    ICombinedFeed,
    IFeed,
    ILanguage,
    IRedditItem,
    ITweet
}
