function runCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselButtonPrev = document.querySelector(".carousel-button--prev");
  const carouselButtonNext = document.querySelector(".carousel-button--next");
  const slidesContainer = document.querySelector(".slides-container");
  const slideList = document.querySelectorAll(".carousel-slide");
  const carouselNav = document.querySelector(".carousel-nav");
  const imageWidth = carousel.getBoundingClientRect().width;
  let navBtn;
  for (let i = 0; i < slideList.length; i++) {
    slideList[i].style.left = imageWidth * i + "px";
    navBtn = document.createElement("button");
    navBtn.classList.add("carousel-nav-button");
    carouselNav.appendChild(navBtn);
    navBtn = null;
  }
  const carouselNavButtons = document.querySelectorAll(".carousel-nav-button");
  carouselNavButtons[0].classList.add("active-slide");
  slideList[0].classList.add("active-slide");
}

runCarousel();
// getBoundingClientRect().width
