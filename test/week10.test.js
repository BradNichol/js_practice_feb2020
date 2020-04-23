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

describe("createRange", () => {
  test("Function creates an array of a range of numbers with a start and end number. Numbers are inclusive", () => {
    expect(createRange(2, 6)).toEqual([2, 3, 4, 5, 6]);
  });
});


