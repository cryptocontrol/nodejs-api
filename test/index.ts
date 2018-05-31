import CryptoControlApi, { IArticle, ICategoryResponse } from '../dist/node/index.node'


// @ts-ignore
const api = new CryptoControlApi(process.env.NEWS_API_KEY)


api.getLatestNews()
    .then((articles: IArticle[]) => {
        console.log(articles)
    })


api.getTopNewsByCoinCategory("bitcoin")
    .then((categories: ICategoryResponse) => {
        console.log(categories)
    })