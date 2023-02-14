"use strict";
//#region Elements
const checkButtonEl = document.querySelector(".check");
const guessInputEl = document.querySelector(".guess");
const messageParaEl = document.querySelector(".message");
const numberDivEl = document.querySelector(".number");
const scoreSpanEl = document.querySelector(".score");
const bodyEl = document.querySelector("body");
//#endregion
//#region Functions
const generateRandomNumber = function (from = 1, to = 20) {
    const number = Math.trunc(Math.random() * (to - from + 1)) + from;
    return number;
};
const showMessage = function (content) {
    messageParaEl.textContent = content;
};
//#endregion
const secretNumber = generateRandomNumber();
let score = 20;
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
        bodyEl.style.backgroundColor = "#60b347";
        numberDivEl.style.width = "30rem";
    }
    //   When guess high
    else if (guessNumber > secretNumber) {
        if (score > 1) {
            showMessage("📉Too high!!!");
            score--;
            scoreSpanEl.textContent = score.toString();
        }
        else {
            showMessage("💥You lost the game!!!");
            scoreSpanEl.textContent = String(0);
        }
    }
    //   When guess low
    else if (guessNumber < secretNumber) {
        if (score > 1) {
            showMessage("📈Too Low!!!");
            score--;
            scoreSpanEl.textContent = score.toString();
        }
        else {
            showMessage("💥You lost the game!!!");
            scoreSpanEl.textContent = String(0);
        }
    }
});
