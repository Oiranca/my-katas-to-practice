/*Problem Description
https://github.com/MikeDigitize/Potter-kata

Once upon a time there was a series of 5 books about a very English hero called Harry. (At least when this Kata
was invented, there were only 5. Since then they have multiplied). Children all over the world thought he was
fantastic, and, of course, so did the publisher. So in a gesture of immense generosity to mankind,
(and to increase sales) they set up the following pricing model to take advantage of Harry’s magical powers.

One copy of any of the five books costs 8 EUR. If, however, you buy two different books from the series,
you get a 5% discount on those two books. If you buy 3 different books, you get a 10% discount. With 4
different books, you get a 20% discount. If you go the whole hog, and buy all 5, you get a huge 25% discount.

Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3
that form part of a set, but the fourth book still costs 8 EUR.

Potter mania is sweeping the country and parents of teenagers everywhere are queueing up with shopping
baskets overflowing with Potter books. Your mission is to write a piece of code to calculate the price o
f any conceivable shopping basket, giving as big a discount as possible.

For example, how much does this basket of books cost?

2 copies of the first book 2 copies of the second book 2 copies of the third book 1 copy
of the fourth book 1 copy of the fifth book answer :

(5 * 8) - 25% [first book, second book, third book, fourth book, fifth book]

(3 * 8) - 10% [first book, second book, third book]
30 + 21.60 = 51.60
*/

import { copiesBuy } from './potterKata';

describe('total to pay', () => {
  test('not buy books', () => {
    const titles = [];

    const toPay = copiesBuy(titles);

    expect(toPay).toBe(0);
  });
  test('only buy one book', () => {
    const titles = ['First Title'];

    const toPay = copiesBuy(titles);

    expect(toPay).toBe(8);
  });

  test('two different books', () => {
    const titles = ['First Title', 'Second Title'];
    const pay = copiesBuy(titles);
    expect(pay).toBe(15.2);
  });
  test('three different books', () => {
    const titles = ['First Title', 'Second Title', 'Third Title'];
    const pay = copiesBuy(titles);
    expect(pay).toBe(21.6);
  });
  test('four different books', () => {
    const titles = ['First Title', 'Second Title', 'Third Title', 'Fourth Title'];
    const pay = copiesBuy(titles);
    expect(pay).toBe(25.6);
  });
  test('five different books', () => {
    const titles = [
      'First Title',
      'Second Title',
      'Third Title',
      'Fourth Title',
      'FiTh Title',
    ];
    const pay = copiesBuy(titles);
    expect(pay).toBe(30);
  });

  test('same books', () => {
    const titles = [
      'First Title',
      'First Title',
      'Second Title',
      'Third Title',
      'Fourth Title',
    ];

    const pay = copiesBuy(titles);
    expect(pay).toBe(37.6);
  });
});
