"use strict";
const mark = {
    weight: 95,
    height: 1.88,
};
const john = {
    weight: 85,
    height: 1.76,
};
function getNDecimalPlace(num, place) {
    return Math.round(num * 10 ** place) / 10 ** place;
}
function calculateBMI(person) {
    const result = person.weight / person.height ** 2;
    return getNDecimalPlace(result, 2);
}
const markBMI = calculateBMI(mark);
const johnBMI = calculateBMI(john);
const BMIComparison = markBMI > johnBMI ? `Mark's BMI is Higher` : `John's BMI is Higher `;
