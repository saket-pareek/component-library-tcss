import './button.scss';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label = 'button',
  onClick = null,
  color,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.style.backgroundColor = backgroundColor;
  btn.style.color = color;
  btn.addEventListener('click', onClick);
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(
    ' '
  );
  return btn;
};
