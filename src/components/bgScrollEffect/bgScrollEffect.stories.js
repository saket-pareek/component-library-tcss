import html from './bg-scroll-effect.html?raw';
import './bg-scroll-effect.scss';

export default {
  title: 'components/BgScrollEffect',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./bgScrollEffect.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const bgScrollEffect = {};
