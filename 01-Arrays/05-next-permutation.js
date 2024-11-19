class Solution {
	// Function to find the next permutation of the array
	nextPermutation(arr) {
		const n = arr.length

		// Step 1: Find the first decreasing element from the end
		let i = n - 2
		while (i >= 0 && arr[i] >= arr[i + 1]) {
			i--
		}

		// Step 2: If such an element is found, find the next larger element to swap
		if (i >= 0) {
			let j = n - 1
			while (j >= 0 && arr[j] <= arr[i]) {
				j--
			}
			// Swap elements at indices i and j
			this.swap(arr, i, j)
		}

		// Step 3: Reverse the subarray from index i+1 to the end
		this.reverse(arr, i + 1, n - 1)
	}

	// Helper function to swap two elements in the array
	swap(arr, i, j) {
		;[arr[i], arr[j]] = [arr[j], arr[i]]
	}

	// Helper function to reverse a subarray
	reverse(arr, start, end) {
		while (start < end) {
			this.swap(arr, start, end)
			start++
			end--
		}
	}
}

/*
Time Complexity: O(n)
- Step 1: Traverses the array once to find the first decreasing element (O(n)).
- Step 2: Traverses the remaining subarray to find the next larger element (O(n)).
- Step 3: Reverses a portion of the array (O(n)).
- Total: O(n).

Space Complexity: O(1)
- The algorithm operates in-place, using only a constant amount of extra space.
*/
