/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/02/hello-world/index.html","1a462e5f91149bf9ef35673643a04b04"],["/2023/11/03/anquan/image-20230615103953639.png","a5983f7e56f816515fd9f44b0a58c89e"],["/2023/11/03/anquan/image-20230615104809764.png","9a1e313801a1f326399b85ae92e7190b"],["/2023/11/03/anquan/image-20230615112128130.png","fe56590256c7fe366663c94414dd8bb7"],["/2023/11/03/anquan/image-20230618214819633.png","34f74c457137c10aa13e0207284f9879"],["/2023/11/03/anquan/image-20230618215507581.png","41fa1b6c52a603f65c0b93baf729b4f5"],["/2023/11/03/anquan/image-20230618220312636.png","a0d6422024a6b5a9a51c664d448f10da"],["/2023/11/03/anquan/image-20230618220927126.png","ea215719b0336c7704d98b2a619e67b5"],["/2023/11/03/anquan/image-20230618221545231.png","701ac614fd5f14976576591bc2a0c54e"],["/2023/11/03/anquan/image-20230618222758774.png","c403d287c58728e59a6edaba0ba22013"],["/2023/11/03/anquan/image-20230618223725087.png","361e3a29065dbd5fafaff3ac068bb930"],["/2023/11/03/anquan/image-20230618223858795.png","0556455a20466d050aa820b2d52c6be2"],["/2023/11/03/anquan/image-20230618225209356.png","864337f02f85d19d264fa13e07bc813f"],["/2023/11/03/anquan/image-20230618225541794.png","277f9c27025694d3c4f5be3d8cb9c372"],["/2023/11/03/anquan/image-20230618225758142.png","6a13dfd8e8736d85ed238251ab11e191"],["/2023/11/03/anquan/image-20230618230524828.png","899ce9e4709ffd4bb95316b97e6fa0c4"],["/2023/11/03/anquan/image-20230619231932435.png","b64ade1d1e00f383b4673b035337d209"],["/2023/11/03/anquan/index.html","eb2459badaa6b291f96d28a7e35baaa6"],["/2023/11/03/hexo搭建/index.html","a04eda267b952a5194614439f9bf72d6"],["/2023/11/16/Flex布局-语法/image-20231116094856572.png","6fd7fccb274c7213bc14abe2e2b239cb"],["/2023/11/16/Flex布局-语法/image-20231116100920151.png","97fef60a3ae764b772613a0886b794fc"],["/2023/11/16/Flex布局-语法/index.html","05402f0a0af0ac5b1ad0f00ec7c46c88"],["/about/index.html","13935e1a8db8b474302bda93e452653d"],["/archives/2023/11/index.html","123d905d233f317b1b09bea35cc2afdc"],["/archives/2023/index.html","b15b322d34609e7605f756fe45427e3f"],["/archives/index.html","d1bec62c70729d16fe3a79f5127340e1"],["/categories/index.html","f50805e4a019e0b7138931cc8c0f162e"],["/comment/index.html","57c74ae36ef4bea318638a17abe1b97e"],["/css/index.css","9b7116784b50fdb9510d92879cd55896"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.png","ad08e22acdb1a0e6b14c1a9169b528d6"],["/img/background.jpg","f7328cd547382c423e8bd21297315aba"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","87b99feccf75a65da2400814d2b9dce7"],["/index.html","fd553323834143bb78c38a7a157b790d"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/links/index.html","df844508a1558e625707099520e6c07c"],["/movies/index.html","634b0db02350edef741da940cd61e547"],["/music/index.html","9ba7aeae34089d9a06ea40c764bc1a32"],["/photos/TS/index.html","0660d258eb822fe91cd81bef44cc4ba9"],["/photos/TS/index/1.jpg","49c48e7f0d9cc017bd4461e5bf834655"],["/photos/TS/index/2.jpg","4dc871bddae323f3eabfdf89b288ce5f"],["/photos/TS/index/3.jpg","e60ff9f79727e9dee97a16839288b82e"],["/photos/TS/index/4.jpg","954d339924a59abb157fe6d173647021"],["/photos/TS/index/5.jpg","562d628b640b07a0054ad2730a935f9c"],["/photos/TS/index/6.jpg","26c8996d24d043df1d96c38367e741d5"],["/photos/TS/index/7.jpg","13c6a5fb1751cddc5bdd441084cf0d11"],["/photos/TS/index/8.jpg","8c5d4c69fca4ea992189f64040e9f5ed"],["/photos/TS/index/9.jpg","0522cf707db448148eab5d018715b12c"],["/photos/index.html","607c49b5da097502da09494ccfba8e0f"],["/sw-register.js","6e194bb27b0b7a8d6a8fd64bc0562f97"],["/tags/index.html","7a8e378e34ef04b902bd55b01ce3c6b5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
