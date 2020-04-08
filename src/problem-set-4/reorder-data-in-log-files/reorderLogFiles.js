/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letters = [];
  const nums = [];

  logs.forEach((log) => {
    if (log[log.indexOf(' ') + 1] <= 9) {
      nums.push(log);
    } else {
      letters.push(log);
    }
  });

  letters.sort((log1, log2) => {
    const spaceIndex1 = log1.indexOf(' ');
    const spaceIndex2 = log2.indexOf(' ');
    const localComp = log1
      .substring(spaceIndex1 + 1)
      .localeCompare(log2.substring(spaceIndex2 + 1));

    if (localComp !== 0) return localComp;

    return log1
      .substring(0, spaceIndex1)
      .localeCompare(log2.substring(0, spaceIndex2));
  });

  return [...letters, ...nums];
};
