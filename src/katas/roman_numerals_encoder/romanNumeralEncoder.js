export const romanNumeralEncoder = (number) => {
  let result = '';

  const baseNumber = {
    1: 'I',
    5: 'V',
    10: 'X', // 10-8=2 'I'
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  /*Si fuese un nueve ponme el resultado de la resta su inmediatamente mayor-number 
  y su inmediatamente mayor  10-9 =1 y 10 IX*/

  if (number in baseNumber) {
    result = baseNumber[number];
  } else {
    for (const key in baseNumber) {
      if (number < key) {
        console.log(String(number).length)
        return (result = baseNumber[key]);
      }
    }
    // for (let digit = 1; digit <= number; digit++) {

    //   if (number < 4) {
    //     result += 'I';
    //   }
    //   if (number === 4) {
    //     result = 'IV';
    //   }
    //   if (number === 6) {
    //     result = 'VI';
    //   }
    // }
  }

  return result;
};
