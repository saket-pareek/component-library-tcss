export default function weightConverter(el) {
  const weightInputEl = el.querySelector('.weight-converter__weight-input');
  const computedWeightEl = el.querySelector(
    '.weight-converter__computed-weight',
  );

  let timeoutID;

  const calculateWeightInKG = pounds => (pounds / 2.205).toFixed(2);
  const clearComputedWeight = () => {
    weightInputEl.value = computedWeightEl.textContent = '';
  };

  const renderComputedWeight = e => {
    const inputValue = +e.target.value;
    computedWeightEl.textContent = calculateWeightInKG(inputValue);
    clearTimeout(timeoutID); // cancel previous timer
    timeoutID = setTimeout(clearComputedWeight, 8000);
  };

  weightInputEl.addEventListener('input', renderComputedWeight);
}
