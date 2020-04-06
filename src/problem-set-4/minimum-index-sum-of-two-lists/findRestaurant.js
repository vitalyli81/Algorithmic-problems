/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  if (list1.length > list2.length) {
    return findRestaurant(list2, list1);
  }
  const hash = {};
  let res = [];
  let curMin = Infinity;

  list1.forEach((restnt, i) => {
    hash[restnt] = i;
  });

  list2.forEach((restnt, i) => {
    const idx = hash[restnt] + i;
    if (idx >= 0) {
      if (idx < curMin) {
        curMin = idx;
        res = [restnt];
      } else if (idx === curMin) {
        res.push(restnt);
      }
    }
  });

  return res;
};
