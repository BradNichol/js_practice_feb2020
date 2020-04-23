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
  test("Uses a start and end numbers to a range of numbers in an array.", () => {
    expect(createRange(2, 6)).toEqual([2, 3, 4, 5, 6]);
  });

  test("Uses a start and end numbers to create range of numbers in array. Also uses a step number to provide gap between number sequence.", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  });

  test("Uses 1 as default step, if step not provided", () => {
    expect(createRange(13, 25)).toEqual([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  });
});


