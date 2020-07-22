/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  const hash = {};
  
  paths.forEach((path) => {
    const arr = extract(path);
    
    for (let [file, content] of arr) {
      hash[content] = hash[content] || [];
      hash[content].push(file);
    }
  });
  
  
  return Object.values(hash).filter(item => item.length > 1);
};

const extract = (s) => {
  const data = [];
  const inputArr = s.split(' ');
  const path = inputArr[0] + '/';
  
  for (let i = 1; i < inputArr.length; i++) {
    const [file, content] = inputArr[i].split('(');
    data.push([path + file, content])
  }

  return data;
};
