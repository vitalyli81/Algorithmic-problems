/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  let lines = 1;
  let width = 0;

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    const charWidth = widths[char.charCodeAt() - 97];
    width += charWidth;

    if (width > 100) {
      lines++;
      width = charWidth;
    }
  }
  return [lines, width];
};
