/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const output = [];

  remove(s, output, 0, 0, '(', ')');

  return output;
};

function remove(s, output, startI, startJ, openP, closedP) {
  let open = 0;
  let closed = 0;

  for (let i = startI; i < s.length; i++) {
    if (s[i] === openP) {
      open += 1;
    } else if (s[i] === closedP) {
      closed += 1;
    }

    if (closed > open) {
      for (let j = startJ; j <= i; j++) {
        if (s[j] === closedP && (j === startJ || s[j - 1] !== closedP)) {
          remove(
            s.substring(0, j) + s.substring(j + 1, s.length),
            output,
            i,
            j,
            openP,
            closedP
          );
        }
      }
      return;
    }
  }

  const reversed = s.split('').reverse().join('');

  if (openP === '(') {
    remove(reversed, output, 0, 0, closedP, openP);
  } else {
    output.push(reversed);
  }
}
