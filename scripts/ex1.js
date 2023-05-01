const slideWrapper = document.querySelector('.carouselItems');
const slides = Array.from(slideWrapper.children);
  console.log(slides);
const nextBtn = document.querySelector('.rightBtn');
const prevBtn = document.querySelector('.leftBtn');
const dotsNav = document.querySelector('.carouselNav');
const dots = Array.from(dotsNav.children);
  console.log(dots);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

// convert above to a named function
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// next button
// nextBtn.addEventListener('click', e => {
//   const currentSlide = slideWrapper.querySelector('.currentSlide');
//   const nextSlide = currentSlide.nextElementSibling;
//   const amountToMove = nextSlide.style.left;
//   console.log(amountToMove);
//   slideWrapper.style.transform = 'translateX(-' + amountToMove + ')';
//   currentSlide.classList.remove('currentSlide');
//   nextSlide.classList.add('currentSlide');
// });

// Reusable functions ---
const moveToSlide = (slideWrapper, currentSlide, targetSlide) => {
  slideWrapper.style.transform =  'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('currentSlide');
  targetSlide.classList.add('currentSlide');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('currentSlide');
  targetDot.classList.add('currentSlide');
}

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
  if(targetIndex === 0) {
    prevBtn.classList.add('isHidden');
    nextBtn.classList.remove('isHidden');
  } else if (targetIndex === slides.length - 1) {
    prevBtn.classList.remove('isHidden');
    nextBtn.classList.add('isHidden');
  } else {
    prevBtn.classList.remove('isHidden');
    nextBtn.classList.remove('isHidden');
  }
}

// -- end reusbale functions

// next button
nextBtn.addEventListener('click', e => {
  const currentSlide = slideWrapper.querySelector('.currentSlide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.currentSlide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  moveToSlide(slideWrapper, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
});

//previous button
prevBtn.addEventListener('click', e => {
  const currentSlide = slideWrapper.querySelector('.currentSlide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.currentSlide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  moveToSlide(slideWrapper, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
});

//  dot indicators
dotsNav.addEventListener('click', e => {
  // const targetDot = e;
  // console.log(e.target);
  const targetDot = e.target.closest('button');

  console.log('test1');
  // prevent the code from workign if its not a button
  if(!targetDot) return;
  console.log('test2');
  const currentSlide = slideWrapper.querySelector('.currentSlide');
  const currentDot = dotsNav.querySelector('.currentSlide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  console.log(targetIndex);
  const targetSlide = slides[targetIndex];
  console.log(targetSlide);
  moveToSlide(slideWrapper, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
  
})

