// Problem: Pattern Matching with KMP Algorithm
// Given two strings, one is a text string `txt` and the other is a pattern string `pat`.
// The task is to return the indices of all occurrences of the pattern string in the text string using 0-based indexing.
// Return an empty list if no occurrences are found.

// Examples:
// Input: txt = "abcab", pat = "ab"
// Output: [0, 3]
// Explanation: The string "ab" occurs twice in txt, one starts at index 0 and the other at index 3.

// Input: txt = "abesdu", pat = "edu"
// Output: []
// Explanation: There's no substring "edu" present in txt.

// Input: txt = "aabaacaadaabaaba", pat = "aaba"
// Output: [0, 9, 12]

// Constraints:
// 1 ≤ txt.size() ≤ 10^6
// 1 ≤ pat.size() < txt.size()
// Both the strings consist of lowercase English alphabets.

// User function Template for JavaScript

/**
 * @param {string} pat - The pattern to search for.
 * @param {string} txt - The text in which to search for the pattern.
 * @returns {number[]} - Array of starting indices where the pattern is found in the text.
 */
class Solution {
	search(pat, txt) {
		const txtLen = txt.length
		const patLen = pat.length
		const lps = Array(patLen).fill(0)
		const result = []

		// Step 1: Build the LPS (Longest Prefix Suffix) array
		let len = 0 // Length of the previous longest prefix suffix
		let i = 1
		while (i < patLen) {
			if (pat[i] === pat[len]) {
				len++
				lps[i] = len
				i++
			} else {
				if (len !== 0) {
					len = lps[len - 1]
				} else {
					lps[i] = 0
					i++
				}
			}
		}

		// Step 2: Search for the pattern in the text using the LPS array
		let j = 0 // Index for the pattern
		i = 0 // Index for the text
		while (i < txtLen) {
			if (pat[j] === txt[i]) {
				i++
				j++
			}

			if (j === patLen) {
				result.push(i - j) // Pattern found, store the starting index
				j = lps[j - 1]
			} else if (i < txtLen && pat[j] !== txt[i]) {
				if (j !== 0) {
					j = lps[j - 1]
				} else {
					i++
				}
			}
		}

		return result
	}
}

/**
 * Time Complexity: O(n + m)
 * - Constructing the LPS array takes O(m), where `m` is the length of the pattern.
 * - Searching for the pattern in the text takes O(n), where `n` is the length of the text.
 * - Total complexity: O(n + m).
 *
 * Space Complexity: O(m)
 * - The LPS array requires O(m) space.
 */
