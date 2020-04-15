/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function (chips) {
  let odds = 0;
  let evens = 0;

  chips.forEach((el) => {
    if (el % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  });

  return Math.min(odds, evens);
};
