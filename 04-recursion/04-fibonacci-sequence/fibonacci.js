// function fibonacci(num) {
//   console.log(`Calculating fibonacci(${num})`);
//   if (num < 2) return num;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
