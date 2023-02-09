const getNDecimalPlace = function (num: number, place: number): number {
  return Math.round(num * 10 ** place) / 10 ** place;
};

const calculateBMI = function (person: Person) {
  const result = person.weight / person.height ** 2;
  return getNDecimalPlace(result, 2);
};

interface Person {
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  calcBMI: () => number;
}

const mark: Person = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 95,
  height: 1.88,
  calcBMI: function () {
    return calculateBMI(this);
  },
};

const john: Person = {
  firstName: "Jonas",
  lastName: "Schedmann",
  weight: 85,
  height: 1.76,
  calcBMI: function () {
    return calculateBMI(this);
  },
};

const markBMI: ReturnType<typeof mark["calcBMI"]> = calculateBMI(mark);
const johnBMI: ReturnType<typeof john["calcBMI"]> = calculateBMI(john);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})`);
}

export {};
