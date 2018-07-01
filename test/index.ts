import CryptoControlApi, { IArticle, ICategoryResponse, ITweet, IRedditItem } from 'crypto-news-api'


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


api.getLatestTweetsByCoin("bitcoin")
    .then((tweets: ITweet[]) => {
        console.log(tweets)
    })


api.getLatestRedditPostsByCoin("bitcoin")
    .then((tweets: IRedditItem[]) => {
        console.log(tweets)
    })