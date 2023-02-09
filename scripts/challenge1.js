"use strict";
const dolphins = {
    first: 44,
    second: 23,
    third: 71,
};
const koalas = {
    first: 65,
    second: 54,
    third: 49,
};
const getNDecimalPlace = function (num, place = 2) {
    return Math.round(num * 10 ** place) / 10 ** place;
};
const calcAverage = function (team) {
    const result = (team.first + team.second + team.third) / 3;
    return getNDecimalPlace(result);
};
const checkWinner = function (dolphinsScore, koalasScore) {
    if (dolphinsScore >= 2 * koalasScore) {
        console.log(`Dolphins win (${dolphinsScore} vs. ${koalasScore})`);
    }
    else if (koalasScore >= 2 * dolphinsScore) {
        console.log(`Koalas win (${koalasScore} vs. ${dolphinsScore})`);
    }
    else {
        console.log("No team wins");
    }
};
const dolphinsAvg = calcAverage(dolphins);
const koalsAvg = calcAverage(koalas);
checkWinner(dolphinsAvg, koalsAvg);
