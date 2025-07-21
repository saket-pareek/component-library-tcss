import { fetchData } from '../../js/utils';
import { URL } from './const';

export default function currencyConverter(el) {
  const baseCurrEl = el.querySelector('.currency-converter__base-curr');
  const targetCurrEl = el.querySelector('.currency-converter__target-curr');
  const baseAmountEl = el.querySelector('.currency-converter__base-amount');
  const targetAmountEl = el.querySelector('.currency-converter__target-amount');
  const convertedAmountEl = el.querySelector(
    '.currency-converter__converted-amount',
  );

  const renderCurrencyLists = async () => {
    const data = await fetchData(`${URL}/latest/USD`);
    const currencyList = data.conversion_rates;
    const arr = Object.keys(currencyList);
    const baseMarkup = arr.map(el => `<option>${el}</option>`).join('');
    const targetMarkup = arr
      .map(el => `<option ${el === 'INR' ? 'selected' : ''}>${el}</option>`)
      .join('');
    baseCurrEl.innerHTML = baseMarkup;
    targetCurrEl.innerHTML = targetMarkup;
  };

  const renderCurrencyRates = async (base, target, amount) => {
    const data = await fetchData(`${URL}/pair/${base}/${target}/${amount}`);
    baseAmountEl.value = amount;
    targetAmountEl.textContent = data.conversion_result.toFixed(2);
    convertedAmountEl.textContent = `${amount} ${base} = ${data.conversion_result} ${target}`;
  };

  const triggerConversion = () => {
    const baseCurr = baseCurrEl.options[baseCurrEl.selectedIndex].text;
    const targetCurr = targetCurrEl.options[targetCurrEl.selectedIndex].text;
    const baseAmount = baseAmountEl.value;
    renderCurrencyRates(baseCurr, targetCurr, baseAmount);
  };

  renderCurrencyLists();
  renderCurrencyRates('USD', 'INR', 1);
  const triggerEls = [baseCurrEl, targetCurrEl, baseAmountEl];
  triggerEls.forEach(el => el.addEventListener('change', triggerConversion));
}
