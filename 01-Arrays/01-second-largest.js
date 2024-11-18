class Solution {
	// Function to find the second largest element in the array
	getSecondLargest(arr) {
		// Initialize max and second max to -1 (assuming -1 if no valid second largest)
		let [max, secMax] = [-1, -1]

		// Iterate through the array
		for (const num of arr) {
			// If the current number is greater than the largest seen so far
			if (num > max) {
				// Update second largest to current largest and largest to current number
				;[secMax, max] = [max, num]
			}
			// If the current number is less than the largest but greater than second largest
			else if (num > secMax && num < max) {
				// Update second largest
				secMax = num
			}
		}

		// Return the second largest value
		return secMax
	}
}

/*
Time Complexity: O(n)
- We iterate through the array exactly once, where n is the length of the array.

Space Complexity: O(1)
- The algorithm uses a constant amount of extra space for the variables `max` and `secMax`.
*/
