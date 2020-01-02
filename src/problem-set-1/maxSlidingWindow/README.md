## [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

### Example:

> **Input:** nums = [1, 3, -1, -3, 5, 3, 6, 7], and k = 3  
> **Output:** [3, 3, 5, 5, 6, 7]

**Explanation:**

```
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

> [Solution 1 - Time complexety - O(n \* k)](maxSlidingWindow1.js)
>
> [Solution 2 - Time complexety - O(n \* logK)](maxSlidingWindow2.js)
