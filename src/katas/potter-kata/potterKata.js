import { searchDifferentTitle, totalToPay } from './methodsToCalculateBuy';

export const copiesBuy = (titles) => {
  return totalToPay(searchDifferentTitle(titles), titles.length);
};
