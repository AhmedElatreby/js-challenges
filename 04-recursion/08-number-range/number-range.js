function numberRange(startNum, endNum) {
  if (endNum === startNum) return [startNum];

  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}

// function numberRange(startNum, endNum) {
//   if (startNum === endNum) return [startNum];

//   const numbers = [];
//   for (let i = startNum; i <= endNum; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// const numberRange = (startNum, endNum) => {
//   if (startNum === endNum) return [startNum];
//   const numbers = numberRange(startNum, endNum - 1);
//   numbers.push(endNum);
//   return numbers;
// };

module.exports = numberRange;
