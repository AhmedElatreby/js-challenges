function validateEmail(str) {
  if (str.includes("@") && str.includes(".")) {
    if (str.indexOf("@") > 0) {
      return true;
    }
  }
  return false;
}

module.exports = validateEmail;
