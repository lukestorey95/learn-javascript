const multiply = require("./multiply");

describe("multiply", function () {
  it("should multiply 5 & 3", function () {
    expect(multiply(5, 3)).toBe(15);
  });
});
