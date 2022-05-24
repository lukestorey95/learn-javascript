const ShoppingBasket = require("./basket");

describe("Basket", () => {
  const candyDoubleMars = {
    getName: "Mars",
    getPrice: 4.99,
  };
  const candyDoubleSkittle = {
    getName: "Skittle",
    getPrice: 3.99,
  };

  describe("getTotalPrice", () => {
    it("should return 0 when there are no items in the basket", () => {
      let basket = new ShoppingBasket();

      expect(basket.getTotalPrice()).toBe(0);
    });

    it("should return the price of all items added to the basket", () => {
      let basket = new ShoppingBasket();
      basket.addItem(candyDoubleMars);
      basket.addItem(candyDoubleSkittle);

      expect(basket.getTotalPrice()).toBe(8.98);
    });
  });

  describe("addItem", () => {
    it("should add the item to the basket", () => {
      let basket = new ShoppingBasket();
      basket.addItem(candyDoubleMars);

      expect(basket.basket[0]).toBe(candyDoubleMars);
    });
  });

  describe("applyDiscount", () => {
    it("should reduce the totalPrice by the discount amount", () => {
      let basket = new ShoppingBasket();
      basket.applyDiscount(10);

      expect(basket.getTotalPrice()).toBe(-10);
    });
  });
});
