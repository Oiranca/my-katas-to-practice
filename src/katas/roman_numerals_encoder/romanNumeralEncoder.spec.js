/*
* Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral
 representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the 
left most digit and skipping any digit with a value of zero. In Roman numerals 
1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written 
as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending
order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
* ***********************************************************************
Remember that there can't be more than 3 identical symbols in a row.
* ***********************************************************************
* */

import { romanNumeralEncoder } from './romanNumeralEncoder';

describe('solution', () => {
  it('should handle small numbers', () => {
    expect(romanNumeralEncoder(1)).toEqual('I');
    expect(romanNumeralEncoder(2)).toEqual('II');
    expect(romanNumeralEncoder(3)).toEqual('III');
    expect(romanNumeralEncoder(4)).toEqual('IV');
    expect(romanNumeralEncoder(5)).toEqual('V');
    expect(romanNumeralEncoder(6)).toEqual('VI');
    expect(romanNumeralEncoder(7)).toEqual('VII');
    expect(romanNumeralEncoder(8)).toEqual('VIII');
    expect(romanNumeralEncoder(9)).toEqual('IX');
    expect(romanNumeralEncoder(10)).toEqual('X');
    // expect(romanNumeralEncoder(11)).toEqual('XI');
    // expect(romanNumeralEncoder(15)).toEqual('XV');
    // expect(romanNumeralEncoder(19)).toEqual('XIX');
    // expect(romanNumeralEncoder(22)).toEqual('XXII');
  });

  // it('should handle large numbers', () => {
  //   expect(romanNumeralEncoder(1000)).toEqual('M');
  //   expect(romanNumeralEncoder(1001)).toEqual('MI');
  //   expect(romanNumeralEncoder(1990)).toEqual('MCMXC');
  //   expect(romanNumeralEncoder(2007)).toEqual('MMVII');
  //   expect(romanNumeralEncoder(2008)).toEqual('MMVIII');
  // });
});
