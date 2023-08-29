let offset = 0;

const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset += 250;
  if (offset > 500) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  offset -= 250;
  if (offset < 0) {
    offset = 500;
  }
  sliderLine.style.left = -offset + "px";
});

navigator.serviceWorker.register("./index.js");

const CacheKey = "v0";

function cache() {
  return caches.open(CacheKey).then(
    (cache) => {
      return cache.addAll([
        "./index.html",
        "./index.css",
        "./index.js",
        "./image/583.jpg",
        "./image/1575.jpg",
        "./image/4576.jpg",
      ]);
    },
    (error) => {
      console.log(error);
    }
  );
}

self.addEventListener("install", (e) => {
  e.waitUntil(cache());
});
