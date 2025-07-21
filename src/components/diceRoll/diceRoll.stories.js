import html from './dice-roll.html?raw';
import './dice-roll.scss';

export default {
  title: 'components/DiceRoll',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./diceRoll.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const diceRoll = {};
