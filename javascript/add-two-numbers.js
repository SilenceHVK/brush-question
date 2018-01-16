(function () {
    'use strict';
    //  Definition for singly-linked list.
    function ListNode(val) {
        this.val = val;
        this.next = null;
    };

    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    var addTwoNumbers = function (l1, l2) {
        let result = new ListNode(0);
        let carry = 0;
        let tempNode = null;
        while (l1 || l2 || carry) {
            // Determine whether the parameter l1 is null and l1.val value is non-numeric or null
            let val1 = l1 && !isNaN(l1.val) && l1.val ? l1.val : 0;
            // Determine whether the parameter l2 is null and l2.val value is non-numeric or null
            let val2 = l2 && !isNaN(l2.val) && l2.val ? l2.val : 0;
            // Calculate the current value
            let currVal = Math.floor((val1 + val2 + carry) % 10);
            // The carry value of the current value
            carry = Math.floor((val1 + val2 + carry) / 10);
            if(tempNode == null){
                tempNode = new ListNode(currVal);
                result = tempNode;
            }else{
                tempNode.next = new ListNode(currVal);
                tempNode = tempNode.next;
            }
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }
        return result;
    };

    let l1 = new ListNode(5);
    l1.next = new ListNode(1);
    l1.next.next = new ListNode(6);
    let l2 = new ListNode(5);
    console.log(addTwoNumbers(l1, l2));
})();