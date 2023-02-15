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
let player0currentScore = 0;
let player1currentScore = 0;
let activePlayer = 0;
//#endregion

//#region UDF's
const generateRandomNumber = function (from: number = 1, to: number = 6): number {
  const number = Math.trunc(Math.random() * (to - from + 1)) + from;
  return number;
};
//#endregion

//#region Initial Setup
score0El.textContent = String(player0currentScore);
score1El.textContent = String(player1currentScore);
diceEl.classList.add("hidden");
//#endregion

rollBtnEl.addEventListener("click", function () {
  // 1. Generate a random dice roll
  const randomRoll = generateRandomNumber();

  // 2. Display dice
  diceEl.src = `./assets/dice-${randomRoll}.png`;
  diceEl.classList.remove("hidden");

  // 3. Checked for rolled 1: if true, add dice to current Score
  if (randomRoll !== 1) {
    activePlayer === 0 ? (player0currentScore += randomRoll) : (player1currentScore += randomRoll);
    const targetPlayer = activePlayer === 0 ? currentScore0El : currentScore1El;
    const currentPlayerCurrentScore = activePlayer === 0 ? player0currentScore : player1currentScore;
    targetPlayer.textContent = currentPlayerCurrentScore.toString();
  }
  // switch to next player
  else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    // currentScore = 0;
    // currentScore0El.textContent = currentScore.toString();
    // player0SectionEl.classList.remove("player--active");
    // player1SectionEl.classList.add("player--active");
  }
});
