(function () {
    'use strict';
    /**
     * @param {string} s
     * @return {number}
     */
    var lengthOfLongestSubstring = function (s) {
        let i = 0, j = 0, result = 0;
        let set = new Set();
        while (i < s.length && j < s.length) {
            if (!set.has(s.charAt(j))) {
                set.add(s.charAt(j++));
                result = Math.max(result, j - i);
            } else {
                set.delete(s.charAt(i++));
            }
        }
        return result;
    };

    // let result = lengthOfLongestSubstring("au");
    // let result = lengthOfLongestSubstring("cdd");
    let result = lengthOfLongestSubstring("abcabcbbbb");
    // let result = lengthOfLongestSubstring("bbbb");
    // let result = lengthOfLongestSubstring("pwwkew");
    console.log(result);
})();