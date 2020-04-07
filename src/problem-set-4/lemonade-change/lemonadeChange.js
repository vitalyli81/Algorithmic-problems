/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fives = 0;
  let tens = 0;

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];

    if (bill === 5) {
      fives++;
    } else if (bill === 10) {
      if (!fives) {
        return false;
      }
      fives--;
      tens++;
    } else {
      if (fives && tens) {
        fives--;
        tens--;
      } else if (fives > 2) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
