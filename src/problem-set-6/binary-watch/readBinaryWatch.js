/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  const res = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countBits(h) + countBits(m) === num) {
        res.push(`${h}${m < 10 ? ':0' : ':'}${m}`);
      }
    }
  }

  return res;
};

function countBits(n) {
  let count = 0;
  const bin = n.toString(2);

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      count++;
    }
  }
  return count;
}
