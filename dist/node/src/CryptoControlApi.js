"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var qs = require("qs");
var logger = debug('crypto-news-api');
var generateAPI = function (fetch) {
    var CryptoControlApi = (function () {
        function CryptoControlApi(apikey, proxyURL) {
            this.sentimentEnabled = false;
            if (!apikey)
                throw new Error('No API key found. Register for an API key at https://cryptocontrol.io/apis');
            this.apikey = apikey;
            this.proxyURL = proxyURL;
            logger('using cryptocontrol.io api v1');
        }
        CryptoControlApi.prototype._fetch = function (url, query) {
            if (query === void 0) { query = {}; }
            query.enableSentiment = this.sentimentEnabled;
            var queryString = qs.stringify(query);
            var API_HOST = 'https://cryptocontrol.io/api/v1/public';
            var HOST = this.proxyURL || API_HOST;
            return fetch("" + HOST + url + "?" + queryString, {
                headers: {
                    'user-agent': 'CryptoControl Node.js API v2.2.0',
                    'x-api-key': this.apikey
                }
            })
                .then(function (response) {
                if (response.status === 401)
                    throw new Error('Invalid API Key');
                if (response.status === 405)
                    throw new Error('You are not a premium user. Visit https://cryptocontrol.io/about/premium for more info');
                if (response.status !== 200)
                    throw new Error('Bad response from the CryptoControl server');
                return response.json();
            });
        };
        CryptoControlApi.prototype.enableSentiment = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.sentimentEnabled = true;
                    return [2];
                });
            });
        };
        CryptoControlApi.prototype.getTopNews = function (language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch('/news', { language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getLatestNews = function (language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch('/news', { latest: true, language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getTopNewsByCategory = function (language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/news/category", { language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getTopNewsByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/news/coin/" + coinSlug, { language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getLatestNewsByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/news/coin/" + coinSlug, { latest: true, language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getTopNewsByCoinCategory = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/news/coin/" + coinSlug + "/category", { language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getTopTweeetsByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/tweets/coin/" + coinSlug, { language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getLatestTweetsByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/tweets/coin/" + coinSlug, { latest: true, language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getTopRedditPostsByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/reddit/coin/" + coinSlug, { language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getLatestRedditPostsByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/reddit/coin/" + coinSlug, { latest: true, language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getTopFeedByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/feed/coin/" + coinSlug, { language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getLatestFeedByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/feed/coin/" + coinSlug, { latest: true, language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getTopItemsByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/all/coin/" + coinSlug, { language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getLatestItemsByCoin = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/all/coin/" + coinSlug, { latest: true, language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CryptoControlApi.prototype.getCoinDetails = function (coinSlug, language) {
            if (language === void 0) { language = 'en'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._fetch("/details/coin/" + coinSlug, { language: language })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        return CryptoControlApi;
    }());
    return CryptoControlApi;
};
exports.generateAPI = generateAPI;
