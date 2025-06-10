import { {{camelCase name}} as render{{pascalCase name}} }  from './{{camelCase name}}';

export default {
  title: 'components/{{pascalCase name}}',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return render{{pascalCase name}}({ ...args });
  },
  argTypes: {},
};

export const {{camelCase name}} = {
  args: {},
};