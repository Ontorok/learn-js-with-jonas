const data1: number[] = [1, 2, 3];
const data2: number[] = [1, 2, 3, 4];

const printForecast = function (arr: number[]) {
  let temp: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const str = `${arr[i]}°C in ${i + 1} days`;
    temp.push(str);
  }
  const finalString = `... ${temp.join(" ... ")}`;
  return finalString;
};

console.log(
  `... ${data1[0]}°C in 1 days ... ${data1[1]}°C in 2 days ... ${data1[2]}°C in 3 days`
);

printForecast(data1);
