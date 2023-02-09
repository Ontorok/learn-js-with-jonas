"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nasir = {
    firstName: "Nasir",
    lastName: "Ahmed",
    birthYear: 1993,
    job: "SE",
    friends: ["Ashraf", "Faruk", "Nasif"],
    hasDrivingLisence: false,
    calcAge: function () {
        return 2023 - this.birthYear;
    },
};
console.log(nasir.calcAge());
