import 'whatwg-fetch'

import CryptoControlApi from './src/CryptoControlApi'

// @ts-ignore
window.CryptoControlApi = CryptoControlApi

// @ts-ignore
global.CryptoControlApi = CryptoControlApi

export default CryptoControlApi