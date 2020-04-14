const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 3, 5])).toBe(8);
  });

  test("return 0 is no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 7, 8, 11])).toBe(0);
  });

  test(" Handles int and floats ok", () => {
    expect(sumMultiples([1, 3.1, 5.2, 5.0, 10])).toBe(15);
  });
});
