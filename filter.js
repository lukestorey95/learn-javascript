function checkLength(string) {
  if (string.length <= 10) {
    return true;
  } else {
    return false;
  }
}

function filterLongNumbers(numbersArray) {
  numbersArray = numbersArray.filter(checkLength);
  return numbersArray;
}

module.exports = checkLength;
module.exports = filterLongNumbers;
