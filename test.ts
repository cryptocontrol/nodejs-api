import CryptoControlApi from './src/CryptoControlApi'
import { IArticle } from './src/interfaces'


// @ts-ignore
const api = new CryptoControlApi(process.env.NEWS_API_KEY)


api.getLatestNews()
    .then((articles: IArticle) => {
        console.log(articles)
    })