class Solution {
	// Function to push all zeros in the array to the end while maintaining the order of non-zero elements
	pushZerosToEnd(arr) {
		// Pointer to track the position where the next non-zero element should be placed
		let zero = 0

		// Iterate through the array
		for (let i = 0; i < arr.length; i++) {
			// If the current element is non-zero
			if (arr[i] !== 0) {
				// Swap the current element with the element at the 'zero' pointer
				;[arr[i], arr[zero]] = [arr[zero], arr[i]]
				// Increment the 'zero' pointer to the next position
				zero++
			}
		}
	}
}

/*
Time Complexity: O(n)
- The array is traversed once, where n is the length of the array.

Space Complexity: O(1)
- The algorithm operates in-place and uses a constant amount of extra space.
*/
