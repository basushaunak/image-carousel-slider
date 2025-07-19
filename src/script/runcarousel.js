function runCarousel() {
  const carousel = document.querySelector(".carousel");
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

  for (let i = 0; i < allSlides.length; i++) {
    allSlides[i].style.left = imageWidth * i + "px";
    if ((i === 0 || i === allSlides.length - 1)) {
      continue;
    }else{
      navBtn = document.createElement("button");
      navBtn.classList.add("carousel-nav-button");
      carouselNav.appendChild(navBtn);
    }
  }
  const navButtons = document.querySelectorAll(".carousel-nav-button");
  updateCarousel();
  carouselButtonNext.addEventListener('click',()=>nextSlide());
  carouselButtonPrev.addEventListener('click',()=>previousSlide());

  function nextSlide(){
    if(activeSlide<allSlides.length-1){
      targetSlide = activeSlide+1;
      updateCarousel();
    }else{
      targetSlide = allSlides.length-1;
    }
  }

  function previousSlide(){
    if(activeSlide>0){
      targetSlide = activeSlide - 1;
      updateCarousel();
    }else{
      targetSlide = 0;
    }
  }

  function updateCarousel(){
    slidesContainer.style.transform = "translateX(-" + (targetSlide*imageWidth)+"px)";
    navButtons[activeSlide-1].classList.remove("active-slide");
    navButtons[targetSlide-1].classList.add("active-slide");
    activeSlide=targetSlide;
    targetSlide = -1;
    if(activeSlide === 0){
      activeSlide = allSlides.length-1;
      navButtons[activeSlide-1].classList.add("active-slide");
    }else if(activeSlide === allSlides.length-1){
      activeSlide = 0;
      navButtons[0].classList.add("active-slide");
    }
  }
}
runCarousel();
