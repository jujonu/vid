var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    var slides = document.querySelectorAll('#gallery img');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  window.addEventListener('load', nextSlide);