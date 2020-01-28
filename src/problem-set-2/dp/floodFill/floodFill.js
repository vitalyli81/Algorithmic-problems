/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  if (!image.length || !image[0].length || image[sr][sc] === newColor)
    return image;
  dfs(image, sr, sc, image[sr][sc], newColor);
  return image;
};

const dfs = (image, sr, sc, oldColor, newColor) => {
  image[sr][sc] = newColor;
  if (sr - 1 >= 0 && image[sr - 1][sc] === oldColor) {
    dfs(image, sr - 1, sc, oldColor, newColor);
  }
  if (sr + 1 < image.length && image[sr + 1][sc] === oldColor) {
    dfs(image, sr + 1, sc, oldColor, newColor);
  }
  if (sc - 1 >= 0 && image[sr][sc - 1] === oldColor) {
    dfs(image, sr, sc - 1, oldColor, newColor);
  }
  if (sc + 1 < image[0].length && image[sr][sc + 1] === oldColor) {
    dfs(image, sr, sc + 1, oldColor, newColor);
  }
  return;
};
