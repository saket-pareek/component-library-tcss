import {
  convertCelciusToFahrenheit,
  convertCelciusToKelvin,
  convertFahrenheitToCelcius,
  convertFahrenheitToKelvin,
  convertKelvinToCalcius,
  convertKelvinToFahrenheit,
} from '../../js/utils';

export default function temperatureConverter(el) {
  const fahrenheitEl = el.querySelector('.temperature-converter__fahrenheit');
  const celciusEl = el.querySelector('.temperature-converter__celcius');
  const kelvinEl = el.querySelector('.temperature-converter__kelvin');

  const convertTemperature = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    switch (inputName) {
      case 'celcius': {
        fahrenheitEl.value = convertCelciusToFahrenheit(inputValue).toFixed(2);
        kelvinEl.value = convertCelciusToKelvin(inputValue).toFixed(2);
        break;
      }
      case 'fahrenheit': {
        celciusEl.value = convertFahrenheitToCelcius(inputValue).toFixed(2);
        kelvinEl.value = convertFahrenheitToKelvin(inputValue).toFixed(2);
        break;
      }
      case 'kelvin': {
        celciusEl.value = convertKelvinToCalcius(inputValue).toFixed(2);
        fahrenheitEl.value = convertKelvinToFahrenheit(inputValue).toFixed(2);
        break;
      }
      default:
        break;
    }
  };

  [fahrenheitEl, celciusEl, kelvinEl].forEach(el =>
    el.addEventListener('change', convertTemperature),
  );
}
