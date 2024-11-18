class Solution {
	// Function to rotate the array by d positions to the left
	rotateArr(arr, d) {
		const n = arr.length

		// Handle cases where d is greater than n
		d = d % n

		// Helper function to reverse a portion of the array
		const reverse = (start, end) => {
			while (start < end) {
				// Swap elements at start and end
				;[arr[start], arr[end]] = [arr[end], arr[start]]
				start++
				end--
			}
		}

		// Reverse the first d elements
		reverse(0, d - 1)

		// Reverse the remaining elements
		reverse(d, n - 1)

		// Reverse the entire array
		reverse(0, n - 1)
	}
}

/*
Time Complexity: O(n)
- The `reverse` function is called three times, each with a portion of the array. This results in a total of O(n) operations.

Space Complexity: O(1)
- The algorithm uses a constant amount of extra space and operates in-place.
*/
