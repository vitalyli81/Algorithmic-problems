## [Jump Game II](https://leetcode.com/problems/jump-game-ii/)

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

> **Input:** [2,3,1,1,4]  
> **Output:** 2  
> **Explanation:** The minimum number of jumps to reach the last index is 2.  
> Jump 1 step from index 0 to 1, then 3 steps to the last index.

### [Solution 1](./solution1.js)

> Recursion. Time complexity - O(2 ^ n)

### [Solution 2](./solution2.js)

> DP. Time complexity - O(n ^ 2)

### [Solution 3](./solution3.js)

> Greedy + BFS. Time complexity - O(n)
