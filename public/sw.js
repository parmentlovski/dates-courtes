// // sw.js
// self.addEventListener('install', e => {

//     e.waitUntil(
//       // Après l'installation du service worker,
//       // ouvre un nouveau cache
//       caches.open('mon-cache-pwa').then(cache => {
//         // Ajoute toutes les URLs des éléments à mettre en cache

//         console.log("coucou");

//         return cache.addAll([
//           '/',
//           // '/templates/base.html.twig',
//           // '/templates/home/index.html.twig',
//           // '/templates/security/login.html.twig',
//           // '/public/build/css/app.css',
//           // '/public/build/css/app.js',
//           // '/public/img/favicon.ico',
//           // '/public/build/js/script.js',
//           // '/public/build/js/dates.js',
//           // '/public/build/js/app.js',
//           // '/public/build/js/optional.js'
//         ]);
//       })
//     );
//    });

// On install - caching the application shell
self.addEventListener("install", function(event) {
  event.waitUntil(
      caches.open("sw-cache").then(function(cache) {
        console.log("coucou1");
          // cache any static files that make up the application shell
          return cache.add("index.php");
      })
  );
});

// On network request
self.addEventListener("fetch", function(event) {
  event.respondWith(
      // Try the cache
      caches.match(event.request).then(function(response) {
        console.log("coucou2");
          //If response found return it, else fetch again
          return response || fetch(event.request);
      })
  );
});