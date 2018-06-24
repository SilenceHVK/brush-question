# Brush Question

- [中文(Chinese)](https://github.com/SilenceHVK/brush-question/blob/master/README-CN.md)

This is a code example for recording algorithm questions.

Brush question mainly from LeetCode, Codewars and some programming books, the use of  C#, Java,JavaScript, Python3 and Golang to achieve programming effect.

If you have a better idea of how to solve problems, please share with us in the issues and share the code with you if you can.  
I hereby express my heart-felt gratitude.

![background image](https://github.com/SilenceHVK/Articles/raw/master/assets/images/bgImages/bg3.png)

# Question List
| No. | Title | Title Form | Difficulty | Solution |
| ---|---|---|---|--- |
| 1 | [Remove Duplicates from Sorted Array](#user-content-remove-duplicates-from-sorted-array) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/removeDuplicates.js) |
| 2 | [Best Time to Buy and Sell Stock II](#user-content-best-time-to-buy-and-sell-stock-ii) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/maxProfit.js)|
| 3 | [Rotate Array](#user-content-rotate-array) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/rotateArray.js)|
| 4 | [Contains Duplicate](#user-content-contains-duplicate) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/containsDuplicate.js)|
| 4 | [Single Number](#user-content-single-number) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/singleNumber.js)|

# Question Description

## Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
```
    Given nums = [1,1,2],

    Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

    It doesn't matter what you leave beyond the returned length.
```

Example 2:
```
    Given nums = [0,0,1,1,1,2,2,3,3,4],

    Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

    It doesn't matter what values are set beyond the returned length.
```

Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/removeDuplicates.js)

## Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
```
    Input: [7,1,5,3,6,4]
    Output: 7
    Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
                 Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
```

Example 2:
```
    Input: [1,2,3,4,5]
    Output: 4
    Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
                 Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
                 engaging multiple transactions at the same time. You must sell before buying again.
```

Example 3:
```
    Input: [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/maxProfit.js)

## Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
```
    Input: [1,2,3,4,5,6,7] and k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
        rotate 1 steps to the right: [7,1,2,3,4,5,6]
        rotate 2 steps to the right: [6,7,1,2,3,4,5]
        rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

Example 2:
```
    Input: [-1,-100,3,99] and k = 2
    Output: [3,99,-1,-100]
    Explanation: 
        rotate 1 steps to the right: [99,-1,-100,3]
        rotate 2 steps to the right: [3,99,-1,-100]
```

Note:
- Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
- Could you do it in-place with O(1) extra space?

Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/rotateArray.js)

## Contains Duplicate

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
```
    Input: [1,2,3,1]
    Output: true
```

Example 2:
```
    Input: [1,2,3,4]
    Output: false
```

Example 3:
```
    Input: [1,1,1,3,3,4,3,2,4,2]
    Output: true
```

Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/containsDuplicate.js)

## Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
```
    Input: [2,2,1]
    Output: 1
```

Example 2:
```
    Input: [4,1,2,1,2]
    Output: 4
```

Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/singleNumber.js)