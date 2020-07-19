/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort();
  const res = [folder[0]];
  let parent = folder[0];

  for (let i = 1; i < folder.length; i++) {
    const f = folder[i];

    if (!f.startsWith(parent + '/')) {
      res.push(f);
      parent = f;
    }
  }

  return res;
};
