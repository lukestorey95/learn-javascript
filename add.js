function getNumberSign(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

module.exports = getNumberSign;
