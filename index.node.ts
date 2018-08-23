import * as fetch from 'node-fetch'

import * as CryptoControlApi from './src/CryptoControlApi'

export * from './src/CryptoControlApi'
export default CryptoControlApi.generateAPI(fetch)
