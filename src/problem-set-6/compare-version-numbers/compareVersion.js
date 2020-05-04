/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const ver1 = version1.split('.');
  const ver2 = version2.split('.');
  const n = Math.max(ver1.length, ver2.length);

  for (let i = 0; i < n; i++) {
    const v1 = i < ver1.length ? parseInt(ver1[i]) : 0;
    const v2 = i < ver2.length ? parseInt(ver2[i]) : 0;

    if (v1 > v2) {
      return 1;
    }

    if (v1 < v2) {
      return -1;
    }
  }

  return 0;
};
