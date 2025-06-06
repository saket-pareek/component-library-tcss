import { {{camelCase name}} }  from './{{camelCase name}}';

export default {
  title: 'components/{{pascalCase name}}',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return {{camelCase name}}({ ...args });
  },
  argTypes: {},
};

export const def = {
  args: {},
};