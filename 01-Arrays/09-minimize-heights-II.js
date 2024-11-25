// Problem Statement:
// Given an array arr[] denoting heights of N towers and a positive integer K.
// For each tower, you must perform exactly one of the following operations exactly once:
// 1. Increase the height of the tower by K.
// 2. Decrease the height of the tower by K.
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.
// Note:
// - It is compulsory to increase or decrease the height by K for each tower.
// - After the operation, the resultant array should not contain any negative integers.

// Examples:
//
// Input: k = 2, arr[] = [1, 5, 8, 10]
// Output: 5
// Explanation: The array can be modified as [1+k, 5-k, 8-k, 10-k] = [3, 3, 6, 8].
// The difference between the largest and the smallest is 8-3 = 5.
//
// Input: k = 3, arr[] = [3, 9, 12, 16, 20]
// Output: 11
// Explanation: The array can be modified as [3+k, 9+k, 12-k, 16-k, 20-k] -> [6, 12, 9, 13, 17].
// The difference between the largest and the smallest is 17-6 = 11.
//
// Constraints:
// - 1 ≤ k ≤ 10^7
// - 1 ≤ n ≤ 10^5
// - 1 ≤ arr[i] ≤ 10^7

// Solution:

class Solution {
	/**
	 * @param {number[]} arr - Array of integers representing heights
	 * @param {number} k - Integer value to increase or decrease the heights
	 * @returns {number} - The minimum difference between the maximum and minimum heights
	 */
	getMinDiff(arr, k) {
		const n = arr.length
		arr.sort((a, b) => a - b) // Sort the array in ascending order

		let min = arr[0],
			max = arr[n - 1],
			ans = max - min // Initial difference

		for (let i = 1; i < n; i++) {
			// If reducing the height at `i` makes it negative, skip
			if (arr[i] - k < 0) continue

			// Calculate the new minimum height
			min = Math.min(arr[0] + k, arr[i] - k)
			// Calculate the new maximum height
			max = Math.max(arr[n - 1] - k, arr[i - 1] + k)
			// Update the result with the smallest difference
			ans = Math.min(ans, max - min)
		}

		return ans // Return the minimum difference
	}
}

/*
**Time Complexity**: O(n log n)
- Sorting the array takes O(n log n).
- The loop to find the minimum difference runs in O(n).
- Total complexity: O(n log n).

**Space Complexity**: O(1)
- The algorithm uses only a constant amount of extra space.
*/
