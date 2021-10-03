/*
 * I antes de V es 4
 * X antes de L es 40
 * C antes de D es 500
 * ************************
 * I antes de X 9
 * X antes de C 90
 * C antes de M 900
 * */

export const RomanNumeral = (roman) => {
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
  const arrayRomanNumber = [...roman];

  for (let index = 0; index < arrayRomanNumber.length; index++) {
    let valueCharacter = values[arrayRomanNumber[index]];
    let valueNextCharacter = values[arrayRomanNumber[index + 1]];
    if (valueCharacter < valueNextCharacter) {
      sum += -valueCharacter + valueNextCharacter;
      index = index + 1;
    } else {
      sum += valueCharacter;
    }
  }

  return sum;
};
