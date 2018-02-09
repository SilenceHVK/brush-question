public class Solution{
    public static ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        try
        {
            var result = new ListNode(0);
            decimal carry = 0;
            ListNode tempNode = null;
            while (l1 != null || l2 != null || carry != 0)
            {
                // Determine whether the parameter l1 is null and l1.val value is non-numeric or null
                var val1 = l1 == null || l1.val == null ? 0 : l1.val;
                // Determine whether the parameter l2 is null and l2.val value is non-numeric or null
                var val2 = l2 == null || l2.val == null ? 0 : l2.val;
                // Calculate the current value
                var curVal = Math.Floor(decimal.Parse(((val1 + val2 + carry) % 10).ToString()));
                // The carry value of the current value
                carry = Math.Floor(decimal.Parse(((val1 + val2 + carry) / 10).ToString()));
                if (tempNode == null)
                {
                    tempNode = new ListNode(int.Parse(curVal.ToString()));
                    result = tempNode;
                }
                else
                {
                    tempNode.next = new ListNode(int.Parse(curVal.ToString()));
                    tempNode = tempNode.next;
                }
                if (l1 != null) l1 = l1.next;
                if (l2 != null) l2 = l2.next;
            }
            return result;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
}