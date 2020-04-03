/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  const len = chars.length;
  if (len < 2) return len;
  let ind = 0;
  let count = 0;
  let curChar = chars[0];

  for (let i = 0; i <= len; i++) {
    if (chars[i] === curChar) {
      count++;
    } else {
      chars[ind] = curChar;
      if (count > 1) {
        const countChar = count + '';
        for (let j = 0; j < countChar.length; j++) {
          chars[++ind] = countChar[j];
        }
      }
      ind++;
      count = 1;
      curChar = chars[i];
    }
  }

  return ind;
};
