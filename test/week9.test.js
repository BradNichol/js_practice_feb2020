const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/week9");

  describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5])).toBe(8);
    });
  });