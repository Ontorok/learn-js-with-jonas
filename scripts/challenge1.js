"use strict";
const data1 = [1, 2, 3];
const data2 = [1, 2, 3, 4];
const printForecast = function (arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        const str = `${arr[i]}°C in ${i + 1} days`;
        temp.push(str);
    }
    const finalString = `... ${temp.join(" ... ")}`;
    return finalString;
};
printForecast(data1);
