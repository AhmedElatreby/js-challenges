// function factorial(num) {
//   if (num === 0 || num === 1) return 1;

//   return num * factorial(num - 1);
// }

// OR

// const factorial = (num) =>
//   num === 0 || num === 1 ? 1 : num * factorial(num - 1);

// function factorial(num) {
//   if (num === 0 || num === 1) return 1;

//   let result = 1;
//   for (let i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

module.exports = factorial;
