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
| 1 | [从排序数组中删除重复项](#user-content-从排序数组中删除重复项) | [LeetCode](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/) | 简单 | [JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/removeDuplicates.js) |

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
[JavaScript](https://github.com/SilenceHVK/brush-question/blob/master/javascript/removeDuplicates.js)