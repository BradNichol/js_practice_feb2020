const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
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
    expect(createRange(13, 25)).toEqual([
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
    ]);
  });
});

describe("getScreentimeAlertList", () => {
  test("Returns the username in an array if screentime is above 100 minutues.", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 40 },
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 },
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 },
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 56, facebook: 61 },
              },
            ],
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
              },
            ],
          },
        ],
        "2019-05-04"
      )
    ).toEqual(["beth_1234"]);
  });
});

describe("hexToRGB", () => {
  test("Convert hex value to RGB", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#51FDFD")).toBe("rgb(81,253,253)");
  });
});

describe("findWinner", () => {
  test("Check for horizontal win. X Has won, so return 'X'", () => {
    expect(
      findWinner([
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"],
      ])
    ).toBe("X");
  });
  test("Check for diagonal win. 0 Has won, so return '0'", () => {
    expect(
      findWinner([
        ["0","X", "X"],
        [null, "0" , null],
        [null,null , "0"],
      ])
    ).toBe("0");
  });
});
