'use strict';

const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let currentScore = 0;

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
dice.classList.add('hidden');

document.querySelector('.btn--roll').addEventListener('click', () => {
  let calcul = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${calcul}.png`;
  dice.classList.remove('hidden');

  if (dice !== 1) {
    currentPlayer1.textContent = `${calcul}`;
    // currentScore += dice;
    // currentPlayer1.textContent = currentScore;
  }
});

document.querySelector('btn--hold').addEventListener('click', () => {});

document.querySelector('.btn--new').addEventListener('click', () => {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  currentPlayer2.textContent = 0;
});
