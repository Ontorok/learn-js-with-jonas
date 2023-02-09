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

printForecast(data1);
