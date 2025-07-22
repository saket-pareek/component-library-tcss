import html from './pomodoro-timer.html?raw';
import './pomodoro-timer.scss';

export default {
  title: 'components/PomodoroTimer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./pomodoroTimer.js').then(module => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const pomodoroTimer = {};
