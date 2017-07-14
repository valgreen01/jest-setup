function sum(...numbers) {
  return numbers.reduce(
    (accumulator, currentNumber) =>
      accumulator + currentNumber, 0)
}

module.exports = sum