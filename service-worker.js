/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "968fb89f906afac8143ac06e3ab8508d"
  },
  {
    "url": "assets/css/0.styles.352c99f4.css",
    "revision": "4be94267f3ad08b5e4931a562372c204"
  },
  {
    "url": "assets/img/delete.4de51715.png",
    "revision": "4de517157aa1e122f9282e75043bf531"
  },
  {
    "url": "assets/img/getAll.909a940b.png",
    "revision": "909a940b20a871da983630b8e8c78d89"
  },
  {
    "url": "assets/img/getOne.7b2cbf1c.png",
    "revision": "7b2cbf1c25ae4db102e3f76ede3e8615"
  },
  {
    "url": "assets/img/post.d179c92a.png",
    "revision": "d179c92aab1c975c5b095ae21683ce09"
  },
  {
    "url": "assets/img/put.bb08ba21.png",
    "revision": "bb08ba2112247fc7de583270cb22384c"
  },
  {
    "url": "assets/img/relationalSchema.e18c2376.png",
    "revision": "e18c23766c2b1794ddb6c3a7a5969833"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0ba3b386.js",
    "revision": "4730007988fd6fb798b75bf528ad2e4d"
  },
  {
    "url": "assets/js/10.f9599204.js",
    "revision": "f82117b6cf9eb4c3a45ad2ec34a67880"
  },
  {
    "url": "assets/js/13.e12c55aa.js",
    "revision": "b32064227c08b75df5aa422bb000a3d8"
  },
  {
    "url": "assets/js/14.8f152714.js",
    "revision": "00ba53c49061d163593ec25330721735"
  },
  {
    "url": "assets/js/15.3f16d179.js",
    "revision": "a7d94031e33e503881fdcad5cbae306a"
  },
  {
    "url": "assets/js/16.0cb3a3cd.js",
    "revision": "28c2ebb5f48a2900a2a1b9859aa5d965"
  },
  {
    "url": "assets/js/17.3371b5f9.js",
    "revision": "2c91e186b4a218fb3eff5f30f9989617"
  },
  {
    "url": "assets/js/18.454e7e69.js",
    "revision": "87d837d74e24e1eda3be7df639fbc667"
  },
  {
    "url": "assets/js/19.763bcea3.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.54745841.js",
    "revision": "ee852e27f312410c4ec20cc88bd6b075"
  },
  {
    "url": "assets/js/20.2f4dbfb8.js",
    "revision": "0226f9e08f32a81616cb88cfc87043dc"
  },
  {
    "url": "assets/js/21.99b82fa4.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.c67875c4.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.85891b87.js",
    "revision": "05c3ef3941327eb4574e991ce9fc3c71"
  },
  {
    "url": "assets/js/25.e0495cad.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.ad577dbc.js",
    "revision": "15c785f28027fbb9c69a924ef7a17245"
  },
  {
    "url": "assets/js/27.54d268db.js",
    "revision": "848064b823ef3f0125f941e9c8c8834b"
  },
  {
    "url": "assets/js/28.473bbf3b.js",
    "revision": "96e019696cfc574add837987a346c5da"
  },
  {
    "url": "assets/js/29.6944b056.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.5fb97a49.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.621e9320.js",
    "revision": "fb09cc4b059f39c85899cc2930a40364"
  },
  {
    "url": "assets/js/31.2128adaa.js",
    "revision": "19b83627035c9dcc2bfaf2428642dd16"
  },
  {
    "url": "assets/js/32.8ffb4d27.js",
    "revision": "9e05ac6943835f2d3e122beacfa042f5"
  },
  {
    "url": "assets/js/33.e81ce200.js",
    "revision": "39df634c6cd71b609726718c3a0a6dcf"
  },
  {
    "url": "assets/js/34.6dc1655d.js",
    "revision": "89f8a82a37cfa27624aefa4767afc682"
  },
  {
    "url": "assets/js/35.aef7d27c.js",
    "revision": "450aea53aa4893a9f5ddd7f432bf208d"
  },
  {
    "url": "assets/js/36.04abe55d.js",
    "revision": "45e4c4978f126eb5de578779c655444f"
  },
  {
    "url": "assets/js/37.e344de64.js",
    "revision": "56788d31ae62dcea29fdb0ebf2167449"
  },
  {
    "url": "assets/js/38.b34b8b33.js",
    "revision": "a528ad039e62826ba7f350cf5f394bd8"
  },
  {
    "url": "assets/js/39.0cfde4a5.js",
    "revision": "45196d0dfa9821511806f3f440282aa2"
  },
  {
    "url": "assets/js/4.2f4edbad.js",
    "revision": "2929c1e3eb803344ac6567fc2e1aa5ba"
  },
  {
    "url": "assets/js/41.4c37c8c5.js",
    "revision": "abc7e5f1cda01ab11515aa91ca34a286"
  },
  {
    "url": "assets/js/5.e256ea92.js",
    "revision": "d2b58adec537c57f4783adf3287ad1cc"
  },
  {
    "url": "assets/js/6.9b99fe25.js",
    "revision": "146123a8ffc816b48222e5226099afed"
  },
  {
    "url": "assets/js/7.b608924c.js",
    "revision": "4e0f4ed3cda7fad139f6cf6a78172085"
  },
  {
    "url": "assets/js/8.902aa697.js",
    "revision": "a657c8dcf765c7fbd9c73dcd83a4e201"
  },
  {
    "url": "assets/js/9.d83a879b.js",
    "revision": "f3c421a84f94cfd89912b2019cf334e6"
  },
  {
    "url": "assets/js/app.df112932.js",
    "revision": "de9b349c9f10510a42e1700bb47afa1f"
  },
  {
    "url": "assets/js/vendors~docsearch.5e96612f.js",
    "revision": "dfc980113611e1fcdcf471965aa423c3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6b19dedc25f03b62c514acbf8938b16b"
  },
  {
    "url": "design/index.html",
    "revision": "d38415c7151e91bf341229930865d902"
  },
  {
    "url": "index.html",
    "revision": "a83805cbda6aaa0e2f152b30050c58bd"
  },
  {
    "url": "intro/index.html",
    "revision": "c3b89104a5c83ea35f32d80098b1d49e"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "835140e2c087bc44f25d089063f40441"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "05020625dd1b73b26308d149835f1545"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0e46bc08cbd56135dd645957287182f6"
  },
  {
    "url": "software/index.html",
    "revision": "6d423d370d92dc54fc17604dd9f6e143"
  },
  {
    "url": "test/index.html",
    "revision": "6d40a13f07140060fb36fa18e50bd5d2"
  },
  {
    "url": "use cases/index.html",
    "revision": "c919b2b2c1d95894953b941e3bedf13e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
