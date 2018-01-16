(function main() {
    'use strict';
    /**
     * twoSum function
     * @param {Array} nums 
     * @param {Number} target 
     * @return {Array}
     */
    function twoSum(nums, target) {
        // Determine whether the parameter nums is an array
        if (!(nums instanceof Array)) return [];
        // Determine whether the target nums is an number
        if (isNaN(target)) return [];
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            let index = nums.indexOf(complement);
            if (index > -1 && index != i ) {
                return [i, index];
            }
        }
        return [];
    };
    console.log(twoSum([3, 8, 12, 15], 20));
}());