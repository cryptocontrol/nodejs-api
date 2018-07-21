import * as debug from 'debug'
import * as qs from 'qs'

import { IArticle, ICategoryResponse, ITweet, IRedditItem, IFeed, ICoinDetail, ICombinedFeed } from './interfaces'


const logger = debug('crypto-news-api')
const API_HOST = 'https://cryptocontrol.io/api/v1/public'


const generateAPI = (fetch: any) => {
    const CryptoControlApi = class CryptoControlApi {
        apikey: string

        constructor(apikey: string) {
            if (!apikey) throw new Error('No API key found. Register for an API key at https://cryptocontrol.io/apis')
            this.apikey = apikey

            logger('using cryptocontrol.io api v1')
        }


        _fetch(url: string, query: any = {}): Promise<any> {
            const queryString = qs.stringify(query)

            return fetch(`${API_HOST}${url}?${queryString}`, {
                headers: {
                    'user-agent': 'CryptoControl Node.js API v2.2.0',
                    'x-api-key': this.apikey
                }
            })
                .then((response: any) => {
                    if (response.status === 401) throw new Error('Invalid API Key')
                    if (response.status !== 200) throw new Error('Bad response from the CryptoControl server')
                    return response.json()
                })
        }


        public async getTopNews(language = 'en'): Promise<IArticle[]> {
            return await this._fetch('/news', { language })
        }


        public async getLatestNews(language = 'en'): Promise<IArticle[]> {
            return await this._fetch('/news', { latest: true, language })
        }


        public async getTopNewsByCategory(language = 'en'): Promise<ICategoryResponse> {
            return await this._fetch(`/news/category`, { language })
        }


        public async getTopNewsByCoin(coinSlug: string, language = 'en'): Promise<IArticle[]> {
            return await this._fetch(`/news/coin/${coinSlug}`, { language })
        }


        public async getLatestNewsByCoin(coinSlug: string, language = 'en'): Promise<IArticle[]> {
            return await this._fetch(`/news/coin/${coinSlug}`, { latest: true, language })
        }


        public async getTopNewsByCoinCategory(coinSlug: string, language = 'en'): Promise<ICategoryResponse> {
            return await this._fetch(`/news/coin/${coinSlug}/category`, { language })
        }


        public async getTopTweeetsByCoin(coinSlug: string, language = 'en'): Promise<ITweet[]> {
            return await this._fetch(`/tweets/coin/${coinSlug}`, { language })
        }


        public async getLatestTweetsByCoin(coinSlug: string, language = 'en'): Promise<ITweet[]> {
            return await this._fetch(`/tweets/coin/${coinSlug}`, { latest: true, language })
        }


        public async getTopRedditPostsByCoin(coinSlug: string, language = 'en'): Promise<IRedditItem[]> {
            return await this._fetch(`/reddit/coin/${coinSlug}`, { language })
        }


        public async getLatestRedditPostsByCoin(coinSlug: string, language = 'en'): Promise<IRedditItem[]> {
            return await this._fetch(`/reddit/coin/${coinSlug}`, { latest: true, language })
        }


        public async getTopFeedByCoin(coinSlug: string, language = 'en'): Promise<IFeed[]> {
            return await this._fetch(`/feed/coin/${coinSlug}`, { language })
        }


        public async getLatestFeedByCoin(coinSlug: string, language = 'en'): Promise<IFeed[]> {
            return await this._fetch(`/feed/coin/${coinSlug}`, { latest: true, language })
        }


        public async getTopItemsByCoin(coinSlug: string, language = 'en'): Promise<ICombinedFeed[]> {
            return await this._fetch(`/all/coin/${coinSlug}`, { language })
        }


        public async getLatestItemsByCoin(coinSlug: string, language = 'en'): Promise<ICombinedFeed[]> {
            return await this._fetch(`/all/coin/${coinSlug}`, { latest: true, language })
        }


        public async getCoinDetails(coinSlug: string, language = 'en'): Promise<ICoinDetail[]> {
            return await this._fetch(`/details/coin/${coinSlug}`, { language })
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
    IRedditItem,
    ITweet
}
