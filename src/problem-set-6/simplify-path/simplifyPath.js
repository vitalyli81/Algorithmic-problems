/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];

  for (let p of path.split('/')) {
    if (p === '..') {
      stack.pop();
      continue;
    }
    if (p === '.' || !p) {
      continue;
    }

    stack.push(p);
  }

  return '/' + stack.join('/');
};
