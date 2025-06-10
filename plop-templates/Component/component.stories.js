import html from './{{dashCase name}}.html?raw';
import './{{dashCase name}}.scss';

export default {
  title: 'components/{{pascalCase name}}',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./{{camelCase name}}.js').then((module) => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const {{camelCase name}} = {};
