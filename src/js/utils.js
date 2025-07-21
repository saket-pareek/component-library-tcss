const createElement = markup => {
  try {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = markup;
    return wrapper.firstElementChild;
  } catch (err) {
    console.error(`Custom Err: ${err}`);
  }
};

const fetchData = async endpoint => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Response not ok!');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const calculatePercentValue = (total, percent) => (percent / 100) * total;

const convertCelciusToFahrenheit = celcius => (+celcius * 9) / 5 + 32;
const convertCelciusToKelvin = celcius => +celcius + 273.15;
const convertFahrenheitToCelcius = fahrenheit => (+fahrenheit - 32) * (5 / 9);
const convertFahrenheitToKelvin = fahrenheit =>
  ((+fahrenheit - 32) * 5) / 9 + 273.15;
const convertKelvinToCalcius = kelvin => +kelvin - 273.15;
const convertKelvinToFahrenheit = kelvin => ((+kelvin - 32) * 5) / 9 + 273.15;

export {
  createElement,
  calculatePercentValue,
  fetchData,
  convertCelciusToFahrenheit,
  convertCelciusToKelvin,
  convertFahrenheitToCelcius,
  convertFahrenheitToKelvin,
  convertKelvinToCalcius,
  convertKelvinToFahrenheit,
};
