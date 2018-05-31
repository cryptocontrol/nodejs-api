"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var fetch = require("node-fetch");
var API = require("./src/CryptoControlApi");
__export(require("./src/CryptoControlApi"));
exports.default = API.generateAPI(fetch);
