function runCarousel() {
  // const carousel = document.querySelector(".carousel");
  const slidesContainer = document.querySelector(".slides-container");
  const carouselNav = document.querySelector(".carousel-nav");
  const carouselButtonPrev = document.querySelector(".carousel-button--prev");
  const carouselButtonNext = document.querySelector(".carousel-button--next");
  let allSlidesTemp = document.querySelectorAll(".slide");
  let firstSlide = allSlidesTemp[0].cloneNode(true);
  let lastSlide = allSlidesTemp[allSlidesTemp.length - 1].cloneNode(true);
  let navBtn;
  slidesContainer.prepend(lastSlide);
  slidesContainer.append(firstSlide);
  allSlidesTemp = null;
  firstSlide = null;
  lastSlide = null;
  const allSlides = document.querySelectorAll(".slide");
  const imageWidth = allSlides[0].getBoundingClientRect().width;
  let activeSlide = 1;
  let targetSlide = 1;
  let isHoveringSlide = false;

  for (let i = 0; i < allSlides.length; i++) {
    allSlides[i].style.left = imageWidth * i + "px";
    navBtn = document.createElement("button");
    navBtn.innerText = i;
    navBtn.classList.add("carousel-nav-button");
    // if (i === 0 || i === allSlides.length - 1) {
    //   navBtn.display.style = "none";
    // }
    carouselNav.appendChild(navBtn);
    navBtn = null;
  }
  const navButtons = document.querySelectorAll(".carousel-nav-button");
  navButtons[0].style.display = "none";
  navButtons[allSlides.length - 1].style.display = "none";
  updateCarousel();
  carouselButtonNext.addEventListener("click", nextSlide);
  carouselButtonPrev.addEventListener("click", previousSlide);
  carouselNav.addEventListener("click", (e) => {
    let clickedButton = e.target.closest("button");
    for (let i = 1; i < navButtons.length - 1; i++) {
      if (navButtons[i] === clickedButton) {
        targetSlide = i;
        break;
      }
    }
    updateCarousel();
  });
  //Auto loop slide
  slidesContainer.addEventListener("mouseleave", () => {
    isHoveringSlide=false;
  });

  slidesContainer.addEventListener("mouseenter", () => {
    isHoveringSlide = true;
  });

  function autoLoopSlides() {
    if (isHoveringSlide) {
      return;
    }
    nextSlide();
  }

  setInterval(autoLoopSlides, 5000);

  //end of Auto loop slide

  function nextSlide() {
    if (activeSlide < allSlides.length - 1) {
      targetSlide = activeSlide + 1;
      updateCarousel();
    }
  }

  function previousSlide() {
    if (activeSlide > 0) {
      targetSlide = activeSlide - 1;
      updateCarousel();
    }
  }

  function updateCarousel() {
    slidesContainer.style.transition = "transform 0.3s ease-in-out";
    slidesContainer.style.transform =
      "translateX(-" + targetSlide * imageWidth + "px)";
    navButtons[activeSlide].classList.remove("active-slide");
    navButtons[targetSlide].classList.add("active-slide");
    activeSlide = targetSlide;
    targetSlide = -1;
    if (activeSlide === 0) {
      navButtons[activeSlide].classList.remove("active-slide");
      activeSlide = allSlides.length - 2;
      navButtons[activeSlide].classList.add("active-slide");
      slidesContainer.style.transition = "none";
      slidesContainer.style.transform =
        "translateX(-" + activeSlide * imageWidth + "px)";
      //slidesContainer.style.transition = "transform 0.5s ease-in-out";
    } else if (activeSlide === allSlides.length - 1) {
      navButtons[activeSlide].classList.remove("active-slide");
      activeSlide = 1;
      navButtons[activeSlide].classList.add("active-slide");
      slidesContainer.style.transition = "none";
      slidesContainer.style.transform =
        "translateX(-" + activeSlide * imageWidth + "px)";
      //slidesContainer.style.transition = "transform 0.5s ease-in-out";
    }
  }
}
runCarousel();
