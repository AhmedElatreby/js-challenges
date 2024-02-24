function countVowels(str) {
  const formatedStr = str.toLowerCase();
  const vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < formatedStr.length; i++) {
    const char = formatedStr[i];
    if (vowels.includes(char)) count++;
  }
  return count;
}

module.exports = countVowels;
