const searchCandies = require("./search");

describe("searchCandies", () => {
  it("should return candies beginning with 'Ma' and that cost less than 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it("should return candies beginning with 'Ma' and that cost less than 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it("should return candies beginning with 'S' and that cost less than 10", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });

  it("should return candies beginning with 'S' and that cost less than 4", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });

  it("should return candies beginning with 'ma' and that cost less than 10", () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});
