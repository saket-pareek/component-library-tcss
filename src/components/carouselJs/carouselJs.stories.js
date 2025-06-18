import html from './carousel-js.html?raw';
import './carousel-js.scss';

export default {
  title: 'components/CarouselJs',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./carouselJs.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const carouselJs = {};
