'use strict';

/**
 * ES5 Solution
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var temp = nums.filter(function (item, index) {
        return nums.indexOf(item) === index;
    });
    return !(temp.length === nums.length);
};


/**
 * ES6 Solution
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const temp = [...new Set(nums)];
    return !(temp.length === nums.length);
};