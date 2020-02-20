/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  if (!words || !words.length) {
    return [];
  }
  const keys = {
    q: 1,
    w: 1,
    e: 1,
    r: 1,
    t: 1,
    y: 1,
    u: 1,
    i: 1,
    o: 1,
    p: 1,
    a: 2,
    s: 2,
    d: 2,
    f: 2,
    g: 2,
    h: 2,
    j: 2,
    k: 2,
    l: 2,
    z: 3,
    x: 3,
    c: 3,
    v: 3,
    b: 3,
    n: 3,
    m: 3
  };
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const row = keys[word[0].toLowerCase()];
    let sameRow = true;
    for (let j = 1; j < word.length && sameRow; j++) {
      if (keys[word[j].toLowerCase()] !== row) {
        sameRow = false;
      }
    }
    if (sameRow) {
      result.push(word);
    }
  }

  return result;
};
