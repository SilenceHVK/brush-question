(function(){
    'use strict';
    /**
     * addTwoNumbers function
     * @param {Array} l1 
     * @param {Array} l2 
     * @return {Array}
     */
    function addTwoNumbers(l1, l2) {
        // Determine whether the parameter l1,l2 is an array
        if(!(l1 instanceof Array) && !(l2 instanceof Array)) return [];
        // Determine whether the parameter l1,l2 there are non-numerical
        for(let i = 0; i < l1.length; i++ ){
            if(isNaN(l1[i]) || isNaN(l2[i])){
                console.log('1111');
                return [];
            }
        }
        let result = parseInt(l1.join('')) + parseInt(l2.join(''));
        return result.toString().split('').reverse();
    };
    console.log(addTwoNumbers([2,4,3], [5,6,4]));
})();