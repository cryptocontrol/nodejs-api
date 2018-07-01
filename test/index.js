var CryptoNewsAPI = require('crypto-news-api').default

const Api = new CryptoNewsAPI(process.env.NEWS_API_KEY)


Api.getTopNews()
    .then(articles => console.log(articles))
    .catch(error => console.error(error))


// Api.getTopRedditPostsByCoin("bitcoin")
//     .then(articles => console.log(articles))
//     .catch(error => console.error(error))
