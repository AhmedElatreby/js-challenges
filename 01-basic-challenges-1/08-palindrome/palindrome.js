function isPalindrome(str) {
  const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = formatedStr.split("").reverse().join("");
  return formatedStr === reversedStr;
}

// OR

/**
  function isPalindrome(str) {
  const formatedStr = removeNonAlphaNumeric(str.toLowerCase());
  const reversedStr = reversedString(formatedStr);
  return formatedStr === reversedStr;
}

function removeNonAlphaNumeric(str) {
  let formatedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formatedStr += char;
    }
  }
  return formatedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // LowerCase a-z;
  );
}

function reversedString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
 */

module.exports = isPalindrome;
