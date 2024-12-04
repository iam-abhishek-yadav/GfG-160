// User function Template for JavaScript

/**
 * You are given two strings of equal lengths, s1 and s2.
 * The task is to check if s2 is a rotated version of the string s1.
 *
 * Note: The characters in the strings are in lowercase.
 *
 * Examples:
 * Input: s1 = "abcd", s2 = "cdab"
 * Output: true
 * Explanation: After 2 right rotations, s1 will become equal to s2.
 *
 * Input: s1 = "aab", s2 = "aba"
 * Output: true
 * Explanation: After 1 left rotation, s1 will become equal to s2.
 *
 * Input: s1 = "abcd", s2 = "acbd"
 * Output: false
 * Explanation: Strings are not rotations of each other.
 *
 * Constraints:
 * 1 <= s1.size(), s2.size() <= 105
 */

/**
 * @param {string} s1 - The first string.
 * @param {string} s2 - The second string.
 * @returns {boolean} - True if s2 is a rotation of s1, otherwise false.
 */

class Solution {
	areRotations(s1, s2) {
		if (s1.length !== s2.length) {
			return false
		}
		const str = s1 + s1
		return str.includes(s2)
	}
}

/**
 * Time Complexity: O(n)
 * - The `includes` method performs a substring search, which takes O(n) where `n` is the length of the concatenated string.
 *
 * Space Complexity: O(n)
 * - Concatenating `s1` with itself creates a new string of size 2n.
 */
