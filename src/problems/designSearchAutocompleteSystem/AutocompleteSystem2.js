class AutocompleteSystem {
  constructor(sentences, times) {
    this.trie = {};
    this.search = '';
    sentences.forEach((sentence, index) => {
      this.insert(sentence, times[index]);
    });
  }

  input(c) {
    const result = [];

    if (c === '#') {
      this.insert(this.history, 1);
      this.search = '';
    } else {
    }
  }

  insert(sentence, freq) {
    let node = this.trie;

    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];

      if (!node[char]) {
        node[char] = { freq: 0 };
      }
      node = node[char];
    }
    node.freq += freq;
  }

  getList(pref) {
    let node = this.trie;
    const list = [];
  }
}
