interface Person {
  firstName: string;
  lastName: string;
  birthYear: number;
  job: string;
  friends: Array<string>;
  hasDrivingLisence: boolean;
  calcAge: Function;
}

const nasir: Person = {
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

export {};
