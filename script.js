const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');
const PlayerColor1 = document.querySelector('.player--0');
const PlayerColor2 = document.querySelector('.player--1');
const namePLayer1 = document.querySelector('#name--0');
const namePlayer2 = document.querySelector('#name--1');
const newGame = document.querySelector('.btn--new')
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let currentScore = 0;
let currentPlayer = false;



const changeName = () => {
namePLayer1.textContent = prompt("veuillez choisir un nom");
namePlayer2.textContent = prompt("veuillez choisir un nom");
PlayerColor1.classList.toggle('player--active');
}

const switchColor = () => {
  PlayerColor1.classList.toggle('player--active');
  PlayerColor2.classList.toggle('player--active');
  
};

const init = () => {
  currentScore = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  currentPlayer2.textContent = 0;
  currentPlayer = false;
  PlayerColor1.classList.toggle('player--active');
  PlayerColor2.classList.remove('player--active');
};

const switchPlayer = () => {
  currentPlayer = !currentPlayer;
};

dice.classList.add('hidden');
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;

roll.addEventListener('click', () => {
  const calcul = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${calcul}.png`;
  dice.classList.remove('hidden');

  if (!currentPlayer) {
    if (calcul !== 1) {
      currentScore += calcul;
      currentPlayer1.textContent = currentScore;
      if (currentScore >= 10) {
        alert(`${namePLayer1.textContent} won`);
        init();
      }
    } else if (calcul === 1) {
      currentPlayer1.textContent = 0;
      currentScore = 0;
      switchPlayer();
      switchColor();
    }
  } else {
    if (calcul !== 1) {
      currentScore += calcul;
      currentPlayer2.textContent = currentScore;
      if (currentScore >= 10) {
        alert(`${namePlayer2.textContent} won`);
        init();
      }
    } else if (calcul === 1) {
      currentPlayer2.textContent = 0;
      currentScore = 0;
      switchPlayer();
      switchColor();
    }
  }
});

hold.addEventListener('click', () => {
  if (!currentPlayer) {
    scorePlayer1.textContent =
      currentScore + parseInt(scorePlayer1.textContent);
    currentPlayer1.textContent = 0;
    currentScore = 0;
    switchPlayer();
    switchColor();
  } else {
    scorePlayer2.textContent =
      currentScore + parseInt(scorePlayer2.textContent);
    currentPlayer1.textContent = 0;
    currentScore = 0;
    switchPlayer();
    switchColor();
  }
});

newGame.addEventListener('click', () => {
  init();
  changeName()
});
