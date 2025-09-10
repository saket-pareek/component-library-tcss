import html from './override-styles.html?raw';
import './override-styles.scss';

export default {
  title: 'components/OverrideStyles',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./overrideStyles.js').then((module) => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const overrideStyles = {};
