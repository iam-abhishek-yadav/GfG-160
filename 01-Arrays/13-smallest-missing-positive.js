// Problem: Find the Smallest Positive Missing Number

/*
**Given** an integer array `arr[]`, find the smallest positive number missing from the array.

### **Examples**:

#### Example 1:
**Input**: `arr[] = [2, -3, 4, 1, 1, 7]`  
**Output**: `3`  
**Explanation**: The smallest positive missing number is `3`.

#### Example 2:
**Input**: `arr[] = [5, 3, 2, 5, 1]`  
**Output**: `4`  
**Explanation**: The smallest positive missing number is `4`.

#### Example 3:
**Input**: `arr[] = [-8, 0, -1, -4, -3]`  
**Output**: `1`  
**Explanation**: The smallest positive missing number is `1`.

### **Constraints**:
- `1 ≤ arr.size() ≤ 10^5`
- `-10^6 ≤ arr[i] ≤ 10^6`
*/

class Solution {
	/**
	 * @param {number[]} arr - The input array of integers.
	 * @returns {number} - The smallest positive missing number.
	 */
	missingNumber(arr) {
		const n = arr.length

		// Step 1: Place positive numbers within the range [1, n] in their correct positions.
		for (let i = 0; i < n; i++) {
			while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
				const correctIndex = arr[i] - 1
				;[arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]] // Swap.
			}
		}

		// Step 2: Identify the first missing positive number.
		for (let i = 0; i < n; i++) {
			if (arr[i] !== i + 1) {
				return i + 1 // Return the first missing positive number.
			}
		}

		// If all are in place, the smallest missing positive is n + 1.
		return n + 1
	}
}

/*
**Time Complexity**: O(n)
- The loop that places elements in their correct positions runs in O(n) due to each element being swapped at most once.
- The loop to identify the missing number runs in O(n).
- Total complexity: O(n).

**Space Complexity**: O(1)
- The algorithm operates directly on the input array and does not require extra space.
*/
