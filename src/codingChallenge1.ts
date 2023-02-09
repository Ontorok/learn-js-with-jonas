interface Person {
  height: number;
  weight: number;
}

const mark: Person = {
  weight: 95,
  height: 1.88,
};

const john: Person = {
  weight: 85,
  height: 1.76,
};

function getNDecimalPlace(num: number, place: number): number {
  return Math.round(num * 10 ** place) / 10 ** place;
}

function calculateBMI(person: Person) {
  const result = person.weight / person.height ** 2;
  return getNDecimalPlace(result, 2);
}

const markBMI: ReturnType<typeof calculateBMI> = calculateBMI(mark);
const johnBMI: ReturnType<typeof calculateBMI> = calculateBMI(john);
const BMIComparison =
  markBMI > johnBMI ? `Mark's BMI is Higher` : `John's BMI is Higher `;
