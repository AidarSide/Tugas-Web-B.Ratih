let currentIndex = 0;
let intervalId;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  currentIndex = index;

  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.slide').length;
  showSlide(currentIndex);
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000); // Ganti 3000 dengan interval waktu yang diinginkan (dalam milidetik)
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

// Mulai slider otomatis ketika halaman dimuat
startAutoSlide();
