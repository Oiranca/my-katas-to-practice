import { searchDifferentTitle, totalToPay } from "./methodsToCalculate";

export const copiesBuy = (titles) => {
  return totalToPay(searchDifferentTitle(titles), titles.length);
};
