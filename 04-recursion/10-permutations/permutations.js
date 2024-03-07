// function permutations(str) {
//   let result = [];

//   if (str.length === 0) {
//     result.push("");
//     return result;
//   }

//   for (let i = 0; i < str.length; i++) {
//     const firstChar = str[i];
//     const restOfString = str.slice(0, i) + str.slice(i + 1);
//     const subPermutatution = permutations(restOfString);

//     for (let j = 0; j < subPermutatution.length; j++) {
//       result.push(firstChar + subPermutatution[j]);
//     }
//   }

//   return result;
// }

/**
 * OR
 */

const permutations = (str) => {
  let result = [];
  if (str.length === 0) {
    result.push("");
    return result;
  }
  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfStr = str.slice(0, i) + str.slice(i + 1);
    const all = permutations(restOfStr);
    for (let j = 0; j < all.length; j++) {
      result.push(firstChar + all[j]);
    }
  }

  return result;
};

module.exports = permutations;
