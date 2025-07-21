import html from './age-calculator.html?raw';
import './age-calculator.scss';

export default {
  title: 'components/AgeCalculator',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./ageCalculator.js').then((module) => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const ageCalculator = {};
