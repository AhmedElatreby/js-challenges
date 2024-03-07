// function power(base, exponent) {
//   if (exponent === 0) return 1;

//   return base * power(base, exponent - 1);
// }

// OR

// const power = (base, exponent) =>
//   exponent === 0 ? 1 : base * power(base, exponent - 1);

// function power(base, exponent) {
//   if (exponent === 0) return 1;

//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

function power(base, exponent) {
  if (exponent < 1) return 1;
  return base * power(base, exponent - 1);
}

module.exports = power;
