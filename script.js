let currentSlide = 0;
const slides = document.querySelectorAll('.slide');  // Slide'ları seçiyoruz
const totalSlides = slides.length;

// Güncel slide'ı göstermek için fonksiyon
function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');  // Önceki active sınıfını kaldırıyoruz
    if (index === currentSlide) {
      slide.classList.add('active');  // Geçerli slide'ı aktif yapıyoruz
    }
  });
}

// Sonraki slide'a geçmek için fonksiyon
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;  // Sonraki slide'a geçiyoruz
  updateSlider();
}

// Önceki slide'a geçmek için fonksiyon
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Önceki slide'a geçiyoruz
  updateSlider();
}

// İlk güncelleme işlemi
updateSlider();

// Yıldız animasyonu
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach((star) => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}

animate();