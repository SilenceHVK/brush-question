package main
func rotate(nums []int, k int)  {
    length := len(nums)
    for i := 0; i < k; i++ {
        for j := 0; j < length; j++ {
            nums[length - 1], nums[j] =  nums[j], nums[length - 1]
        }
    }
}