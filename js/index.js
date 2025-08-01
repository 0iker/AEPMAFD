let currentIndex = 0;
const slides = document.querySelectorAll(".item-carrusel");
const total = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % total;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + total) % total;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000);
