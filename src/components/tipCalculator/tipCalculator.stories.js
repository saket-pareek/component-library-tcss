import html from './tip-calculator.html?raw';
import './tip-calculator.scss';

export default {
  title: 'components/TipCalculator',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./tipCalculator.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const tipCalculator = {};
