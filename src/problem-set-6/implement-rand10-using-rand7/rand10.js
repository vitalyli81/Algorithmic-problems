/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  let res = 40;
  while (res >= 40) {
    res = 7 * (rand7() - 1) + (rand7() - 1);
  }
  return (res % 10) + 1;
};
