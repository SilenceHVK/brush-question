# Promgramming Problems
This is code examples used to record programming problems.

Programming problems mainly from LeetCode, Codewars and some programming books, the use of  C#, JavaScript and Python to achieve programming effect.

If you have a better idea of how to solve problems, please share with us in the issues and share the code with you if you can.  
I hereby express my heart-felt gratitude.

![background image](https://github.com/SilenceHVK/Articles/raw/master/assets/images/bgImages/bg3.png)

# Problems List
| No. | Title | Title Form | Difficulty | Solution |
| ---|---|---|---|--- |
| 1 | [Two Sum](#user-content-two-sum) |  [LeetCode](https://leetcode.com/problems/two-sum/) | Easy | [C#](https://github.com/SilenceHVK/promgramming-problems/blob/master/csharp/TwoSum.cs),[JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/two-sum.js) |
| 2 | [Add Two Numbers](#user-content-add-two-numbers) |  [LeetCode](https://leetcode.com/problems/add-two-numbers/) | Medium | [C#](https://github.com/SilenceHVK/promgramming-problems/blob/master/csharp/AddTwoNumbers.cs), [JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/add-two-numbers.js) |
| 3 | [Longest Substring Without Repeating Characters](#user-content-longest-substring-without-repeating-characters) |  [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | [C#](https://github.com/SilenceHVK/promgramming-problems/blob/master/csharp/LengthOfLongestSubstring.cs), [JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/length-of-longest-substring.js) |
| 4 | [Median of Two Sorted Arrays](#user-content-median-of-two-sorted-arrays) |  [LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | [C#](https://github.com/SilenceHVK/promgramming-problems/blob/master/csharp/FindMedianSortedArrays.cs), [JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/median-of-two-sorted-arrays.js) |
| 5 | [Longest Palindromic Substring](#user-content-longest-palindromic-substring) |  [LeetCode](https://leetcode.com/problems/longest-palindromic-substring/) | Medium | [JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/longest-palindromic-substring.js) |


# Problems Description
## Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
```

Solution:
[C#](https://github.com/SilenceHVK/promgramming-problems/blob/master/csharp/TwoSum.cs),
[JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/two-sum.js) 

## Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
```
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
```

Solution:
[C#](https://github.com/SilenceHVK/promgramming-problems/blob/master/csharp/AddTwoNumbers.cs), 
[JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/add-two-numbers.js)

## Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters.

Examples:
```
    Given "abcabcbb", the answer is "abc", which the length is 3.

    Given "bbbbb", the answer is "b", with the length of 1.

    Given "pwwkew", the answer is "wke", with the length of 3. 
    
    Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

Solution:
[C#](https://github.com/SilenceHVK/promgramming-problems/blob/master/csharp/LengthOfLongestSubstring.cs), 
[JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/length-of-longest-substring.js)

## Median of Two Sorted Arrays
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
```
    nums1 = [1, 3]
    nums2 = [2]

    The median is 2.0
```

Example 2:
```
    nums1 = [1, 2]
    nums2 = [3, 4]

    The median is (2 + 3)/2 = 2.5
```

Solution:
[C#](https://github.com/SilenceHVK/promgramming-problems/blob/master/csharp/FindMedianSortedArrays.cs), 
[JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/median-of-two-sorted-arrays.js)

## Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:
```
    Input: "babad"

    Output: "bab"

    Note: "aba" is also a valid answer.
```

Example 2:
```
    Input: "cbbd"

    Output: "bb"
```

Solution:
[JavaScript](https://github.com/SilenceHVK/promgramming-problems/blob/master/javascript/longest-palindromic-substring.js)