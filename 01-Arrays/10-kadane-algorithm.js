// Problem Statement:
// Given an integer array `arr[]`, find the maximum sum of a contiguous subarray.
// A subarray is a contiguous part of an array.

// Examples:
//
// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum, which is 11.
//
// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray {-2} has the largest sum, which is -2.
//
// Input: arr[] = [5, 4, 1, 7, 8]
// Output: 25
// Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum, which is 25.
//
// Constraints:
// - 1 ≤ arr.size() ≤ 10^5
// - -10^9 ≤ arr[i] ≤ 10^4

// Solution:

/**
 * @param {number[]} arr - The input array of integers
 * @returns {number} - The maximum sum of a contiguous subarray
 */
class Solution {
	// Function to find the sum of contiguous subarray with maximum sum
	maxSubarraySum(arr) {
		let maxSum = -Infinity // Initialize maxSum to the smallest possible value
		let currSum = 0 // Initialize current sum to 0

		// Iterate through each element of the array
		for (const num of arr) {
			currSum += num // Add the current number to the current sum
			maxSum = Math.max(currSum, maxSum) // Update maxSum if currSum is greater
			currSum = currSum < 0 ? 0 : currSum // Reset currSum to 0 if it becomes negative
		}

		return maxSum // Return the maximum subarray sum
	}
}

/*
**Time Complexity**: O(n)
- The algorithm iterates through the array once, making it O(n), where `n` is the size of the array.

**Space Complexity**: O(1)
- The algorithm uses only a constant amount of extra space.
*/
