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

export { createElement, calculatePercentValue, fetchData };
