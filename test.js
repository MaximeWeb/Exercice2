const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');
const PlayerColor1 = document.querySelector('.player--0');
const PlayerColor2 = document.querySelector('.player--1');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let currentScore = 0;
let currentPlayer = false;
let playing = true;

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = () => {
  currentPlayer = !currentPlayer;
};

const switchColor = () => {
  PlayerColor1.classList.toggle('player--active');
  PlayerColor2.classList.toggle('player--active');
};

const init = () => {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  currentPlayer2.textContent = 0;
  currentScore = 0;
  currentPlayer = false;
};

roll.addEventListener('click', () => {
  const calcul = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');

  dice.src = `dice-${calcul}.png`;
  if (!currentPlayer) {
    if (calcul !== 1) {
      currentScore += calcul;
      currentPlayer1.textContent = currentScore;
    } else if (calcul === 1) {
      currentPlayer1.textContent = 0;
      currentScore = 0;
      switchColor();
      switchPlayer();
    }
  } else {
    if (calcul !== 1) {
      currentScore += calcul;
      currentPlayer2.textContent = currentScore;
    } else if (calcul === 1) {
      currentPlayer2.textContent = 0;
      currentScore = 0;
      switchColor();
      switchPlayer();
    }
  }
});

hold.addEventListener('click', () => {
  if (!currentPlayer) {
    scorePlayer1.textContent =
      currentScore + parseInt(scorePlayer1.textContent);
    currentPlayer1.textContent = 0;
    currentScore = 0;
    switchColor();
    switchPlayer();
  } else {
    scorePlayer2.textContent =
      currentScore + parseInt(scorePlayer2.textContent);
    currentPlayer2.textContent = 0;
    currentScore = 0;
    switchColor();
    switchPlayer();
  }
});

document.querySelector('.btn--new').addEventListener('click', () => {
  init();
});
