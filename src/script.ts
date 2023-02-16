//#region Elements
const player0El = document.querySelector(".player--0") as HTMLElement;
const player1El = document.querySelector(".player--1") as HTMLElement;
const score0El = document.querySelector("#score--0") as HTMLParagraphElement;
const score1El = document.getElementById("score--1") as HTMLParagraphElement;
const current0El = document.getElementById("current--0") as HTMLParagraphElement;
const current1El = document.getElementById("current--1") as HTMLParagraphElement;

const diceEl = document.querySelector(".dice") as HTMLImageElement;
const btnNew = document.querySelector(".btn--new") as HTMLButtonElement;
const btnRoll = document.querySelector(".btn--roll") as HTMLButtonElement;
const btnHold = document.querySelector(".btn--hold") as HTMLButtonElement;
//#endregion

//#region variables
let scores: number[], currentScore: number, activePlayer: number, playing: boolean;
//#endregion

//#region UDF's
// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = String(0);
  score1El.textContent = String(0);
  current0El.textContent = String(0);
  current1El.textContent = String(0);

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

const generateRandomNumber = function (from: number = 1, to: number = 6): number {
  const number = Math.trunc(Math.random() * (to - from + 1)) + from;
  return number;
};

const switchPlayer = function () {
  const targetEl = document.getElementById(`current--${activePlayer}`) as HTMLParagraphElement;
  targetEl.textContent = String(0);
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//#endregion
init();

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = generateRandomNumber(1, 6);

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `./assets/dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      const targetEl = document.getElementById(`current--${activePlayer}`) as HTMLParagraphElement;
      targetEl.textContent = currentScore.toString();
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    const targetElScoreEl = document.getElementById(`score--${activePlayer}`) as HTMLParagraphElement;
    targetElScoreEl.textContent = scores[activePlayer].toString();

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document.querySelector(`.player--${activePlayer}`)?.classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`)?.classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
