/*
function generateHashtag(str) {
  if (str.length > 140 || str.trim().length === 0) return false;

  const words = str.split(/\s+/);
  let hashing = "#";

  for (let i = 0; i < words.length; i++) {
    const captialLetter = words[i].charAt(0).toUpperCase();
    const lowerCase = words[i].substring(1).toLowerCase();
    hashing += captialLetter + lowerCase;
  }
  return hashing;
}
*/

// OR
/*
function generateHashtag(str) {
  if (str.length > 140 || str.trim() === "") return false;

  const words = str.trim().split(/\s+/);

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  );

  const hashing = "#" + capitalizedWords.join("");
  return hashing;
}
*/

function generateHashtag(str) {
  const hashtag = str
    .split(" ")
    .reduce(
      (tag, word) => tag + word.charAt(0).toUpperCase(1) + word.substring(1),
      "#"
    );
  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;
