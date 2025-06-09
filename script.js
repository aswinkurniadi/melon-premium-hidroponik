document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 50, behavior: 'smooth' });
    }
  });
});

const slider = document.querySelector('.testimonials-slider');
const testimonialWidth = 320; // 300px width + 20px gap approx
let scrollPosition = 0;

function slideTestimonials() {
  if (scrollPosition + testimonialWidth >= slider.scrollWidth) {
    scrollPosition = 0; // balik ke awal
  } else {
    scrollPosition += testimonialWidth;
  }
  slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

setInterval(slideTestimonials, 3000);


// galeri
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const galleryImgs = document.querySelectorAll(".gallery img");

  let currentIndex = 0;

  function showModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = galleryImgs[index].src;
    captionText.textContent = galleryImgs[index].alt;
  }

  galleryImgs.forEach((img, index) => {
    img.addEventListener("click", () => showModal(index));
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImgs.length;
    showModal(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
    showModal(currentIndex);
  });

  // Klik luar gambar untuk tutup
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });



  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
