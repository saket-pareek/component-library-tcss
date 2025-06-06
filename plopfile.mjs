export default function (plop) {
  // controller generator
  plop.setGenerator('UI Component', {
    description: 'UI Component Generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name to generate the UI Component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{camelCase name}}/{{camelCase name}}.stories.js',
        templateFile: 'plop-templates/component/Component.stories.js',
      },
      {
        type: 'add',
        path: 'src/components/{{camelCase name}}/{{camelCase name}}.js',
        templateFile: 'plop-templates/component/Component.js',
      },
      {
        type: 'add',
        path: 'src/components/{{camelCase name}}/{{dashCase name}}.scss',
        templateFile: 'plop-templates/component/component.scss',
      },
    ],
  });

  plop.setGenerator('React Component', {
    description: 'React Component Generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name to generate the React Component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/react-components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'plop-templates/react-cmp/component.stories.js',
      },
      {
        type: 'add',
        path: 'src/react-components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/react-cmp/component.js',
      },
      {
        type: 'add',
        path: 'src/react-components/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/react-cmp/Component.jsx',
      },
      {
        type: 'add',
        path: 'src/react-components/{{pascalCase name}}/{{dashCase name}}.scss',
        templateFile: 'plop-templates/react-cmp/component.scss',
      },
      {
        type: 'modify',
        path: 'src/main.scss',
        pattern:
          /(\/\/ import core component end \| do not remove see, plopfile\.mjs)/,
        template:
          "@import './react-components/{{pascalCase name}}/{{pascalCase name}}';\n$1",
      },
    ],
  });
}
