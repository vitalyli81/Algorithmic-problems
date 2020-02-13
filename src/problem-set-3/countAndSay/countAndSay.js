/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = '1';
  while (--n) {
    const tempStr = str;
    str = '';
    let count = 1;
    for (let i = 0; i < tempStr.length; i++) {
      if (tempStr[i] !== tempStr[i + 1]) {
        str += count + tempStr[i];
        count = 1;
      } else {
        count++;
      }
    }
  }
  return str;
};
