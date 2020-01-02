export const decodeString = s => {
  const stack = [];
  let curStr = '';
  let curNum = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '[') {
      stack.push(curStr);
      stack.push(curNum);
      curNum = 0;
      curStr = '';
    } else if (char === ']') {
      let lastNum = stack.pop();
      let lastStr = stack.pop();

      curStr = lastStr + curStr.repeat(parseInt(lastNum));
    } else if (!isNaN(char)) {
      curNum = curNum * 10 + parseInt(char);
    } else {
      curStr += char;
    }
  }

  return curStr;
};

export default decodeString;
