/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  restoreIp(s, res, 0, 0, '');

  return res;
};

const restoreIp = (ip, res, idx, count, restored) => {
  if (count > 4 || idx > ip.length) return;
  if (count === 4 && idx === ip.length) {
    res.push(restored);
    return;
  }

  for (let i = 1; i < 4; i++) {
    if (idx + i > ip.length) return;

    const s = ip.substring(idx, idx + i);
    const intS = parseInt(s);

    if (s[0] === '0' && s.length > 1) continue;
    if (intS >= 0 && intS < 256) {
      restoreIp(
        ip,
        res,
        idx + i,
        count + 1,
        restored + s + (count === 3 ? '' : '.')
      );
    }
  }
};
