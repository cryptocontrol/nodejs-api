import * as fetch from 'node-fetch'

import * as API from './src/CryptoControlApi'

export * from './src/CryptoControlApi'
export default API.generateAPI(fetch)