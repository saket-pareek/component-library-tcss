import html from './image-search.html?raw';
import './image-search.scss';

export default {
  title: 'components/ImageSearch',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./imageSearch.js').then((module) => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const imageSearch = {};
