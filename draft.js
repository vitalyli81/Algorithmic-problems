export class Trie {
  constructor() {
    this.data = {};
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let tree = this.data;

    for (let char of word) {
      if (!tree[char]) {
        tree[char] = {};
      }
      tree = tree[char];
    }

    tree.end = true;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let tree = this.data;

    for (let char of word) {
      if (!tree[char]) {
        return false;
      } else {
        tree = tree[char];
      }
    }

    return !!tree.end;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let tree = this.data;

    for (let char of prefix) {
      if (!tree[char]) {
        return false;
      } else {
        tree = tree[char];
      }
    }

    return true;
  }
}

export default Trie;
