/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  const hash = {};
  let count = 0;

  arr.forEach((el) => {
    hash[el] = (hash[el] || 0) + 1;
  });

  arr.forEach((el) => {
    if (hash[el + 1]--) {
      count++;
    }
  });

  return count;
};
