// Problem: Maximum Product Subarray

/*
**Given** an array `arr[]` that contains positive and negative integers (may contain 0 as well). Find the maximum product that can be obtained from a subarray of `arr`.

### **Note**:
- The product of a subarray can be positive or negative.
- You are guaranteed that the output fits in a 32-bit integer.

### **Examples**:

#### Example 1:
**Input**: `arr[] = [-2, 6, -3, -10, 0, 2]`

**Output**: `180`

**Explanation**: The subarray with the maximum product is `{6, -3, -10}` with product = `6 * (-3) * (-10) = 180`.

#### Example 2:
**Input**: `arr[] = [-1, -3, -10, 0, 6]`

**Output**: `30`

**Explanation**: The subarray with the maximum product is `{-3, -10}` with product = `(-3) * (-10) = 30`.

#### Example 3:
**Input**: `arr[] = [2, 3, 4]`

**Output**: `24`

**Explanation**: The array has all positive elements, so the product of all elements is the maximum product: `2 * 3 * 4 = 24`.

### **Constraints**:
- `1 ≤ arr.size() ≤ 10^6`
- `-10 ≤ arr[i] ≤ 10`

*/

class Solution {
	/**
	 * @param {number[]} arr - The input array of integers
	 * @return {number} - The maximum product of any contiguous subarray
	 */
	maxProduct(arr) {
		let n = arr.length
		let maxProduct = arr[0] // Initialize the max product as the first element
		let minProduct = arr[0] // Initialize the min product as the first element
		let result = arr[0] // The result will store the maximum product found so far

		// Iterate through the array starting from the second element
		for (let i = 1; i < n; i++) {
			// If the current element is negative, swap maxProduct and minProduct
			if (arr[i] < 0) {
				;[maxProduct, minProduct] = [minProduct, maxProduct]
			}

			// Update maxProduct and minProduct for the current element
			maxProduct = Math.max(arr[i], maxProduct * arr[i])
			minProduct = Math.min(arr[i], minProduct * arr[i])

			// Update the result with the maximum product found so far
			result = Math.max(result, maxProduct)
		}

		return result // Return the maximum product found
	}
}

/*
**Time Complexity**: O(n)
- We only traverse the array once, so the complexity is O(n), where `n` is the size of the array.

**Space Complexity**: O(1)
- We only use a constant amount of extra space to store the variables `maxProduct`, `minProduct`, and `result`.
*/
