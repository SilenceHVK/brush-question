'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = nums.length; i >= 0; i--) {
        const temp = nums.slice(i + 1);
        if (temp.includes(nums[i])) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
}