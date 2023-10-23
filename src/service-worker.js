// public/service-worker.js

const CACHE_NAME = 'my-app-cache';

// Define a regular expression to match URLs in the folder you want to cache
const folderToCacheRegex = /^\/assets\//; // This example matches everything under the /static/ folder

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Use the fetch API to get a list of all the resources to cache
        return fetch('/manifest.json') // Change to a file in your project that lists all the resources
          .then(response => response.json())
          .then((resources) => {
            return cache.addAll(resources.filter(url => folderToCacheRegex.test(url)));
          });
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
