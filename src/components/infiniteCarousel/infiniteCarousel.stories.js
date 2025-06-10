import html from './infinite-carousel.html?raw';
import './infinite-carousel.scss';

export default {
  title: 'components/InfiniteCarousel',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./infiniteCarousel.js').then((module) => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const infiniteCarousel = {};
