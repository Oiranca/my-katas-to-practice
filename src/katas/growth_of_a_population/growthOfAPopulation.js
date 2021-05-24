export const growthOfAPopulation = (
  initial,
  percent,
  populationLeaveOrComing,
  populationToSurpass,
) => {
  const percentCalculate = percent / 100;
  let count = 0;
  let total = initial;
  while (total < populationToSurpass) {
    total = total + total * percentCalculate + populationLeaveOrComing;
    count++;
  }
  return count;
};
