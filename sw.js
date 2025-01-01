const ststicCacheName = "site-static-v3";
const dynamicCacheName = "dynamic-v3";

const assets = [
  "/auth.html",
  "./src/index.js",
  "/src/auth/auth.conttroller.js",
  "/src/auth/auth.services.js",
  "/src/auth/uiauth.js",
  "/src/index.css",
  "/src/css/all.min.css",
  "./dist/output.css",
  "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Bebas+Neue&family=Teko:wght@300..700&display=swap",
];

self.addEventListener("install", (evt) => {
evt.waitUntil(
    caches.open(ststicCacheName).then((cache)=>{
        console.log('chaing')
        cache.addAll(assets)
    })
)
});

// ahmed
self.addEventListener("activate", (evt) => {
   
 caches.keys().then((keys) =>{
    console.log(keys)
 return Promise.all(keys.filter(key => key!== ststicCacheName).map(key => caches.delete(key)));
 
 })
});


self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cachRes) => {
      return cachRes || fetch(evt.request).then(fetchRes=>{
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request, fetchRes.clone());
          return fetchRes;
        });
      });
    })
  );
});
