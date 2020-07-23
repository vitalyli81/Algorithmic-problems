/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.map = {};
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dict) {
  for (let s of dict) {
    for (let i = 0; i < s.length; i++) {
      const key = s.substring(0, i) + s.substring(i + 1);
      this.map[key] = this.map[key] || [];
      this.map[key].push([i, s[i]]);
    }
  }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (word) {
  for (let i = 0; i < word.length; i++) {
    const key = word.substring(0, i) + word.substring(i + 1);

    if (this.map[key]) {
      for (let [idx, char] of this.map[key]) {
        if (idx === i && char !== word[i]) {
          return true;
        }
      }
    }
  }

  return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
