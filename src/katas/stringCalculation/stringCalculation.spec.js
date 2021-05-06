//
// "1,2,1" -> 4
// "1a,x,5" -> 5
// "5,5,5,5" -> 20
// "30" -> 30
// 'x'->0
import { sumNumber } from "./stringCalculation";

describe("the string calculation", () => {
  test("is a number", () => {
    const toBeNumber = "30";

    expect(sumNumber(toBeNumber)).toBe(30);
  });

  test("is a not a number", () => {
    const notANumber = "x";
    expect(sumNumber(notANumber)).toBe(0);
  });

  test("all are numbers", () => {
    const stringNumber = "1,2,3";
    expect(sumNumber(stringNumber)).toBe(6);
  });
});
