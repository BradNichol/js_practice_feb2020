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

describe("isValidDNA", () => {
  test("return true. A valid DNA string may contain characters C, G, T or A only.", () => {
    expect(isValidDNA("CGTA")).toBe(true);
  });

  test("return false. A valid DNA string may contain characters C, G, T or A only.", () => {
    expect(isValidDNA("CGTABBBB")).toBe(false);
  });

  test("Ignore character case", () => {
    expect(isValidDNA("CgTTTttAAAaa")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("return complimentary DNA base pair. ACTG should return TGAC", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });

  test("return complimentary DNA base pair. GTCA should return CAGT", () => {
    expect(getComplementaryDNA("GTCA")).toBe("CAGT");
  });
});

describe("isItPrime", () => {
  test("return true if n is a prime number.", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(17)).toBe(true);
  });

  test("return false if n is not a prime number", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(8)).toBe(false);
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(10)).toBe(false);
  });

  test("return false if n is not positive integer", () => {
    expect(isItPrime(-1)).toBe(false);
    expect(isItPrime(-4)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("receive a number and return an array of n arrays", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(4, "Brad")).toEqual([
      ["Brad", "Brad", "Brad", "Brad"],
      ["Brad", "Brad", "Brad", "Brad"],
      ["Brad", "Brad", "Brad", "Brad"],
      ["Brad", "Brad", "Brad", "Brad"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("function should return true depending on whether there are enough staff scheduled for the given day.", () => {
    expect(
      areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Brad", rota: ["Monday", "Sunday", "Friday", "Wednesday"] },
        { name: "Joanne", rota: ["Monday", "Wednesday"] },
      ]).toEqual(true)
    );
  });
});
