/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
class AutocompleteSystem {
  constructor(sentences, times) {
    this.sentences = {};
    this.history = '';

    if (sentences.length === times.length) {
      sentences.forEach((sentence, index) => {
        this.sentences[sentence] = times[index];
      });
    }
  }

  /**
   * @param {character} c
   * @return {string[]}
   */
  input(c) {
    const results = [];

    if (c === '#' && this.history.length) {
      this.sentences[this.history] = (this.sentences[this.history] || 0) + 1;
      this.history = '';
      return [];
    } else {
      this.history += c;

      for (let prop in this.sentences) {
        if (prop.indexOf(this.history) === 0) {
          results.push([prop, this.sentences[prop]]);
        }
      }
    }

    results.sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      } else if (b[1] > a[1]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
      return 1;
    });

    return results.slice(0, 3).map(val => val[0]);
  }
}
