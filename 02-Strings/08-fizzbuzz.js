/**
 * Problem Statement:
 * Fizz Buzz Problem involves that given an integer n, for every integer 0 < i <= n, the task is to output:
 *
 * - "FizzBuzz" if i is divisible by 3 and 5,
 * - "Fizz" if i is divisible by 3,
 * - "Buzz" if i is divisible by 5,
 * - "i" as a string, if none of the conditions are true.
 *
 * Return an array of strings.
 *
 * Examples:
 *
 * Input: n = 3
 * Output: ["1", "2", "Fizz"]
 * Explanation: 1 and 2 are neither divisible by 3 nor 5, so we just output 1 and 2, and 3 is divisible by 3 so we output "Fizz".
 *
 * Input: n = 10
 * Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]
 *
 * Input: n = 20
 * Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz"]
 *
 * Constraints:
 * - 1 ≤ n ≤ 10^6
 */

// Solution:

/**
 * @param {number} n - The number up to which FizzBuzz is calculated.
 * @return {string[]} - An array containing the FizzBuzz sequence.
 */
class Solution {
	fizzBuzz(n) {
		// Initialize an empty array to store the results
		const result = []

		// Iterate from 1 to n
		for (let i = 1; i <= n; i++) {
			// Check if the current number is divisible by both 3 and 5
			if (i % 3 === 0 && i % 5 === 0) {
				result.push("FizzBuzz") // Add "FizzBuzz" for multiples of both 3 and 5
			}
			// Check if the current number is divisible by 3 only
			else if (i % 3 === 0) {
				result.push("Fizz") // Add "Fizz" for multiples of 3
			}
			// Check if the current number is divisible by 5 only
			else if (i % 5 === 0) {
				result.push("Buzz") // Add "Buzz" for multiples of 5
			}
			// For all other numbers
			else {
				result.push(i.toString()) // Convert the number to a string and add it to the array
			}
		}

		// Return the FizzBuzz result array
		return result
	}
}

/**
 * Time Complexity: O(n)
 * - A single loop runs from 1 to n, performing constant-time checks and operations.
 *
 * Space Complexity: O(n)
 * - The output array `result` requires O(n) space to store n elements.
 */
