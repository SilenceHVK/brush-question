(function () {
    'use strict';
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    var findMedianSortedArrays = function (nums1, nums2) {
        // Determine whether the parameter nums1 or nums2 is an array.
        if (!(nums1 instanceof Array) || !(nums2 instanceof Array)) return 0;
        // Merge two arrays.
        let nums = nums1.concat(nums2);
        // Sort the array.
        nums.sort((a, b) => {
            if (a < b) {
                return - 1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        let index = Math.floor(nums.length / 2);
        // According to the length of the array to take the median.
        if (nums.length % 2 == 0) {
            let prevIndex = index - 1;
            return (nums[prevIndex] + nums[index]) / 2;
        } else {
            return nums[index];
        }
    };
    let result = findMedianSortedArrays([], [20, 21, 23, 23, 25, 29, 32, 33]);
    // let result = findMedianSortedArrays([], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // let result = findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [0, 6]);
    console.log(result);
})();