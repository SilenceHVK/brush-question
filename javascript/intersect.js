'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        const item = nums1[i];
        
        // if (nums2.includes(item) && !(result.includes(item))) {
        //     result.push(item);
        // }
    }
    return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));