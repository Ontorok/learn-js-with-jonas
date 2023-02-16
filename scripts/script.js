"use strict";
//#region Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//#endregion
//#region variables
let scores, currentScore, activePlayer, playing;
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
const generateRandomNumber = function (from = 1, to = 6) {
    const number = Math.trunc(Math.random() * (to - from + 1)) + from;
    return number;
};
const switchPlayer = function () {
    const targetEl = document.getElementById(`current--${activePlayer}`);
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
            const targetEl = document.getElementById(`current--${activePlayer}`);
            targetEl.textContent = currentScore.toString();
        }
        else {
            // Switch to next player
            switchPlayer();
        }
    }
});
btnHold.addEventListener("click", function () {
    var _a, _b;
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
        const targetElScoreEl = document.getElementById(`score--${activePlayer}`);
        targetElScoreEl.textContent = scores[activePlayer].toString();
        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            diceEl.classList.add("hidden");
            (_a = document.querySelector(`.player--${activePlayer}`)) === null || _a === void 0 ? void 0 : _a.classList.add("player--winner");
            (_b = document.querySelector(`.player--${activePlayer}`)) === null || _b === void 0 ? void 0 : _b.classList.remove("player--active");
        }
        else {
            // Switch to the next player
            switchPlayer();
        }
    }
});
btnNew.addEventListener("click", init);
