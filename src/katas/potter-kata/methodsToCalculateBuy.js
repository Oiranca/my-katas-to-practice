const price = 8;

const discount = {
  oneCopy: 0,
  twoDifferentCopy: 0.05,
  threeDifferentCopy: 0.1,
  fourDifferentCopy: 0.2,
  fiveDifferentCopy: 0.25,
};

const allDifferent = (differentBooks) => {
  let totalWithoutDiscount;
  let totalToDiscount;
  let total = 0;
  switch (differentBooks) {
    case 1:
      return (total = differentBooks * price);

    case 2:
      totalWithoutDiscount = differentBooks * price;
      totalToDiscount = totalWithoutDiscount * discount.twoDifferentCopy;
      return (total = totalWithoutDiscount - totalToDiscount);
    case 3:
      totalWithoutDiscount = differentBooks * price;
      totalToDiscount = totalWithoutDiscount * discount.threeDifferentCopy;
      return (total = totalWithoutDiscount - totalToDiscount);
    case 4:
      totalWithoutDiscount = differentBooks * price;
      totalToDiscount = totalWithoutDiscount * discount.fourDifferentCopy;
      return (total = totalWithoutDiscount - totalToDiscount);
    case 5:
      totalWithoutDiscount = differentBooks * price;
      totalToDiscount = totalWithoutDiscount * discount.fiveDifferentCopy;
      return (total = totalWithoutDiscount - totalToDiscount);
  }
  return total;
};

export const totalToPay = (count, buyLength) => {
  const different = buyLength - count;
  return count * price + allDifferent(different);
};

export const searchDifferentTitle = (titles) => {
  let count = 0;

  titles.forEach((title) => {
    const sameTitle = titles.filter((item) => item === title);
    sameTitle.length > 1 ? count++ : count;
  });
  return count;
};
