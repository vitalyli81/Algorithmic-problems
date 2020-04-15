/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  const seen = new Set();

  for (let word of words) {
    let mcode = '';

    for (let c of word) {
      mcode += morse[c.charCodeAt() - 'a'.charCodeAt()];
    }

    seen.add(mcode);
  }

  return seen.size;
};
