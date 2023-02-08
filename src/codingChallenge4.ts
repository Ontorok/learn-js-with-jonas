function getNDecimalPlace4(num: number, place: number = 2): number {
  return Math.round(num * 10 ** place) / 10 ** place;
}

function calculateTip(bill: number) {
  return bill >= 50 && bill <= 300
    ? getNDecimalPlace4(bill * 0.15)
    : getNDecimalPlace4(bill * 0.2);
}

const billValue: number = 40;
const tip = calculateTip(billValue);
const finalBill = billValue + tip;

console.log(
  `This bill was ${billValue},\nthe tip was ${tip},\nand the total value is ${finalBill}`
);
