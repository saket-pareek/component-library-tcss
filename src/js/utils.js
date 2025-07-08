const createElement = markup => {
  try {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = markup;
    return wrapper.firstElementChild;
  } catch (err) {
    console.error(`Custom Err: ${err}`);
  }
};

const calculatePercentValue = (total, percent) => (percent / 100) * total;

export { createElement, calculatePercentValue };
