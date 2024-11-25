// Problem: Maximum Circular Subarray Sum

/*
**Given** an array of integers `arr[]` in a circular fashion, find the maximum subarray sum that can be obtained.

### **Examples**:

#### Example 1:
**Input**: `arr[] = [8, -8, 9, -9, 10, -11, 12]`

**Output**: `22`

**Explanation**: Starting from the last element `12` and moving circularly, the subarray `[12, 8, -8, 9, -9, 10]` gives the maximum sum of `22`.

#### Example 2:
**Input**: `arr[] = [10, -3, -4, 7, 6, 5, -4, -1]`

**Output**: `23`

**Explanation**: The maximum sum of the circular subarray is `23`. The subarray is `[7, 6, 5, -4, -1, 10]`.

#### Example 3:
**Input**: `arr[] = [-1, 40, -14, 7, 6, 5, -4, -1]`

**Output**: `52`

**Explanation**: The circular subarray `[7, 6, 5, -4, -1, -1, 40]` has the maximum sum of `52`.

### **Constraints**:
- `1 ≤ arr.size() ≤ 10^5`
- `-10^4 ≤ arr[i] ≤ 10^4`
*/

class Solution {
	/**
	 * @param {number[]} arr - The input array of integers
	 * @returns {number} - The maximum circular subarray sum
	 */
	circularSubarraySum(arr) {
		const n = arr.length

		// Calculate the maximum sum for the normal (non-circular) subarray.
		const maxNormal = this.normalSubarraySum(arr)

		// If all elements are negative, the maximum normal sum is the result.
		if (maxNormal < 0) return maxNormal

		// Calculate the total sum of the array.
		const arrSum = arr.reduce((sum, num) => sum + num, 0)

		// Invert the array to calculate the minimum subarray sum (by finding max sum in the inverted array).
		const invertedArr = arr.map((num) => -num)
		const maxInverted = this.normalSubarraySum(invertedArr)

		// Calculate the maximum circular subarray sum.
		const maxCircular = arrSum + maxInverted // Equivalent to arrSum - minSubarraySum.

		// Return the maximum of the two results.
		return Math.max(maxNormal, maxCircular)
	}

	// Helper function to calculate the maximum normal subarray sum (Kadane's Algorithm).
	normalSubarraySum(arr) {
		let maxEnding = arr[0]
		let maxSoFar = arr[0]

		for (let i = 1; i < arr.length; i++) {
			maxEnding = Math.max(arr[i], maxEnding + arr[i])
			maxSoFar = Math.max(maxSoFar, maxEnding)
		}

		return maxSoFar
	}
}

/*
**Time Complexity**: O(n)
- Kadane's algorithm computes the normal subarray sum in O(n).
- Total array sum is computed in O(n).
- Maximum sum in the inverted array is computed in O(n).
- Overall complexity: O(n).

**Space Complexity**: O(n)
- An auxiliary `invertedArr` array is used, requiring O(n) space.
- Other operations use O(1) extra space.
*/
