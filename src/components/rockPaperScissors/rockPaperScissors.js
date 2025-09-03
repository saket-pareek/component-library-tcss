export default function rockPaperScissors(el) {
  const btnEls = el.querySelectorAll('.rock-paper-scissors__btn');
  const msgEl = el.querySelector('.rock-paper-scissors__message');
  const userCountEl = el.querySelector('.rock-paper-scissors__user-wins');
  const ComputerCountEl = el.querySelector(
    '.rock-paper-scissors__computer-wins',
  );

  let message = '';
  let userWins = 0;
  let computerWins = 0;

  const options = ['rock', 'paper', 'scissors'];

  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  const getComputerChoice = () => options[+Math.trunc(Math.random() * 3)];

  const getWinner = (userSelection, computerSelection) => {
    if (userSelection === computerSelection) return 'tie';
    return rules[userSelection] === computerSelection ? 'user' : 'computer';
  };

  const render = message => {
    msgEl.textContent = message;
    userCountEl.textContent = userWins;
    ComputerCountEl.textContent = computerWins;
  };

  const handleUserSelection = e => {
    const userSelection = e.target.dataset.name;
    const computerSelection = getComputerChoice();
    const winner = getWinner(userSelection, computerSelection);
    if (winner === 'tie') {
      message = `it's a tie!`;
    } else if (winner === 'user') {
      userWins++;
      message = `You win! ${userSelection} beats ${computerSelection}`;
    } else {
      computerWins++;
      message = `You lose! ${computerSelection} beats ${userSelection}!`;
    }

    render(message);
  };

  render('Make your choice!');
  btnEls.forEach(el => el.addEventListener('click', handleUserSelection));
}
