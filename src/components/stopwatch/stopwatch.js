export default function stopwatch(el) {
  const timerEl = el.querySelector('.stopwatch__timer');
  const startEl = el.querySelector('.stopwatch__btn--start');
  const stopEl = el.querySelector('.stopwatch__btn--stop');
  const resetEl = el.querySelector('.stopwatch__btn--reset');

  let timerInterval = null;
  let hour = 0,
    min = 0,
    sec = 0,
    ms = 0;

  const startTimer = () => {
    if (ms >= 99) {
      ms = 0;
      sec++;
    }
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      hour++;
    }
    ms++;
    renderTime();
  };

  const handleStart = () => {
    startEl.disabled = true;
    stopEl.disabled = false;
    timerInterval = setInterval(startTimer, 10);
  };

  const handleStop = () => {
    startEl.disabled = false;
    stopEl.disabled = true;
    clearInterval(timerInterval);
    timerInterval = null;
  };

  const handleReset = () => {
    hour = min = sec = ms = 0;
    handleStop();
    renderTime();
  };

  const renderTime = () => {
    const paddedHour = String(hour).padStart(2, '0');
    const paddedMin = String(min).padStart(2, '0');
    const paddedSec = String(sec).padStart(2, '0');
    const paddedMS = String(ms).padStart(2, '0');
    timerEl.textContent = `${paddedHour}:${paddedMin}:${paddedSec}${Number(paddedMS) ? `.${paddedMS}` : ''}`;
  };

  renderTime();

  startEl.addEventListener('click', handleStart);
  stopEl.addEventListener('click', handleStop);
  resetEl.addEventListener('click', handleReset);
}
