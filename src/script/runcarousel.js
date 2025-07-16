function runCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselButtonPrev = document.querySelector(".carousel-button--prev");
  const carouselButtonNext = document.querySelector(".carousel-button--next");
  const slidesContainer = document.querySelector(".slides-container");
  const slideList = document.querySelectorAll(".carousel-slide");
  const carouselNav = document.querySelector(".carousel-nav");
  const imageWidth = carousel.getBoundingClientRect().width;
  let navBtn;
  let currentSlide = 0;
  let targetSlide = -1;
  for (let i = 0; i < slideList.length; i++) {
    slideList[i].style.left = imageWidth * i + "px";
    navBtn = document.createElement("button");
    navBtn.classList.add("carousel-nav-button");
    carouselNav.appendChild(navBtn);
    navBtn = null;
  }
  const carouselNavButtons = document.querySelectorAll(".carousel-nav-button");
  carouselNavButtons[currentSlide].classList.add("active-slide");
  slideList[currentSlide].classList.add("active-slide");

  slideList[4].style.left = "0px"
  
  slidesContainer.style.left = "-"+imageWidth+"px";

  console.log(slidesContainer.style.left);
}

runCarousel();
// getBoundingClientRect().width
