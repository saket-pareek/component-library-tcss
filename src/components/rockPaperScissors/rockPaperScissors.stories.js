import html from './rock-paper-scissors.html?raw';
import './rock-paper-scissors.scss';

export default {
  title: 'components/RockPaperScissors',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./rockPaperScissors.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const rockPaperScissors = {};
