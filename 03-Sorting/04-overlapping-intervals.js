/**
 * Problem Statement:
 * Given an array of intervals `arr[][]`, where `arr[i] = [starti, endi]`, merge all overlapping intervals.
 *
 * Examples:
 *
 * Input: arr[][] = [[1,3],[2,4],[6,8],[9,10]]
 * Output: [[1,4], [6,8], [9,10]]
 * Explanation: The overlapping intervals [1,3] and [2,4] merge to form [1,4]. Therefore, the result is [[1,4], [6,8], [9,10]].
 *
 * Input: arr[][] = [[6,8],[1,9],[2,4],[4,7]]
 * Output: [[1,9]]
 * Explanation: All intervals overlap with [1,9]. Therefore, the result is [[1,9]].
 *
 * Constraints:
 * - 1 ≤ arr.size() ≤ 10^5
 * - 0 ≤ starti ≤ endi ≤ 10^5
 */

// Solution:

/**
 * @param {number[][]} arr - Array of intervals, where each interval is represented as [start, end].
 * @returns {number[][]} - Array of merged intervals.
 */
class Solution {
	mergeOverlap(arr) {
		// If the input array is empty, return an empty array
		if (!arr.length) return []

		// Step 1: Sort intervals by their start time
		arr.sort((a, b) => a[0] - b[0])

		// Initialize the result array with the first interval
		const result = []
		result.push(arr[0])

		// Step 2: Iterate through the intervals
		for (let i = 1; i < arr.length; i++) {
			const last = result[result.length - 1] // Last interval in the result
			const current = arr[i] // Current interval being processed

			// Step 3: Check for overlap between the last interval and the current interval
			if (current[0] <= last[1]) {
				// Merge the intervals by updating the end time
				last[1] = Math.max(last[1], current[1])
			} else {
				// If no overlap, add the current interval to the result
				result.push(current)
			}
		}

		// Return the array of merged intervals
		return result
	}
}

/**
 * Time Complexity: O(n log n)
 * - Sorting the intervals takes O(n log n).
 * - Merging the intervals takes O(n).
 *
 * Space Complexity: O(n)
 * - The result array can have up to n intervals in the worst case.
 */
