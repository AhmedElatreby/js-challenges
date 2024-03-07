function arraySum(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + arraySum(arr.slice(1));
}

// OR

// const arraySum = (arr) =>
//   arr.length === 0 ? 0 : arr[0] + arraySum(arr.slice(1));

// const arraySum = (arr) => arr.reduce((acc, sum) => acc + sum, 0);

// OR

// function arraySum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

module.exports = arraySum;
