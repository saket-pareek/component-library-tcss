import { logosArr } from './data';

export default function infiniteCarousel(el) {
  const carousel = el.querySelector('.infinite-carousel__list');
  const items = logosArr
    .map(
      ({ name, url }) =>
        `<li class="infinite-carousel__list-item"><a href="${url}" target="_blank" rel="noopener noreferrer">
          <svg class="${name}">
            <use href="/logos-sprite.svg#${name}"></use>
          </svg>
        </a></li>`
    )
    .join('');
  carousel.innerHTML = items + items + items;
  el.appendChild(carousel);
}
