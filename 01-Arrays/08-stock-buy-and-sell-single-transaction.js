// Problem Statement:
// Given an array prices[] of length n, representing the prices of the stocks on different days.
// The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed.
// Here one transaction means 1 buy + 1 sell. If it is not possible to make a profit, return 0.
//
// Note:
// - Stock must be bought before being sold.
//
// Examples:
//
// Input: prices[] = [7, 10, 1, 3, 6, 9, 2]
// Output: 8
// Explanation: Buy the stock on day 2 at price = 1 and sell it on day 5 at price = 9. Hence, the profit is 8.
//
// Input: prices[] = [7, 6, 4, 3, 1]
// Output: 0
// Explanation: Here the prices are in decreasing order, hence if we buy any day then we cannot sell it at a greater price. Hence, the answer is 0.
//
// Input: prices[] = [1, 3, 6, 9, 11]
// Output: 10
// Explanation: Since the array is sorted in increasing order, we can make maximum profit by buying at price[0] and selling at price[n-1].
//
// Constraints:
// 1 <= prices.size() <= 10^5
// 0 <= prices[i] <= 10^4

// Solution:

class Solution {
	/**
	 * @param {number[]} prices - Array representing stock prices on different days
	 * @returns {number} - The maximum profit that can be achieved by buying and selling once
	 */
	maximumProfit(prices) {
		let max = 0 // Initialize the maximum profit to 0

		for (let i = 1; i < prices.length; i++) {
			// Update the maximum profit
			max = Math.max(max, prices[i] - prices[0])
			// Update the minimum price encountered so far
			prices[0] = Math.min(prices[0], prices[i])
		}

		return max // Return the maximum profit
	}
}

/*
**Time Complexity**: O(n)
- The loop iterates through the array once, making the complexity O(n), where `n` is the length of the `prices` array.

**Space Complexity**: O(1)
- The algorithm uses only a constant amount of extra space for the `max` variable.
*/
