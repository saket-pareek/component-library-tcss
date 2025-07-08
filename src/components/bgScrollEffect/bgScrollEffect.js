export default function bgScrollEffect(el) {
  const imgEl = el.querySelector('.bg-scroll-effect__img');

  document.addEventListener('scroll', () => {
    imgEl.style.backgroundSize = `${160 - scrollY / 12}%`;
    imgEl.style.opacity = `${100 - Math.floor(scrollY / 10)}%`;
  });
}
