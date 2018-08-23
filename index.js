var CryptoNewsAPI = require('crypto-news-api').default

const Api = new CryptoNewsAPI(process.env.NEWS_API_KEY)


Api.getTopNews()
    // .then(articles => console.log(articles))
    .catch(error => console.error(error))


Api.getTopRedditPostsByCoin("bitcoin")
    // .then(articles => console.log(articles))
    .catch(error => console.error(error))


Api.getLatestTweetsByCoin("bitcoin")
    // .then(tweets => console.log(tweets))
    .catch(error => console.error(error))


Api.getLatestRedditPostsByCoin("bitcoin")
    // .then(redditPosts => console.log(redditPosts))
    .catch(error => console.error(error))


Api.getTopFeedByCoin("bitcoin")
    // .then(feed => console.log(feed))
    .catch(error => console.error(error))