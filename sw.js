importScripts('/Gohoubi/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/Gohoubi/_nuxt/39eda325a47b79a01082.js",
    "revision": "7cc8d50381f336863307aac7d727e92e"
  },
  {
    "url": "/Gohoubi/_nuxt/81da3542a93acd781800.js",
    "revision": "56594617d1edea193217e8766bb26446"
  },
  {
    "url": "/Gohoubi/_nuxt/8dab8a08ebda859b29ca.js",
    "revision": "ae3d93bc14110b51eaecd36b89781c68"
  },
  {
    "url": "/Gohoubi/_nuxt/c5d47ae62fd17d6829bf.js",
    "revision": "9ec9fa6d32fdf80fc4ac50663794f3a3"
  },
  {
    "url": "/Gohoubi/_nuxt/dc841a5a7394855602e2.js",
    "revision": "c0be06c9ac718d70ebffbbd0edcdeb5c"
  },
  {
    "url": "/Gohoubi/_nuxt/e9fac8a77400c5afed2a.js",
    "revision": "b2184a1f82c34e2bb3b2036e25f94058"
  },
  {
    "url": "/Gohoubi/_nuxt/edae1f3647f0dd4bdb50.js",
    "revision": "e392a8f57c967f6950b6192f80c88b89"
  }
], {
  "cacheId": "gohoubi",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/Gohoubi/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/Gohoubi/.*'), workbox.strategies.networkFirst({}), 'GET')
