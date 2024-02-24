function removeDuplicates(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
  //   return [...new Set(arr)];
}

module.exports = removeDuplicates;
