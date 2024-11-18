class Solution {
	// Function to reverse the given array in-place
	reverseArray(arr) {
		// Initialize two pointers: one at the beginning and the other at the end of the array
		let left = 0,
			right = arr.length - 1

		// Swap elements while the left pointer is less than the right pointer
		while (left < right) {
			// Swap the elements at the left and right pointers
			;[arr[left], arr[right]] = [arr[right], arr[left]]

			// Move the left pointer forward and the right pointer backward
			left++
			right--
		}

		// Return the reversed array
		return arr
	}
}

/*
Time Complexity: O(n)
- The array is traversed once, where n is the length of the array.

Space Complexity: O(1)
- The algorithm operates in-place and uses a constant amount of extra space.
*/
