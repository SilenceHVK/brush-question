package solution

func maxProfit(prices []int) int {
	result := 0
	length := len(prices) - 1
	for i, v := range prices {
		if i != length && v < prices[i + 1] {
			result += prices[i + 1] - v
		}
	}
	return result
}