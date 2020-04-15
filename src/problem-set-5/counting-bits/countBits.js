/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const res = [];

  for (let n = 0; n <= num; n++) {
    let count = 0;
    const bin = n.toString(2);

    for (let c of bin) {
      if (c === '1') {
        count++;
      }
    }
    res.push(count);
  }
  return res;
};
