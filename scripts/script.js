let imagesHide = document.querySelectorAll(".img-hide");


function imgHide() {
  imagesHide.forEach((e) => {
    e.style.display = "block";
  })
}


let slideIndex = 0;
let slides = document.querySelectorAll(".slideshow-item");
let dots = document.querySelectorAll(".dot");
let rangeBar = document.querySelector(".rangeTime");
let slideInternal;

function showSlides() {
  rangeBar.classList.remove("active");
  void rangeBar.offsetWidth;
  rangeBar.classList.add("active");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideInternal = setTimeout(showSlides, 7000);
}

showSlides();

function plusSlides(n) {
  clearTimeout(slideInternal);
  slideIndex += n - 1;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

function currentSlide(n) {
  clearTimeout(slideInternal);
  slideIndex = n - 1;
  showSlides();
}


let navLinks = document.querySelector(".nav-links");
let hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener('click', () => {
  console.log("rifki");
  navLinks.classList.toggle("active");
})

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

window.onscroll = () => {
  navLinks.classList.remove("active");
}

