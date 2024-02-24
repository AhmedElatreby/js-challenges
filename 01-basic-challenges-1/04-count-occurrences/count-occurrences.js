function countOccurrences(str, character) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (character === str[i]) {
      count++;
    }
  }
  return count;
  //   return str.split(character).length - 1;
}

module.exports = countOccurrences;
