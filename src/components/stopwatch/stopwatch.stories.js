import html from './stopwatch.html?raw';
import './stopwatch.scss';

export default {
  title: 'components/Stopwatch',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./stopwatch.js').then((module) => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const stopwatch = {};
