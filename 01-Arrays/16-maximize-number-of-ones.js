// Problem: Maximize Number of 1's
// Given: A binary array arr[] (containing only 0s and 1s) and an integer k,
// you are allowed to flip at most k 0s to 1s. Find the maximum number of consecutive 1s
// that can be obtained in the array after performing the operation at most k times.

// Examples:

// Input: arr[] = [1, 0, 1], k = 1
// Output: 3
// Explanation: The maximum subarray of consecutive 1s is of size 3,
// which can be obtained by flipping the 0 at index 1.

// Input: arr[] = [1, 0, 0, 1, 0, 1, 0, 1], k = 2
// Output: 5
// Explanation: By flipping the 0s at indices 4 and 6, we get the longest subarray
// from index 3 to 7 containing all 1s.

// Input: arr[] = [1, 1], k = 2
// Output: 2
// Explanation: The array already contains the maximum number of consecutive 1s,
// so the answer is 2.

// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 0 ≤ k ≤ arr.size()
// 0 ≤ arr[i] ≤ 1

class Solution {
	/**
	 * Function to find the maximum number of consecutive 1's after flipping at most k zeros.
	 *
	 * @param {number[]} arr - The input binary array.
	 * @param {number} k - The maximum number of zeros that can be flipped.
	 * @returns {number} - The maximum length of consecutive 1's after flipping at most k zeros.
	 */
	maxOnes(arr, k) {
		let left = 0 // Left pointer of the sliding window
		let zeroCount = 0 // Count of zeros in the current window
		let maxLength = 0 // Variable to store the maximum length of consecutive 1's

		// Iterate over the array using the right pointer
		for (let right = 0; right < arr.length; right++) {
			// If we encounter a 0, increase the zeroCount
			if (arr[right] === 0) {
				zeroCount++
			}

			// If zeroCount exceeds k, shrink the window by moving the left pointer
			while (zeroCount > k) {
				if (arr[left] === 0) {
					zeroCount--
				}
				left++
			}

			// Update the maxLength with the current window size
			maxLength = Math.max(maxLength, right - left + 1)
		}

		// Return the maximum length of consecutive 1's
		return maxLength
	}
}

/**
 * Time Complexity: O(n)
 * - We are using a sliding window approach, where both left and right pointers traverse the array once. Therefore, the time complexity is O(n).
 *
 * Space Complexity: O(1)
 * - Only a few variables are used for counting and tracking the indices, resulting in constant space complexity, O(1).
 */
