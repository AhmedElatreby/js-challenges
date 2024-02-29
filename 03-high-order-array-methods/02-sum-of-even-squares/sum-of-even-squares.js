function sumOfEvenSquares(arr) {
  const squarNumber = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((num, sum) => num + sum, 0);

  return squarNumber;
}

module.exports = sumOfEvenSquares;
