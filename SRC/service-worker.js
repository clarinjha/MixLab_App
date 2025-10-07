self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-saudacao-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "manifest.json",
        "icone-192.png",
        "icon-512.png",
        "balacobaco.jpg",
        "cat.png",
        "diamonds.jpg",
        "dynamite.jpg",
        "eternalsunshine.jpg",
        "eternalsunshine2.jpg",
        "folklore.jpg",
        "fruto_proibido.jpg",
        "gabriela.png",
        "go!.jpeg",
        "lover.jpg",
        "nirvana.jpg",
        "paramore.jpg",
        "reputation.jpg",
        "rita_lee.jpg",
        "snooze.jpg",
        "StarBoy.jpg",
        "supershy.jpg",
        "sweetener.jpg",
        "thank_u_next.jpg",
        "touch.jpg",
        "where.jpeg",
        "script.js",

        // arquivos MP3
        "amor.mp3",
        "eternalsunshine.mp3",
        "folklore.mp3",
        "lover.mp3",
        "mania.mp3",
        "musica1.mp3",
        "musica2.mp3",
        "musica3.mp3",
        "musica4.mp3",
        "musica5.mp3",
        "musica6.mp3",
        "musica7.mp3",
        "musica8.mp3",
        "musica9.mp3",
        "reputation.mp3",
        "ritalee.mp3",
        "sweetener.mp3",
        "thankunext.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});