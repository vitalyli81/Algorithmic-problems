/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const arr2Hash = {};
  const sortArr = [];
  const relArr = [];

  arr2.forEach(n => {
    arr2Hash[n] = 0;
  });

  arr1.forEach(n => {
    if (arr2Hash[n] >= 0) {
      arr2Hash[n]++;
    } else {
      sortArr.push(n);
    }
  });

  arr2.forEach(n => {
    for (let i = 0; i < arr2Hash[n]; i++) {
      relArr.push(n);
    }
  });

  sortArr.sort((a, b) => a - b);

  return [...relArr, ...sortArr];
};
