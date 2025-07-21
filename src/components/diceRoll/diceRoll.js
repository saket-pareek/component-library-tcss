import { getRandomNumber } from '../../js/utils';

export default function diceRoll(el) {
  const diceEl = el.querySelector('.dice-roll__dice');
  const diceRollBtnEl = el.querySelector('.dice-roll__btn');
  const diceSymbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  let diceRolling;

  const renderDiceRoll = () => {
    if (diceRolling) return;
    diceRolling = true;
    const diceNum = getRandomNumber(1, 6);
    diceEl.classList.add('dice-roll__animate');
    setTimeout(() => {
      diceEl.classList.remove('dice-roll__animate');
      diceEl.textContent = diceSymbols[diceNum - 1];
      diceRolling = false;
    }, 1000);
  };

  diceRollBtnEl.addEventListener('click', renderDiceRoll);
}
