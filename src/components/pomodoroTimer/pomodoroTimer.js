export default function pomodoroTimer(el) {
  const startEl = el.querySelector('.pomodoro-timer__start');
  const stopEl = el.querySelector('.pomodoro-timer__stop');
  const resetEl = el.querySelector('.pomodoro-timer__reset');
  const secondsEl = el.querySelector('.pomodoro-timer__seconds');
  const minutesEl = el.querySelector('.pomodoro-timer__minutes');

  let timer;
  let minutes = 25;
  let seconds = 60;
  let timerRunning = false;

  const startTimer = () => {
    if (timerRunning) return;
    timerRunning = true;
    timer = setInterval(() => {
      if (seconds === 60) minutes = minutes - 1;
      if (seconds > 0) seconds = seconds - 1;
      if (seconds === 0) seconds = 60;
      if (minutes < 0) resetTimer();
      renderTime();
    }, 1000);
  };

  const stopTimer = () => {
    timerRunning = false;
    clearInterval(timer);
  };

  const resetTimer = () => {
    stopTimer();
    minutes = 25;
    seconds = 60;
    renderTime();
  };

  const renderTime = () => {
    minutesEl.textContent = `${minutes}`.padStart(2, 0);
    secondsEl.textContent = `${seconds === 60 ? 0 : seconds}`.padStart(2, 0);
  };

  renderTime();

  startEl.addEventListener('click', startTimer);
  stopEl.addEventListener('click', stopTimer);
  resetEl.addEventListener('click', resetTimer);
}
