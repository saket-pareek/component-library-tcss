const createElement = (markup) => {
  try {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = markup;
    return wrapper.firstElementChild;
  } catch (err) {
    console.error(`Custom Err: ${err}`);
  }
};

export { createElement };
