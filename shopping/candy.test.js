const Candy = require("./candy");

describe("Candy", () => {
  const candy = new Candy("Mars", 4.99);

  describe("getName", () => {
    it("should return the name of the candy", () => {
      expect(candy.name).toBe("Mars");
    });
  });

  describe("getPrice", () => {
    it("should return the price of the candy", () => {
      expect(candy.price).toBe(4.99);
    });
  });
});
