import html from './tabs-section.html?raw';
import './tabs-section.scss';

export default {
  title: 'components/TabsSection',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./tabsSection.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const tabsSection = {};
