import * as debug from 'debug'
import * as qs from 'qs'

import { IArticle, ICategoryResponse, ITweet, IRedditItem } from './interfaces'


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
            const queryString = qs.stringify({
                ...query,
                key: this.apikey
            })

            return fetch(`${API_HOST}${url}?${queryString}`)
                .then((response: any) => {
                    if (response.status === 401) throw new Error('Invalid API Key')
                    if (response.status !== 200) throw new Error('Bad response from the CryptoControl server')
                    return response.json()
                })
        }


        public async getTopNews(): Promise<IArticle[]> {
            return await this._fetch('/news')
        }


        public async getLatestNews(): Promise<IArticle[]> {
            return await this._fetch('/news', { latest: true })
        }


        public async getTopNewsByCategory(): Promise<ICategoryResponse> {
            return await this._fetch(`/news/category`)
        }


        public async getTopNewsByCoin(coinSlug: string): Promise<IArticle[]> {
            return await this._fetch(`/news/coin/${coinSlug}`)
        }


        public async getLatestNewsByCoin(coinSlug: string): Promise<IArticle[]> {
            return await this._fetch(`/news/coin/${coinSlug}`, { latest: true })
        }


        public async getTopNewsByCoinCategory(coinSlug: string): Promise<ICategoryResponse> {
            return await this._fetch(`/news/coin/${coinSlug}/category`)
        }


        public async getTopTweeetsByCoin(coinSlug: string): Promise<ITweet[]> {
            return await this._fetch(`/tweets/coin/${coinSlug}`)
        }


        public async getLatestTweetsByCoin(coinSlug: string): Promise<ITweet[]> {
            return await this._fetch(`/tweets/coin/${coinSlug}`, { latest: true })
        }


        public async getTopRedditPostsByCoin(coinSlug: string): Promise<IRedditItem[]> {
            return await this._fetch(`/reddit/coin/${coinSlug}`)
        }


        public async getLatestRedditPostsByCoin(coinSlug: string): Promise<IRedditItem[]> {
            return await this._fetch(`/reddit/coin/${coinSlug}`, { latest: true })
        }
    }


    return CryptoControlApi
}


export {
    generateAPI,
    IArticle,
    ICategoryResponse,
    IRedditItem,
    ITweet
}
