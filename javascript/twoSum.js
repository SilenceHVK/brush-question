'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const temp = target - nums[i];
        if (nums.indexOf(temp) > -1 && nums.indexOf(temp) != i) {
            return [i, nums.indexOf(temp)];
        }
    }
};