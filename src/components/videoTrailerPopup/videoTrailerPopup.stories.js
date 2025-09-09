import html from './video-trailer-popup.html?raw';
import './video-trailer-popup.scss';

export default {
  title: 'components/VideoTrailerPopup',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./videoTrailerPopup.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const videoTrailerPopup = {};
