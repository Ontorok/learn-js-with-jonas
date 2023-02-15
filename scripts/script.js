"use strict";
//#region Elements
const checkButtonEl = document.querySelector(".check");
const guessInputEl = document.querySelector(".guess");
const messageParaEl = document.querySelector(".message");
const numberDivEl = document.querySelector(".number");
const scoreSpanEl = document.querySelector(".score");
const bodyEl = document.querySelector("body");
const againButtonEl = document.querySelector(".again");
const highScoreSpanEl = document.querySelector(".highscore");
//#endregion
//#region Functions
const generateRandomNumber = function (from = 1, to = 20) {
    const number = Math.trunc(Math.random() * (to - from + 1)) + from;
    return number;
};
const showMessage = function (content) {
    messageParaEl.textContent = content;
};
const reset = function () {
    score = 20;
    secretNumber = generateRandomNumber();
    guessInputEl.value = "";
    numberDivEl.textContent = "?";
    numberDivEl.style.width = "15rem";
    scoreSpanEl.textContent = score.toString();
    messageParaEl.textContent = "Start guessing...";
    bodyEl.classList.remove("color-green");
};
//#endregion
let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;
checkButtonEl.addEventListener("click", function () {
    const guessNumber = +guessInputEl.value;
    const hasValue = !!guessInputEl.value;
    // When there is no input
    if (!hasValue) {
        showMessage("⛔ No Number");
    }
    //   When win
    else if (guessNumber === secretNumber) {
        showMessage("🏆Correct Guess!!!");
        numberDivEl.textContent = secretNumber.toString();
        bodyEl.classList.add("color-green");
        numberDivEl.style.width = "30rem";
        highscore = highscore > score ? highscore : score;
        highScoreSpanEl.textContent = highscore.toString();
    }
    // Refactring
    else {
        const message = guessNumber > secretNumber ? "📉Too high!!!" : "📈Too Low!!!";
        if (score > 1) {
            showMessage(message);
            score--;
            scoreSpanEl.textContent = score.toString();
        }
        else {
            showMessage("💥You lost the game!!!");
            scoreSpanEl.textContent = String(0);
        }
    }
});
againButtonEl.addEventListener("click", function () {
    reset();
});
