function findMissingNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return undefined;
  }

  const n = numbers.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // OR
  //   const sum = numbers.reduce((sum, num) => sum + num, 0);
  return expectedSum - sum;
}

module.exports = findMissingNumber;
