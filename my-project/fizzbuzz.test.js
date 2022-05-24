const fizzBuzz = require("./fizzbuzz");

describe("fizzBuzz", function () {
  it("should return 'fizz' when passed 3", function () {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  it("should return 'fizz' when passed 6", function () {
    expect(fizzBuzz(6)).toBe("fizz");
  });

  it("should return 'buzz' when passed 5", function () {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  it("should return 'buzz' when passed 10", function () {
    expect(fizzBuzz(10)).toBe("buzz");
  });

  it("should return 'fizzbuzz' when passed 15", function () {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });

  it("should return 'fizzbuzz' when passed 15", function () {
    expect(fizzBuzz(30)).toBe("fizzbuzz");
  });
});
