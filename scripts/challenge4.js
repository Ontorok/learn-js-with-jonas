"use strict";
const getNDecimalPlace = function (num, place = 2) {
    return Math.round(num * 10 ** place) / 10 ** place;
};
function calculateTip(bill) {
    return bill >= 50 && bill <= 300
        ? getNDecimalPlace(bill * 0.15)
        : getNDecimalPlace(bill * 0.2);
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
// const tips = bills.map((bill) => calculateTip(bill));
// const totals = bills.map((bill, index) => bill + tips[index]);
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calculateTip(bills[i]);
    tips.push(tip);
    const total = bills[i] + tip;
    totals.push(total);
}
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
const average = calcAverage(totals);
console.log({ bills, tips, totals, average });
