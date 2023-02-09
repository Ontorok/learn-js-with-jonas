interface Teams {
  first: number;
  second: number;
  third: number;
}

const dolphins: Teams = {
  first: 44,
  second: 23,
  third: 71,
};

const koalas: Teams = {
  first: 65,
  second: 54,
  third: 49,
};

const getNDecimalPlace = function (num: number, place: number = 2): number {
  return Math.round(num * 10 ** place) / 10 ** place;
};

const calcAverage = function (team: Teams) {
  const result = (team.first + team.second + team.third) / 3;
  return getNDecimalPlace(result);
};

const checkWinner = function (dolphinsScore: number, koalasScore: number) {
  if (dolphinsScore >= 2 * koalasScore) {
    console.log(`Dolphins win (${dolphinsScore} vs. ${koalasScore})`);
  } else if (koalasScore >= 2 * dolphinsScore) {
    console.log(`Koalas win (${koalasScore} vs. ${dolphinsScore})`);
  } else {
    console.log("No team wins");
  }
};

const dolphinsAvg: ReturnType<typeof calcAverage> = calcAverage(dolphins);
const koalsAvg: ReturnType<typeof calcAverage> = calcAverage(koalas);

checkWinner(dolphinsAvg, koalsAvg);

export {};
