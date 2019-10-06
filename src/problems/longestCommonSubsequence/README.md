## [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)

Given two strings `text1` and `text2`, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

#### Example 1:

> **Input:** text1 = "abc", text2 = "abc"

> **Output**: 3

> **Explanation:** The longest common subsequence is "abc" and its length is 3.

### Example 2:

> **Input:** text1 = "abc", text2 = "abc"

> **Output:** 3

> **Explanation:** The longest common subsequence is "abc" and its length is 3.

### Example 3:

> **Input:** text1 = "abc", text2 = "def".

> **Output:** 0

> **Explanation:** There is no such common. subsequence, so the result is 0.

## Solution

### Dynamic programing Bottom Up approach.

> Time complexity is O(m x n), m and n are lenght of strings.
> Space complexity is (m x n).

```js
export const longestCommonSubsequence = (text1, text2) => {
  const len1 = text1.length + 1;
  const len2 = text2.length + 1;
  let maxLength = 0;
  const memoGrid = Array(len1);

  for (let row = 0; row < len1; row++) {
    memoGrid[row] = Array(len2);
    memoGrid[row][0] = 0;
  }

  for (let col = 1; col < len2; col++) {
    memoGrid[0][col] = 0;
  }

  for (let row = 1; row < len1; row++) {
    for (let col = 1; col < len2; col++) {
      if (text1[row - 1] === text2[col - 1]) {
        memoGrid[row][col] = memoGrid[row - 1][col - 1] + 1;
        maxLength = Math.max(memoGrid[row][col], maxLength);
      } else {
        memoGrid[row][col] = Math.max(
          memoGrid[row - 1][col],
          memoGrid[row][col - 1]
        );
      }
    }
  }

  return maxLength;
};

export default longestCommonSubsequence;
```
