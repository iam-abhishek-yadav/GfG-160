/**
 * Problem Statement:
 * Given an array of integers `arr[]`, find the Inversion Count in the array.
 * Two elements `arr[i]` and `arr[j]` form an inversion if `arr[i] > arr[j]` and `i < j`.
 *
 * Inversion Count:
 * - Indicates how far the array is from being sorted.
 * - If the array is already sorted, inversion count is 0.
 * - If the array is sorted in reverse order, inversion count is maximum.
 *
 * Examples:
 *
 * Input: arr[] = [2, 4, 1, 3, 5]
 * Output: 3
 * Explanation: The sequence [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), (4, 3).
 *
 * Input: arr[] = [2, 3, 4, 5, 6]
 * Output: 0
 * Explanation: As the sequence is already sorted, inversion count is 0.
 *
 * Input: arr[] = [10, 10, 10]
 * Output: 0
 * Explanation: Since all elements are the same, inversion count is 0.
 *
 * Constraints:
 * 1 ≤ arr.size() ≤ 10^5
 * 1 ≤ arr[i] ≤ 10^4
 */

// Solution:

/**
 * @param {number[]} arr - Input array.
 * @returns {number} - Count of inversions in the array.
 */
class Solution {
	// Function to count inversions in the array.
	inversionCount(arr) {
		return this.mergeSort(arr, 0, arr.length - 1)
	}

	mergeSort(arr, low, high) {
		if (low >= high) return 0

		const mid = Math.floor(low + (high - low) / 2)
		let count = 0

		// Recursively sort the left and right halves and count inversions.
		count += this.mergeSort(arr, low, mid)
		count += this.mergeSort(arr, mid + 1, high)
		count += this.merge(arr, low, mid, high)

		return count
	}

	merge(arr, low, mid, high) {
		const temp = []
		let count = 0
		let left = low,
			right = mid + 1

		// Merge two sorted halves and count inversions.
		while (left <= mid && right <= high) {
			if (arr[left] <= arr[right]) {
				temp.push(arr[left++])
			} else {
				count += mid - left + 1 // Count inversions.
				temp.push(arr[right++])
			}
		}

		// Append remaining elements from the left and right halves.
		while (left <= mid) temp.push(arr[left++])
		while (right <= high) temp.push(arr[right++])

		// Copy sorted elements back into the original array.
		for (let i = low; i <= high; i++) {
			arr[i] = temp[i - low]
		}

		return count
	}
}

/**
 * Time Complexity: O(n log n)
 * - Each level of recursion processes `n` elements and there are `log n` levels.
 *
 * Space Complexity: O(n)
 * - Temporary array `temp` is used during merging, which can grow to the size of the array.
 */
