"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var API = require("./src/CryptoControlApi");
var CryptoControlApi = API.generateAPI(fetch);
window.CryptoControlApi = CryptoControlApi;
global.CryptoControlApi = CryptoControlApi;
exports.default = CryptoControlApi;
__export(require("./src/CryptoControlApi"));
