// Problem: First Non-Repeating Character
// Given a string `s` consisting of lowercase Latin letters, return the first non-repeating character in `s`.
// If there is no non-repeating character, return '$'. When returning '$', the driver code will output -1.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 'f'
// Explanation: In the given string, 'f' is the first character in the string which does not repeat.

// Input: s = "racecar"
// Output: 'e'
// Explanation: In the given string, 'e' is the only character in the string which does not repeat.

// Input: s = "aabbccc"
// Output: -1
// Explanation: All the characters in the given string are repeating.

// Constraints:
// 1 <= s.size() <= 10^5

// User function Template for JavaScript
/**
 * @param {string} s
 * @returns {string}
 */
class Solution {
	/**
	 * Function to find the first non-repeating character in a string.
	 * @param {string} s - Input string.
	 * @returns {string} - First non-repeating character or '$' if none exists.
	 */
	nonRepeatingChar(s) {
		const freq = new Map()

		// Count character frequencies
		for (const char of s) {
			freq.set(char, (freq.get(char) || 0) + 1)
		}

		// Find the first character with frequency 1
		for (const char of s) {
			if (freq.get(char) === 1) {
				return char
			}
		}

		// If no non-repeating character is found
		return "$"
	}
}

/**
 * Time Complexity: O(n)
 * - We iterate over the string twice: once to count frequencies and once to find the non-repeating character.
 * - The overall complexity is O(n), where `n` is the length of the string.
 *
 * Space Complexity: O(1)
 * - The space used by the frequency map is bounded by the size of the character set (e.g., 26 for lowercase English letters).
 */
