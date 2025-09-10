import data from './data';

export default function tabsSection(el) {
  const imageEl = el.querySelector('.tabs__image');
  const headerEl = el.querySelector('.tabs__header');
  const titleEl = el.querySelector('.tabs__title');
  const textEl = el.querySelector('.tabs__text');

  function init() {
    const tabsMarkup = data.map(({ id, title }) => {
      const isActive = id === 1 ? 'tabs__tab--active' : '';
      return `<button class="${`tabs__tab ${isActive}`}" data-tab="${id}">${title}</button>`;
    });

    const firstTab = data.at(0);
    renderContent(firstTab);
    headerEl.insertAdjacentHTML('beforeend', tabsMarkup.join(''));
  }

  function renderContent(tab) {
    imageEl.src = tab.img;
    titleEl.textContent = tab.title;
    textEl.textContent = tab.text;
  }

  headerEl.addEventListener('click', e => {
    const target = e.target.closest('.tabs__tab');
    if (!target) return;
    const targetSiblings = target.parentNode.children;
    Array.from(targetSiblings).forEach(el =>
      el.classList.remove('tabs__tab--active'),
    );
    target.classList.add('tabs__tab--active');
    renderContent(data[Number(target.dataset.tab) - 1]);
  });

  init();
}
