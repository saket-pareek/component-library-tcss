import html from './temperature-converter.html?raw';
import './temperature-converter.scss';

export default {
  title: 'components/TemperatureConverter',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./temperatureConverter.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const temperatureConverter = {};
