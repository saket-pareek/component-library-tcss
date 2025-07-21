import data from './data';

export default function testimonialSlider(el) {
  let count = 1;
  let interval;

  const startSlider = () => {
    interval = setInterval(() => {
      count = count < data.length ? count + 1 : 1;
      renderTestimonial();
    }, 1000);
  };

  const stopSlider = () => clearInterval(interval);

  const renderTestimonial = () => {
    const currentSlide = data[count - 1];
    const markup = `<div class="testimonial-slider__container flex flex-col items-start gap-[25px]">
    <h2 class="mt-[20px] text-[16px]">${currentSlide.testimonial}</h2>
    <h3 class="text-[16px]">${currentSlide.fullName}</h3>
    <img
     class="absolute top-[-50px] left-[50%] w-[100px] translate-x-[-50%] transform rounded-full"
     src="${currentSlide.image}"
     alt="" />
   </div>`;
    el.innerHTML = markup;
  };

  const init = () => {
    renderTestimonial();
    startSlider();
  };

  init();

  el.addEventListener('mouseenter', stopSlider);
  el.addEventListener('mouseleave', startSlider);
}
