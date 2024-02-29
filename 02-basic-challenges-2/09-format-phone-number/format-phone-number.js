function formatPhoneNumber(numbers) {
  const codeArea = numbers.slice(0, 3).join("");
  const number = numbers.slice(3, 6).join("");
  const number1 = numbers.slice(6).join("");

  return `(${codeArea}) ${number}-${number1}`;
}

module.exports = formatPhoneNumber;
