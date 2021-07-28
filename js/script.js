document.addEventListener('DOMContentLoaded', function () {

  let upButton = document.querySelector('.slider__controls-up');
  let downButton = document.querySelector('.slider__controls-down');
  let sideBar = document.querySelector('.slider__sidebar');
  let mainSlide = document.querySelector('.slider__img');
  let slidesCount = mainSlide.querySelectorAll('div').length;
  let activeSlideIndex = 0;
  let container = document.querySelector('.container');

  sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

  upButton.addEventListener('click', function () {
    changesSlide('up');
  });

  downButton.addEventListener('click', function () {
    changesSlide('down');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
      changesSlide('up');
    }
    else if (e.key === 'ArrowDown') {
      changesSlide('down');
    }
  });

  function changesSlide(direction) {
    if (direction === 'up') {
      activeSlideIndex++;
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
      }
    } else if (direction == 'down') {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
      }
    };

    let height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  };
});



