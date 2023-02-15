//#region Elements
const player0SectionEl = document.querySelector(".player--0") as HTMLScriptElement;
const score0El = document.querySelector("#score--0") as HTMLParagraphElement;
const currentScore0El = document.querySelector("#current--0") as HTMLParagraphElement;

const player1SectionEl = document.querySelector(".player--1") as HTMLScriptElement;
const score1El = document.querySelector("#score--1") as HTMLParagraphElement;
const currentScore1El = document.querySelector("#current--1") as HTMLParagraphElement;

const diceEl = document.querySelector(".dice") as HTMLImageElement;
const rollBtnEl = document.querySelector(".btn--roll") as HTMLButtonElement;
const newBtnEl = document.querySelector(".btn--new") as HTMLButtonElement;
const holdBtnEl = document.querySelector(".btn--hold") as HTMLButtonElement;
//#endregion

//#region States
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//#endregion

//#region UDF's
const generateRandomNumber = function (from: number = 1, to: number = 6): number {
  const number = Math.trunc(Math.random() * (to - from + 1)) + from;
  return number;
};
//#endregion

//#region Initial Setup
score0El.textContent = String(0);
score1El.textContent = String(0);
diceEl.classList.add("hidden");
//#endregion

rollBtnEl.addEventListener("click", function () {
  // 1. Generate a random dice roll
  const dice = generateRandomNumber();

  // 2. Display dice
  diceEl.src = `./assets/dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  // 3. Checked for rolled 1: if true, add dice to current Score
  let targetEl = document.getElementById(`current--${activePlayer}`) as HTMLParagraphElement;
  if (dice !== 1) {
    // add dice to current Score
    currentScore += dice;

    targetEl.textContent = currentScore.toString();
  }
  // switch to next player
  else {
    targetEl.textContent = String(0);
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0SectionEl.classList.toggle("player--active");
    player1SectionEl.classList.toggle("player--active");
  }
});
