import * as API from './src/CryptoControlApi'
const CryptoControlApi = API.generateAPI(fetch)

// @ts-ignore
window.CryptoControlApi = CryptoControlApi

// @ts-ignore
window.CryptoNewsApi = CryptoControlApi

// @ts-ignore
global.CryptoControlApi = CryptoControlApi

// @ts-ignore
global.CryptoNewsApi = CryptoControlApi


export default CryptoControlApi
export * from './src/CryptoControlApi'