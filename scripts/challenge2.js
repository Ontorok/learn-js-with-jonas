"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getNDecimalPlace = function (num, place = 2) {
    return Math.round(num * 10 ** place) / 10 ** place;
};
function calculateTip(bill) {
    return bill >= 50 && bill <= 300
        ? getNDecimalPlace(bill * 0.15)
        : getNDecimalPlace(bill * 0.2);
}
const billValue = 40;
const tip = calculateTip(billValue);
const finalBill = billValue + tip;
const bills = [125, 555, 44];
const tips = bills.map((bill) => calculateTip(bill));
const totals = bills.map((bill, index) => bill + tips[index]);
console.log({ bills, tips, totals });
console.log(`This bill was ${billValue},\nthe tip was ${tip},\nand the total value is ${finalBill}`);
