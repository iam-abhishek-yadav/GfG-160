/**
 * Problem Statement:
 * Given an array `arr[]` containing only 0s, 1s, and 2s, sort the array in ascending order.
 *
 * Examples:
 *
 * Input: arr[] = [0, 1, 2, 0, 1, 2]
 * Output: [0, 0, 1, 1, 2, 2]
 * Explanation: 0s, 1s, and 2s are segregated into ascending order.
 *
 * Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
 * Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
 * Explanation: 0s, 1s, and 2s are segregated into ascending order.
 *
 * Constraints:
 * 1 <= arr.length <= 10^6
 * 0 <= arr[i] <= 2
 */

// Solution:

/**
 * @param {number[]} arr - Input array of 0s, 1s, and 2s.
 * @returns {void} - The input array is modified in place.
 */
class Solution {
	// Function to sort an array of 0s, 1s, and 2s
	sort012(arr) {
		let low = 0,
			mid = 0,
			high = arr.length - 1

		// Using the Dutch National Flag algorithm
		while (mid <= high) {
			if (arr[mid] === 0) {
				;[arr[low], arr[mid]] = [arr[mid], arr[low]]
				low++
				mid++
			} else if (arr[mid] === 1) {
				mid++
			} else {
				;[arr[mid], arr[high]] = [arr[high], arr[mid]]
				high--
			}
		}
	}
}

/**
 * Time Complexity: O(n)
 * - Single pass through the array using three pointers.
 *
 * Space Complexity: O(1)
 * - No additional space is used apart from a few pointers.
 */
