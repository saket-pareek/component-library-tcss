import '../src/tailwind.css';
import '../src/main.scss';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
