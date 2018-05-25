import CryptoControlApi from './index'

const api = new CryptoControlApi(process.env.NEWS_API_KEY)

api.getLatestNews()
    .then(articles => {
        console.log(articles)
    })