var lengthLongestPath = function(input) {
  let result = 0;
  const TAB_CHAR = '\t';
  const NEW_LINE_CHAR = '\n';
  const DOT_CHAR = '.';

  const paths = input.split(NEW_LINE_CHAR);
  const hash = { 0: 0 };

  paths.forEach(str => {
    const level = str.lastIndexOf(TAB_CHAR) + 1;
    const len = str.length - level;

    if (str.includes(DOT_CHAR)) {
      result = Math.max(result, hash[level] + len);
    } else {
      hash[level + 1] = hash[level] + len + 1;
    }
  });
  return result;
};
