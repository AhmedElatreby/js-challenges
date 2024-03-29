function arrayIntersection(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !newArr.includes[arr1[i]]) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;

  // OR
  /*
    const set1 = new Set(arr1);
  const newArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      newArr.push(num);
    }
  }
  return newArr;
  */
}

module.exports = arrayIntersection;
