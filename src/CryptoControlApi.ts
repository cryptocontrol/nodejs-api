import * as debug from 'debug'
import * as qs from 'qs'

import { IArticle, ICategoryResponse } from './interfaces'


const logger = debug('crypto-news-api')
const API_HOST = 'https://cryptocontrol.io/api/v1'


export default class CryptoControlApi {
    apikey: string

    constructor(apikey: string) {
        if (!apikey) throw new Error('No API key found. Register for an API key at https://cryptocontrol.io/apis')
        this.apikey = apikey

        logger('using cryptocontrol.io api v1')
    }


    private _fetch(url: string, query: any = {}): Promise<any> {
        const queryString = qs.stringify({
            ...query,
            key: this.apikey
        })

        // @ts-ignore
        return fetch(`${API_HOST}${url}?${queryString}`)
            .then((response: any) => {
                if (response.status === 401) throw new Error('Invalid API Key')
                if (response.status !== 200) throw new Error('Bad response from the CryptoControl server')
                return response.json()
            })
    }


    public async getTopNews(): Promise<IArticle[]> {
        return await this._fetch('/public/news')
    }


    public async getLatestNews(): Promise<IArticle[]> {
        return await this._fetch('/public/news', { latest: true })
    }


    public async getTopNewsByCategory(): Promise<ICategoryResponse> {
        return await this._fetch(`/public/news/category`)
    }


    public async getTopNewsByCoin(coinSlug: string): Promise<IArticle[]> {
        return await this._fetch(`/public/news/coin/${coinSlug}`)
    }


    public async getLatestNewsByCoin(coinSlug: string): Promise<IArticle[]> {
        return await this._fetch(`/public/news/coin/${coinSlug}`, { latest: true })
    }


    public async getTopNewsByCoinCategory(coinSlug: string): Promise<ICategoryResponse> {
        return await this._fetch(`/public/news/coin/${coinSlug}/category`)
    }
}