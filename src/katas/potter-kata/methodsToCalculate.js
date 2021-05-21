const price = 8;

const discount = {
  oneCopy: 0,
  twoDifferentCopy: 0.005,
  threeDifferentCopy: 0.1,
  fourDifferentCopy: 0.2,
  fiveDifferentCopy: 0.25,
};

const allDifferent = (length) => {
  let totalWithoutDiscount;
  let totalToDiscount;
  let total = 0;
  switch (length) {
    case 1:
      return (total = length * price);

    case 2:
      totalWithoutDiscount = length * price;
      totalToDiscount = totalWithoutDiscount * discount.twoDifferentCopy;
      return (total = totalWithoutDiscount - totalToDiscount);
    case 3:
      totalWithoutDiscount = length * price;
      totalToDiscount = totalWithoutDiscount * discount.threeDifferentCopy;
      return (total = totalWithoutDiscount - totalToDiscount);
    case 4:
      totalWithoutDiscount = length * price;
      totalToDiscount = totalWithoutDiscount * discount.fourDifferentCopy;
      return (total = totalWithoutDiscount - totalToDiscount);
    case 5:
      totalWithoutDiscount = length * price;
      totalToDiscount = totalWithoutDiscount * discount.fiveDifferentCopy;
      return (total = totalWithoutDiscount - totalToDiscount);
  }
  return total;
};

export const totalToPay = (count, length) => {
  return count * price + allDifferent(length);
};

export const searchDifferentTitle = (titles) => {
  let count = 0;

  titles.forEach((title, index) => {
    titles[index] === titles[index + 1] ? count++ : count;
  });
  return count;
};
