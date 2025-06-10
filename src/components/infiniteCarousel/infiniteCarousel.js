import './infinite-carousel.scss';

export const infiniteCarousel = () => {
  const logosArr = [
    {
      name: 'logo--woolworths',
      url: 'https://www.woolworths.com.au/',
    },
    {
      name: 'logo--lg',
      url: 'https://www.lg.com/',
    },
    {
      name: 'logo--audi',
      url: 'https://www.audichina.cn/',
    },
    {
      name: 'logo--datev',
      url: 'https://www.datev.com/',
    },
    {
      name: 'logo--indigo',
      url: 'https://www.goindigo.in/',
    },
    {
      name: 'logo--hm',
      url: 'https://www2.hm.com/',
    },
  ];

  const wrapper = document.createElement('div');
  wrapper.classList.add('infinite-carousel');
  const carousel = document.createElement('ul');
  carousel.classList.add('infinite-carousel__list');
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
  wrapper.appendChild(carousel);
  return wrapper;
};
