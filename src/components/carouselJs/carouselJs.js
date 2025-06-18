export default function carouselJS(el) {
  const slideEl = el.querySelectorAll('.carousel-js__slide');
  const prevEl = el.querySelector('.carousel-js__prev');
  const nextEl = el.querySelector('.carousel-js__next');
  const navContainerEl = el.querySelector('.carousel-js__nav-container');

  let currSlide = 0;
  const maxSlide = slideEl.length;

  const generateDots = () => {
    const markup = Array.from(slideEl)
      .map(
        (_, i) =>
          `<li data-slide='${i}' class='carousel-js__nav-dot cursor-pointer h-[10px] w-[10px] rounded-full bg-gray-300'></li>`,
      )
      .join('');

    navContainerEl.insertAdjacentHTML('beforeend', markup);
  };

  const showActiveSlide = slide => {
    const navDots = el.querySelectorAll('.carousel-js__nav-dot');
    navDots.forEach(item => item.classList.remove('active'));
    const activeNavDot = el.querySelector(
      `.carousel-js__nav-dot[data-slide='${slide}']`,
    );
    activeNavDot.classList.add('active');
  };

  const goToSlide = n => {
    // i - currSlide * 100

    // currSlide === 0
    // 0 - 0 * 100 = 0%
    // 1 - 0 * 100 = 100%
    // 2 - 0 * 100 = 200%
    // 3 - 0 * 100 = 300%

    // currSlide === 1
    // 0 - 1 * 100 = -100%
    // 1 - 1 * 100 = 0%
    // 2 - 1 * 100 = 100%
    // 3 - 1 * 100 = 200%

    // currSlide === 2
    // 0 - 2 * 100 = -200%
    // 1 - 2 * 100 = -100%
    // 2 - 2 * 100 = 0%
    // 3 - 2 * 100 = 100%

    // currSlide === 3
    // 0 - 3 * 100 = -200%
    // 1 - 3 * 100 = -100%
    // 2 - 3 * 100 = 0%
    // 3 - 3 * 100 = 100%

    slideEl.forEach(
      (el, i) => (el.style.transform = `translateX(${(i - n) * 100}%)`),
    );
  };

  const showPrevSlide = () => {
    if (currSlide <= 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }
    goToSlide(currSlide);
    showActiveSlide(currSlide);
  };

  const showNextSlide = () => {
    if (currSlide >= maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    goToSlide(currSlide);
    showActiveSlide(currSlide);
  };

  const init = () => {
    goToSlide(currSlide);
    generateDots();
    showActiveSlide(currSlide);
  };

  const handleArrowKeys = e => {
    if (e.key === 'ArrowLeft') showPrevSlide();
    if (e.key === 'ArrowRight') showNextSlide();
  };

  const handleNavDot = e => {
    const target = e.target.closest('.carousel-js__nav-dot');
    if (!target) return;
    currSlide = +target.dataset.slide;
    goToSlide(currSlide);
    showActiveSlide(currSlide);
  };

  init();

  prevEl.addEventListener('click', showPrevSlide);
  nextEl.addEventListener('click', showNextSlide);
  document.addEventListener('keydown', handleArrowKeys);
  navContainerEl.addEventListener('click', handleNavDot);
}
