import { calculatePercentValue } from '../../js/utils';

export default function tipCalculator(el) {
  const billAmountEl = el.querySelector('.tip-calculator__bill-amount');
  const tipPercentageEl = el.querySelector('.tip-calculator__tip-percentage');
  const btnEl = el.querySelector('.tip-calculator__btn');
  const totalEl = el.querySelector('.tip-calculator__total');

  const handleCalculate = e => {
    e.preventDefault();
    const billAmount = +billAmountEl.value;
    const tipPercentage = +tipPercentageEl.value;
    const tip = calculatePercentValue(billAmount, tipPercentage);
    totalEl.textContent = (billAmount + tip).toFixed(2);
  };

  btnEl.addEventListener('click', handleCalculate);
}
