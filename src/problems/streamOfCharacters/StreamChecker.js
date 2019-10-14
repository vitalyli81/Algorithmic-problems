class StreamChecker {
  constructor(words) {
    this.data = {};
    this.streams = [];

    words.forEach(word => {
      let node = this.data;

      for (let i = word.length - 1; i >= 0; i--) {
        const char = word[i];

        if (!node[char]) {
          node[char] = {};
        }

        node = node[char];
      }
      node.end = true;
    });
  }

  query(letter) {
    this.streams.push(letter);
    let node = this.data;

    for (let i = this.streams.length - 1; i >= 0; i--) {
      const char = this.streams[i];

      if (node[char]) {
        if (node[char].end) {
          return true;
        }
        node = node[char];
      } else {
        return false;
      }
    }

    return false;
  }
}
