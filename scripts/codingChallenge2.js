"use strict";
const mark1 = {
    weight: 95,
    height: 1.88,
};
const john1 = {
    weight: 85,
    height: 1.76,
};
function getNDecimalPlace1(num, place) {
    return Math.round(num * 10 ** place) / 10 ** place;
}
function calculateBMI1(person) {
    const result = person.weight / person.height ** 2;
    return getNDecimalPlace1(result, 2);
}
const mark1BMI = calculateBMI1(mark1);
const john1BMI = calculateBMI1(john1);
if (mark1BMI > john1BMI) {
    console.log(`Mark's BMI(${mark1BMI}) is higher than John's BMI(${john1BMI})`);
}
else {
    console.log(`John's BMI(${john1BMI}) is higher than Mark's BMI(${mark1BMI})`);
}
