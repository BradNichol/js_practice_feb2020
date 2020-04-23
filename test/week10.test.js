const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
  test("Function takes a number and returns the sum of all its digits", () => {
    expect(sumDigits(235)).toBe(10);
  });

});
