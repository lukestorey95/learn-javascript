function addToBatch(array, number) {
  if (array.length < 5) {
    new_array = array.concat(number);
    console.log(new_array);
  } else {
    console.log(array);
  }
}

module.exports = addToBatch;
