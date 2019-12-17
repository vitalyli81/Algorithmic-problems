export const URLify = (s, len) => {
  const list = s.split('');
  const replaceChar = '%20';
  let listInd = list.length - 1;

  for (let i = len - 1; i >= 0; i--) {
    const c = s[i];

    if (c !== ' ') {
      list[listInd] = c;
      listInd--;
    } else {
      for (let j = 0; j < 3; j++) {
        list[listInd] = replaceChar[replaceChar.length - 1 - j];
        listInd--;
      }
    }
  }

  return list.join('');
};
