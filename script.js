const hamburgerButton = document.querySelector('.hamburger-button');
const navLinks = document.querySelector('.nav-links');


hamburgerButton.addEventListener('click', () => {
  // Переключаем класс для анимации кнопки
  hamburgerButton.classList.toggle('open');
  
  // Показываем/скрываем меню
  navLinks.style.display = 
    navLinks.style.display === 'block' ? 'none' : 'block';
});

function showImage(imageSrc) {
  const imgElement = document.getElementById('displayedImage');
  imgElement.src = imageSrc;
}














const slider = document.getElementById('image-slider');
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let currentIndex = 0;

// Запоминаем начальную точку касания
let startX = 0;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX; // Разница координат

  // Порог для распознавания свайпа (в пикселях)
  if (Math.abs(diff) > 30) {
    if (diff > 0) {
      // Свайп вправо → переходим к следующему изображению
      showNext();
    } else {
      // Свайп влево → переходим к предыдущему изображению
      showPrev();
    }
  }
});

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function updateSlider() {
  const offset = currentIndex * 100; // % от ширины слайда
  slides.style.transform = `translateX(-${offset}%)`;
}

// Инициализация
updateSlider();

