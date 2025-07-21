export default function ageCalculator(el) {
  const calculateBtnEl = el.querySelector('.age-calculator__calculate-btn');
  const dateInputEl = el.querySelector('.age-calculator__date-input');
  const ageEl = el.querySelector('.age-calculator__age');

  const calculateAge = () => {
    const inputValue = dateInputEl.value;
    if (!inputValue) return;
    const [year, month, day] = inputValue.split('-');
    const inputYear = new Date(year, month, day).getFullYear();
    const currYear = new Date().getFullYear();
    return currYear - inputYear;
  };

  const renderCalculatedAge = e => {
    e.preventDefault();
    const age = calculateAge();
    ageEl.textContent = age;
  };

  calculateBtnEl.addEventListener('click', renderCalculatedAge);
}
