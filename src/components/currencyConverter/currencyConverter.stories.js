import html from './currency-converter.html?raw';
import './currency-converter.scss';

export default {
  title: 'components/CurrencyConverter',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./currencyConverter.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const currencyConverter = {};
