// TODO: Terminar Kata

export const growthOfAPopulation = (
  p0,
  percent,
  populationLeaveOrComing,
  populationToSurpass
) => {
  const percentCalculate = percent / 100;
  const difPopulation = populationToSurpass - p0;
  const newPopulationThisYear = p0 * percentCalculate + populationLeaveOrComing;

  return difPopulation / newPopulationThisYear;
};
