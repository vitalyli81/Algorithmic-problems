/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  const hash = {};

  strings.forEach((s) => {
    let key = '';

    for (let i = 1; i < s.length; i++) {
      let diff = s[i].charCodeAt() - s[i - 1].charCodeAt();
      if (diff < 0) {
        diff += 26;
      }

      key += diff;
    }

    hash[key] = hash[key] || [];
    hash[key].push(s);
  });

  return Object.values(hash);
};
