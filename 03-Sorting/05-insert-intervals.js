/**
 * Problem Statement:
 * Geek has an array of non-overlapping intervals where `intervals[i] = [starti, endi]`,
 * sorted in ascending order by `starti`. A new interval `newInterval = [newStart, newEnd]`
 * is to be inserted, such that the intervals remain sorted and overlapping intervals are merged.
 *
 * Examples:
 *
 * Input: intervals = [[1,3], [4,5], [6,7], [8,10]], newInterval = [5,6]
 * Output: [[1,3], [4,7], [8,10]]
 * Explanation: The newInterval [5,6] overlaps with [4,5] and [6,7]. The merged interval is [4,7].
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,9]
 * Output: [[1,2], [3,10], [12,16]]
 * Explanation: The newInterval [4,9] overlaps with [3,5], [6,7], and [8,10]. The merged interval is [3,10].
 *
 * Constraints:
 * - 1 ≤ intervals.size() ≤ 10^5
 * - 0 ≤ start[i], end[i] ≤ 10^9
 */

// Solution:

/**
 * @param {number[][]} intervals - Sorted list of non-overlapping intervals.
 * @param {number[]} newInterval - The interval to be inserted.
 * @returns {number[][]} - Updated list of intervals after merging.
 */
class Solution {
	insertInterval(intervals, newInterval) {
		const result = [] // To store the final merged intervals
		let [newStart, newEnd] = newInterval // Destructure the new interval's start and end

		for (let i = 0; i < intervals.length; i++) {
			const [start, end] = intervals[i] // Current interval

			// Case 1: Current interval ends before the new interval starts
			if (end < newStart) {
				result.push(intervals[i]) // Add the current interval as it is
			}
			// Case 2: Current interval starts after the new interval ends
			else if (start > newEnd) {
				result.push([newStart, newEnd]) // Add the merged new interval
				result.push(...intervals.slice(i)) // Add the remaining intervals
				return result // We are done, as all intervals are processed
			}
			// Case 3: Current interval overlaps with the new interval
			else {
				// Update the new interval to include the current interval
				newStart = Math.min(newStart, start) // Smallest start time
				newEnd = Math.max(newEnd, end) // Largest end time
			}
		}

		// Add the final new interval if not added during the iteration
		result.push([newStart, newEnd])

		return result
	}
}

/**
 * Time Complexity: O(n)
 * - Each interval is processed once.
 *
 * Space Complexity: O(n)
 * - The result array can have up to n intervals in the worst case.
 */
