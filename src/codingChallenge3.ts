interface Teams {
  first: number;
  second: number;
  third: number;
}

const dolphins: Teams = {
  first: 97,
  second: 112,
  third: 101,
};

const koalas: Teams = {
  first: 109,
  second: 95,
  third: 106,
};

function getNDecimalPlace3(num: number, place: number = 2): number {
  return Math.round(num * 10 ** place) / 10 ** place;
}

function getAverage(team: Teams) {
  const result = (team.first + team.second + team.third) / 3;
  return getNDecimalPlace3(result);
}

const dolphinsAvg: ReturnType<typeof getAverage> = getAverage(dolphins);
const koalsAvg: ReturnType<typeof getAverage> = getAverage(koalas);

if (dolphinsAvg > koalsAvg && dolphinsAvg >= 100) {
  console.log(`Dolphins(${dolphinsAvg}) wins!!!`);
} else if (koalsAvg > dolphinsAvg && koalsAvg >= 100) {
  console.log(`Koalas(${koalsAvg}) wins!!!`);
} else if (koalsAvg === dolphinsAvg && koalsAvg >= 100 && dolphinsAvg >= 100) {
  console.log(`Match Draw Koalas(${koalsAvg}) and Dolphins(${dolphinsAvg})`);
} else {
  console.log(
    `There is no wining team!!Koalas(${koalsAvg}) and Dolphins(${dolphinsAvg})`
  );
}

console.log({ dolphinsAvg, koalsAvg });
