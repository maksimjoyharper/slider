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
