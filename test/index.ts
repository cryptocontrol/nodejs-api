import CryptoControlApi, { IFeed } from '../dist/node/index.node'


// @ts-ignore
const Api = new CryptoControlApi(process.env.NEWS_API_KEY)


Api.getLatestNews()
    // .then(articles => console.log(articles))
    .catch((error: Error)  => console.error(error))


Api.getTopNewsByCoin("bitcoin")
    // .then(articles => console.log(articles))
    .catch((error: Error)  => console.error(error))


Api.getLatestTweetsByCoin("bitcoin")
    // .then(tweets => console.log(tweets))
    .catch((error: Error)  => console.error(error))


Api.getLatestRedditPostsByCoin("bitcoin")
    // .then(redditPosts => console.log(redditPosts))
    .catch((error: Error)  => console.error(error))


Api.getTopFeedByCoin("bitcoin")
    .then((feed: IFeed[]) => console.log(feed))
    .catch((error: Error)  => console.error(error))
