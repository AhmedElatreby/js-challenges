function flattenArray(arr) {
  let numbers = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      numbers = numbers.concat(flattenArray(item));
    } else {
      numbers.push(item);
    }
  }
  return numbers;
}

/**
 * OR
 */

/*
const flattenArray = (arr) => {
  let numbers = [];
  for (const num of arr) {
    Array.isArray(num)
      ? (numbers = numbers.concat(flattenArray(num)))
      : numbers.push(num);
  }
  return numbers;
};
*/

module.exports = flattenArray;
