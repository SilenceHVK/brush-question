'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const result = [];
    const temp = nums2.slice(0);
    for (let i = 0; i < nums1.length; i++) {
        const item = nums1[i];
        if (temp.includes(nums1[i])) {
            result.push(item);
            temp.splice(temp.indexOf(item), 1);
        }
    }
    return result;
};