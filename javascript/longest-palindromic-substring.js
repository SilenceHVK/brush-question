(function () {
    'use strict';
    /**
     * @param {string} s
     * @return {string}
     */
    var longestPalindrome = function (s) {

        let isPaligndromeS = function (tempString) {
            let reverseS = tempString.split('').reverse().join('');
            if (tempString === reverseS) {
                return tempString;
            } else {
                return '';
            }
        };

        let palindrome = isPaligndromeS(s);

        if (isPaligndromeS(s) === '') {
            for (let i = 0; i < s.length; i++) {
                let curChar = s.charAt(i);
                let index = s.indexOf(curChar, i + 1);
                if (index > -1) {
                    let tempS = s.substring(i, index + 1);
                    if (isPaligndromeS(tempS) !== '' && tempS.length > palindrome.length) {
                        palindrome = tempS;
                    }
                    if (palindrome === '') {
                        palindrome = s.substr(0, 1);
                    }
                }
            }
        }
        return palindrome;
    };

    // let result = longestPalindrome('ccc');
    // let result = longestPalindrome('babad');
    // let result = longestPalindrome('cbbd');
    // let result = longestPalindrome('');
    // let result = longestPalindrome('a');
    // let result = longestPalindrome("abcda");
    console.log(result);
})();