class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  }

  getTotalPrice() {
    let sum = 0;
    this.basket.map((item) => (sum += item.getPrice));
    return sum - this.discount;
  }

  addItem(item) {
    this.basket.push(item);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }
}

module.exports = ShoppingBasket;
