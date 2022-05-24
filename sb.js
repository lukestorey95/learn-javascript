class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  getTotalPrice() {
    let total = 0;
    this.basket.map((item) => (total += item.price));
    return total;
  }

  addItem(item) {
    this.basket.push(item);
  }
}

module.exports = ShoppingBasket;
