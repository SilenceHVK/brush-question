# Brush Question

- [英文(English)](https://github.com/SilenceHVK/brush-question/blob/master/README.md)

&ensp;&ensp;这是用于记录算法题的代码示例。

&ensp;&ensp;Brush Question 的题目主要来自 LeetCode，Codewars 和一些编程书籍，使用 C＃，Java，JavaScript，Python3 和 Golang 来实现编程效果。

&ensp;&ensp;如果你有更好的解决方案，如果可以的话，请在 issues 分享你的代码。

&ensp;&ensp;我在此表示衷心的感谢。


![背景图片](https://github.com/SilenceHVK/Articles/raw/master/assets/images/bgImages/bg3.png)

# 问题列表

| 序号 | 题目 | 题目出处 | 难易度 | 解决方案 |
| ---|---|---|---|--- |
| 1 | [从排序数组中删除重复项](#user-content-从排序数组中删除重复项) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/removeDuplicates.js)&ensp;[Go](https://github.com/SilenceHVK/brush-question/blob/master/golang/removeDuplicates.go) |
| 2 | [买卖股票的最佳时机 II](#user-content-买卖股票的最佳时机-ii) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/maxProfit.js)&ensp;[Go](https://github.com/SilenceHVK/brush-question/blob/master/golang/maxProfit.go) |
| 3 | [旋转数组](#user-content-旋转数组) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/23/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/rotateArray.js)|
| 4 | [存在重复](#user-content-存在重复) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/24/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/containsDuplicate.js)|
| 5 | [只出现一次的数字](#user-content-只出现一次的数字) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/25/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/singleNumber.js)|
| 6 | [两个数组的交集 II](#user-content-两个数组的交集-ii) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/26/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/intersect.js)|
| 7 | [加一](#user-content-加一) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/27/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/plusOne.js)|
| 8 | [移动零](#user-content-移动零) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/28/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/moveZeroes.js)|
| 9 | [两数之和](#user-content-两数之和) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/29/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/twoSum.js)|
| 10 | [有效的数独](#user-content-有效的数独) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/30/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/isValidSudoku.js)|
 
# 问题描述

## 从排序数组中删除重复项

&ensp;&ensp;给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

&ensp;&ensp;不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:
```
    给定 nums = [0,0,1,1,1,2,2,3,3,4],

    函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

    你不需要考虑数组中超出新长度后面的元素。 
```

示例 2:
```
    给定 nums = [0,0,1,1,1,2,2,3,3,4],

    函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

    你不需要考虑数组中超出新长度后面的元素。

```

解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/removeDuplicates.js)&ensp;
[Go](https://github.com/SilenceHVK/brush-question/blob/master/golang/removeDuplicates.go)

## 买卖股票的最佳时机 II

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:
```
    输入: [7,1,5,3,6,4]
    输出: 7
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
         随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
```

示例 2:
```
    输入: [1,2,3,4,5]
    输出: 4
    解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
         注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
         因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

示例 3:
```
    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/maxProfit.js)&ensp;
[Go](https://github.com/SilenceHVK/brush-question/blob/master/golang/maxProfit.go)

## 旋转数组

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:
```
    输入: [1,2,3,4,5,6,7] 和 k = 3
    输出: [5,6,7,1,2,3,4]
    解释:
        向右旋转 1 步: [7,1,2,3,4,5,6]
        向右旋转 2 步: [6,7,1,2,3,4,5]
        向右旋转 3 步: [5,6,7,1,2,3,4]
```

示例 2:
```
    输入: [1,2,3,4,5,6,7] 和 k = 3
    输出: [5,6,7,1,2,3,4]
    解释:
        输入: [-1,-100,3,99] 和 k = 2
        输出: [3,99,-1,-100]
    解释: 
        向右旋转 1 步: [99,-1,-100,3]
        向右旋转 2 步: [3,99,-1,-100]
```

说明:
- 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
- 要求使用空间复杂度为 O(1) 的原地算法。

解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/rotateArray.js)

## 存在重复

给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:
```
    输入: [1,2,3,1]
    输出: true
```

示例 2:
```
    输入: [1,2,3,4]
    输出: false
```

示例 3:
```
    输入: [1,1,1,3,3,4,3,2,4,2]
    输出: true
```

解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/containsDuplicate.js)

## 只出现一次的数字

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明:
    你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:
```
    输入: [2,2,1]
    输出: 1
```

示例 2:
```
    输入: [4,1,2,1,2]
    输出: 4
```

解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/singleNumber.js)

## 两个数组的交集 II

给定两个数组，写一个方法来计算它们的交集。

示例 1:
```
    给定 nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
```

注意：
- 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
- 我们可以不考虑输出结果的顺序。

跟进:
- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
- 如果nums2的元素存储在磁盘上，内存是有限的，你不能一次加载所有的元素到内存中，你该怎么办？

解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/intersect.js)

## 加一

给定一个非负整数组成的非空数组，在该数的基础上加一，返回一个新的数组。

最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:
```
    输入: [1,2,3]
    输出: [1,2,4]
    解释: 输入数组表示数字 123。
```

示例 2:
```
    输入: [4,3,2,1]
    输出: [4,3,2,2]
    解释: 输入数组表示数字 4321。
```

解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/plusOne.js)

## 移动零

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
```
    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]
```

说明:
- 必须在原数组上操作，不能拷贝额外的数组。
- 尽量减少操作次数。


解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/moveZeroes.js)

## 两数之和

给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例:
```
    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
```

解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/twoSum.js)

##  有效的数独

判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

1. 数字 1-9 在每一行只能出现一次。
2. 数字 1-9 在每一列只能出现一次。
3. 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

<p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" style="height:250px; width:250px"><br>
    <small>上图是一个部分填充的有效的数独。</small>
</p>

数独部分空格内已填入了数字，空白格用 ```'.'``` 表示。

示例1:
```
    输入:
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
    输出: true
```

示例2:
```
    输入:
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
    输出: false
    解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
        但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
```

说明:
- 一个有效的数独（部分已被填充）不一定是可解的。
- 只需要根据以上规则，验证已经填入的数字是否有效即可。
- 给定数独序列只包含数字 1-9 和字符 ```'.'``` 。
- 给定数独永远是 9x9 形式的。

解决方案:
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/isValidSudoku.js)