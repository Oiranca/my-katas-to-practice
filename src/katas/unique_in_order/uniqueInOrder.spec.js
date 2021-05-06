/*
* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
* */
import { uniqueInOrder } from "./uniqueInOrder";

describe("only one item with same value into array", () => {
  test("some value repeat", () => {
    const stringWithSameValue = "AAAABBBCCDAABBB";

    expect(uniqueInOrder(stringWithSameValue)).toEqual([
      "A",
      "B",
      "C",
      "D",
      "A",
      "B",
    ]);
  });
  test("no repeat string", () => {
    const stringValue = "ABBCcAD";

    expect(uniqueInOrder(stringValue)).toEqual(["A", "B", "C", "c", "A", "D"]);
  });
  test("no repeat number", () => {
    const arrayNumberValue = [1, 2, 2, 3, 3];

    expect(uniqueInOrder(arrayNumberValue)).toEqual([1, 2, 3]);
  });
});
