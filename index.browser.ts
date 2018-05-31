import * as API from './src/CryptoControlApi'
const CryptoControlApi = API.generateAPI(fetch)

// @ts-ignore
window.CryptoControlApi = CryptoControlApi

// @ts-ignore
global.CryptoControlApi = CryptoControlApi


export default CryptoControlApi
export * from './src/CryptoControlApi'