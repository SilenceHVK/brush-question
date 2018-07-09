package solution

func removeDuplicates(nums []int) int {
	length := len(nums)
	if length <= 1 {
		return length
	}

	length = 1;
	for i , v := range nums {
		if i > 0 && nums[length - 1] != v {
			nums[length] = v
			length++
		}
	}
	return length
}