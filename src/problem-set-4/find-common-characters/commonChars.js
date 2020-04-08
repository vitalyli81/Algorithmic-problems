/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  const hash = {};
  const res = [];

  for (let c of A[0]) {
    hash[c] = (hash[c] || 0) + 1;
  }

  A.forEach((word) => {
    const curHash = {};

    for (let c of word) {
      curHash[c] = (curHash[c] || 0) + 1;
    }

    for (let [key, val] of Object.entries(hash)) {
      if (curHash[key]) {
        hash[key] = Math.min(val, curHash[key]);
      } else {
        delete hash[key];
      }
    }
  });

  for (let [key, value] of Object.entries(hash)) {
    let v = value;
    while (v) {
      res.push(key);
      v--;
    }
  }

  return res;
};
