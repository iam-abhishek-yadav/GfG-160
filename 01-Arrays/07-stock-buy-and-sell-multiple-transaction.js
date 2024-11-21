// Problem Statement:
// The cost of stock on each day is given in an array price[]. Each day you may decide to either buy or sell the stock at price[i],
// you can even buy and sell the stock on the same day. Find the maximum profit that you can get.
//
// Note:
// - A stock can only be sold if it has been bought previously.
// - Multiple stocks cannot be held on any given day.
//
// Examples:
//
// Input: prices[] = [100, 180, 260, 310, 40, 535, 695]
// Output: 865
// Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210.
// Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655. Maximum Profit = 210 + 655 = 865.
//
// Input: prices[] = [4, 2, 2, 2, 4]
// Output: 2
// Explanation: Buy the stock on day 3 and sell it on day 4 => 4 – 2 = 2. Maximum Profit = 2.
//
// Constraints:
// 1 <= prices.size() <= 10^5
// 0 <= prices[i] <= 10^4

// Solution:

class Solution {
	/**
	 * @param {number[]} prices - Array representing stock prices on different days
	 * @returns {number} - The maximum profit that can be achieved
	 */
	maximumProfit(prices) {
		let profit = 0 // Initialize profit to 0

		// Traverse the array from the second day onward
		for (let i = 1; i < prices.length; i++) {
			// If today's price is greater than yesterday's price, add the difference to profit
			if (prices[i] > prices[i - 1]) {
				profit += prices[i] - prices[i - 1]
			}
		}

		return profit // Return the total accumulated profit
	}
}

/*
**Time Complexity**: O(n)
- The loop iterates through the array once, making the complexity O(n), where `n` is the length of the `prices` array.

**Space Complexity**: O(1)
- The algorithm uses only a constant amount of extra space for the `profit` variable.
*/
