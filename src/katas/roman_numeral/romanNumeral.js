/*
 * I antes de V es 4
 * X antes de L es 40
 * C antes de D es 500
 * ************************
 * I antes de X 9
 * X antes de C 90
 * C antes de M 900
 * */

export const RomanNumeral = (romanNumber) => {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < [...romanNumber].length; i++) {
    if (values[romanNumber[i]] < values[romanNumber[i + 1]]) {
      sum += -values[romanNumber[i]] + values[romanNumber[i + 1]];
      i = i + 1;
    } else {
      sum += values[romanNumber[i]];
    }
  }
  return sum;
};
