/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  strs.forEach(str => {
    const key = [...str].sort().join('');
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  });

  return Object.values(map);
};
