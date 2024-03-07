// function reverseString(str) {
//   if (str === "") return "";
//   return reverseString(str.substr(1)) + str[0];
// }

// OR

const reverseString = (str) =>
  str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);

module.exports = reverseString;
