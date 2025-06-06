/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    './.storybook/**/*.{js,html}',
  ],
  addons: ['@storybook/addon-docs', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};
export default config;
