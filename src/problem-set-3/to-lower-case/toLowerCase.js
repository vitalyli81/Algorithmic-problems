/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = '';
  const upLowerCodeDiff = 32;

  for (let c of str) {
    let cCode = c.charCodeAt();
    if (isAlphaUpper(cCode)) {
      cCode = cCode + upLowerCodeDiff;
    }
    res += String.fromCharCode(cCode);
  }

  return res;
};

const isAlphaUpper = code => {
  return code > 64 && code < 91;
};
