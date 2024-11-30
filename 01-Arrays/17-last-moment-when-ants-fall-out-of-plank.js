// Problem: Last Moment When Ants Fall Off the Plank
// Given: A wooden plank of length n. Some ants are walking on the plank,
// each ant moves with a speed of 1 unit per second. Some of the ants move to the left,
// the other move to the right. When two ants moving in opposite directions meet,
// they change directions but it does not take any additional time. When an ant reaches
// one end of the plank, it falls off immediately.

// You are given two integer arrays, left[] and right[], representing the positions
// of the ants moving to the left and right respectively. Return the moment when the last
// ant(s) fall off the plank.

// Examples:

// Input: n = 4, left[] = [2], right[] = [0, 1, 3]
// Output: 4
// Explanation: The last ant falls off at t = 4.

// Input: n = 4, left[] = [], right[] = [0, 1, 2, 3, 4]
// Output: 4
// Explanation: All ants are moving to the right, and the last one falls off at t = 4.

// Input: n = 3, left[] = [0], right[] = [3]
// Output: 0
// Explanation: The ants are already at the edges, so they fall off immediately.

// Constraints:
// 1 ≤ n ≤ 10^5
// 0 ≤ left.length ≤ n + 1
// 0 ≤ left[i] ≤ n
// 0 ≤ right.length ≤ n + 1
// 0 ≤ right[i] ≤ n
// 1 ≤ left.length + right.length ≤ n + 1
// All values of left and right are unique, and each value can appear only in one of the two arrays.

class Solution {
	/**
	 * Function to find the last moment when an ant falls off the stick.
	 *
	 * @param {number} n - The length of the stick.
	 * @param {number[]} left - An array representing the positions of ants moving to the left.
	 * @param {number[]} right - An array representing the positions of ants moving to the right.
	 * @returns {number} - The last moment when an ant falls off the stick.
	 */
	getLastMoment(n, left, right) {
		let maxTime = 0

		// For ants moving to the left, time is their position
		for (let pos of left) {
			maxTime = Math.max(maxTime, pos)
		}

		// For ants moving to the right, time is n - their position
		for (let pos of right) {
			maxTime = Math.max(maxTime, n - pos)
		}

		return maxTime
	}
}

/**
 * Time Complexity: O(L + R)
 * - We iterate over the `left` and `right` arrays to find the maximum time, where `L` is the length of the `left` array and `R` is the length of the `right` array.
 * - Therefore, the time complexity is O(L + R).
 *
 * Space Complexity: O(1)
 * - We only use a constant amount of extra space for the variable `maxTime`, so the space complexity is O(1).
 */
