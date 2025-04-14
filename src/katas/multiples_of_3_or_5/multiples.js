/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples
of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

export const solution = (number) => {
  if (number < 0) {
    return 0;
  }
  let result = 0;

  for (let item = 0; item < number; item++) {
    if (item % 3 === 0 || item % 5 === 0) {
      result += item;
    }
  }
  return result;
};
