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
| 5 | [Single Number](#user-content-single-number) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/singleNumber.js)|
| 6 | [Intersection of Two Arrays II](#user-content-intersection-of-two-arrays-ii) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/intersect.js)|
| 7 | [Plus One](#user-content-plus-one) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/plusOne.js)|
| 8 | [Move Zeroes](#user-content-move-zeroes) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/moveZeroes.js)|
| 9 | [Two Sum](#user-content-two-sum) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/twoSum.js)|
| 10 | [Valid Sudoku](#user-content-valid-sudoku) | [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/) | Easy | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/isValidSudoku.js)|



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

## Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

Example:
```
    Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
```

Note:
- Each element in the result should appear as many times as it shows in both arrays.
- The result can be in any order.

Follow up:
- What if the given array is already sorted? How would you optimize your algorithm?
- What if nums1's size is small compared to nums2's size? Which algorithm is better?
- What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/intersect.js)

## Plus One

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
```
    Input: [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.
```

Example 2:
```
    Input: [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321.
```
Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/plusOne.js)

## Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
```
   Input: [0,1,0,3,12]
   Output: [1,3,12,0,0]
```

Note:
- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.

Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/moveZeroes.js)

##  Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
```

Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/twoSum.js)

## Valid Sudoku

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

<p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" style="height:250px; width:250px"><br>
    <small>A partially filled sudoku which is valid.</small>
</p>

The Sudoku board could be partially filled, where empty cells are filled with the character ```'.'```.

Example1:
```
    Input:
    [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
    ]
    Output: true
```

Example2:
```
    Input:
    [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
    ]
    Output: false
    Explanation: Same as Example 1, except with the 5 in the top left corner being 
                modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

Note:
- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.
- The given board contain only digits 1-9 and the character ```'.'```.
- The given board size is always 9x9.

Solution:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/twoSum.js)