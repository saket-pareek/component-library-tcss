import html from './weight-converter.html?raw';
import './weight-converter.scss';

export default {
  title: 'components/WeightConverter',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./weightConverter.js').then((module) => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const weightConverter = {};
