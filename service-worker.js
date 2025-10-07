self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-saudacao-cache").then(cache => {
      return cache.addAll([
        "icone-192.png",
        "icon-512.png",
        "img/balacobaco.jpg",
        "img/cat.png",
        "img/diamonds.jpg",
        "img/dynamite.jpg",
        "img/eternalsunshine.jpg",
        "img/eternalsunshine2.jpg",
        "img/folklore.jpg",
        "img/fruto_proibido.jpg",
        "img/gabriela.png",
        "img/go!.jpeg",
        "img/lover.jpg",
        "img/nirvana.jpg",
        "img/paramore.jpg",
        "img/reputation.jpg",
        "img/rita_lee.jpg",
        "img/snooze.jpg",
        "img/StarBoy.jpg",
        "img/supershy.jpg",
        "img/sweetener.jpg",
        "img/thank_u_next.jpg",
        "img/touch.jpg",
        "img/where.jpeg",

        // Arquivos MP3
        "mp3/amor.mp3",
        "mp3/eternalsunshine.mp3",
        "mp3/folklore.mp3",
        "mp3/lover.mp3",
        "mp3/mania.mp3",
        "mp3/musica1.mp3",
        "mp3/musica2.mp3",
        "mp3/musica3.mp3",
        "mp3/musica4.mp3",
        "mp3/musica5.mp3",
        "mp3/musica6.mp3",
        "mp3/musica7.mp3",
        "mp3/musica8.mp3",
        "mp3/musica9.mp3",
        "mp3/reputation.mp3",
        "mp3/ritalee.mp3",
        "mp3/sweetener.mp3",
        "mp3/thankunext.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});