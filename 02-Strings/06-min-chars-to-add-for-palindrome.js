// Problem: Minimum Characters to Add to Make a String Palindrome
// Given a string `s`, the task is to find the minimum characters to be added at the front to make the string a palindrome.

// Examples:
// Input: s = "abc"
// Output: 2
// Explanation: Add 'b' and 'c' at front of above string to make it palindrome : "cbabc"

// Input: s = "aacecaaaa"
// Output: 2
// Explanation: Add 2 'a's at front of above string to make it palindrome : "aaaacecaaaa"

// Constraints:
// 1 <= s.size() <= 10^6

// User function Template for JavaScript

/**
 * @param {string} str - The input string.
 * @returns {number} - Minimum number of characters needed to make the string a palindrome.
 */

class Solution {
	minChar(str) {
		// Reverse the input string
		const reversedStr = str.split("").reverse().join("")
		// Concatenate original string, separator, and reversed string
		const combinedStr = str + "$" + reversedStr
		const n = combinedStr.length

		// Create LPS (Longest Prefix Suffix) array
		const lps = new Array(n).fill(0)

		// Compute LPS array
		for (let i = 1; i < n; i++) {
			let j = lps[i - 1]
			while (j > 0 && combinedStr[i] !== combinedStr[j]) {
				j = lps[j - 1]
			}
			if (combinedStr[i] === combinedStr[j]) {
				j++
			}
			lps[i] = j
		}

		// The minimum characters to make the string a palindrome
		return str.length - lps[n - 1]
	}
}

/**
 * Time Complexity: O(n)
 * - Building the LPS array takes O(n), where `n` is the length of the combined string.
 *
 * Space Complexity: O(n)
 * - The LPS array requires O(n) space.
 */
