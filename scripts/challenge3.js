"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getNDecimalPlace = function (num, place) {
    return Math.round(num * 10 ** place) / 10 ** place;
};
const calculateBMI = function (person) {
    const result = person.weight / person.height ** 2;
    return getNDecimalPlace(result, 2);
};
const mark = {
    firstName: "Mark",
    lastName: "Miller",
    weight: 95,
    height: 1.88,
    calcBMI: function () {
        return calculateBMI(this);
    },
};
const john = {
    firstName: "Jonas",
    lastName: "Schedmann",
    weight: 85,
    height: 1.76,
    calcBMI: function () {
        return calculateBMI(this);
    },
};
const markBMI = calculateBMI(mark);
const johnBMI = calculateBMI(john);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
}
else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})`);
}
