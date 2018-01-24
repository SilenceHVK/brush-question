public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var result = new int[2];
        for (int i = 0; i < nums.Length; i++)
        {
            int complement = target - nums[i];
            int index = Array.IndexOf(nums, complement);
            if (index > -1 && index != i)
            {
                result[0] = i;
                result[1] = index;
                break;
            }
        }
        return result;
    }
}