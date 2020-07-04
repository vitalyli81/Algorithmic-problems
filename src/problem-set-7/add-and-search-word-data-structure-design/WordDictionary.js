/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.data = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.data;

  for (let char of word) {
    node[char] = node[char] || {};
    node = node[char];
  }

  node.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.match(this.data, 0, word);
};

WordDictionary.prototype.match = function (node, level, word) {
  if (!node) {
    return false;
  }

  if (word.length === level) {
    return !!node.isWord;
  }

  if (word[level] === '.') {
    const children = Object.keys(node);

    for (let i = 0; i < children.length; i++) {
      const nextChar = children[i];

      if (this.match(node[nextChar], level + 1, word)) {
        return true;
      }
    }
    return false;
  }

  return this.match(node[word[level]], level + 1, word);
};
