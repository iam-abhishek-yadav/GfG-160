// Problem: Split Array into Three Equal Sum Parts

/*
### **Given** an array `arr[]`, the objective is to determine if the array can be split into three consecutive subarrays where each subarray has the same sum.
If the array can be split, return an array with two indices, otherwise return `[-1, -1]`.

### **Approach**:
1. Calculate the total sum of the array.
2. If the total sum is not divisible by 3, return `[-1, -1]` as it is impossible to split into equal parts.
3. Calculate the target sum for each subarray as `totalSum / 3`.
4. Traverse the array to find two partition points such that the sum of the elements in each subarray is equal to the target sum.

### **Examples**:

#### Example 1:
**Input**: `arr[] = [1, 3, 4, 0, 4]`  
**Output**: `true`  
**Explanation**: The array can be split as follows: `[1, 3]`, `[4, 0]`, and `[4]`, all with a sum of 4.

#### Example 2:
**Input**: `arr[] = [2, 3, 4]`  
**Output**: `false`  
**Explanation**: No three subarrays exist that have the same sum.

#### Example 3:
**Input**: `arr[] = [0, 1, 1]`  
**Output**: `false`  
**Explanation**: No three subarrays exist that have the same sum.

---

### Constraints:
- \( 3 \leq arr.size() \leq 10^6 \)
- \( 0 \leq arr[i] \leq 10^6 \)
*/

class Solution {
	/**
	 * Function to find the indices of the two splits in the array where the sum of
	 * the three partitions are equal.
	 * @param {number[]} arr - The array to split.
	 * @returns {number[]} - Indices of the two splits, or [-1, -1] if no valid splits are found.
	 */
	findSplit(arr) {
		const totalSum = arr.reduce((acc, num) => acc + num, 0)

		// If totalSum is not divisible by 3, return [-1, -1]
		if (totalSum % 3 !== 0) {
			return [-1, -1]
		}

		const targetSum = totalSum / 3
		let currentSum = 0
		let firstSplitIndex = -1
		let secondSplitIndex = -1

		// Find first partition
		for (let i = 0; i < arr.length; i++) {
			currentSum += arr[i]
			if (currentSum === targetSum) {
				firstSplitIndex = i
				break
			}
		}

		if (firstSplitIndex === -1) return [-1, -1] // No valid split

		currentSum = 0
		// Find second partition
		for (let j = firstSplitIndex + 1; j < arr.length; j++) {
			currentSum += arr[j]
			if (currentSum === targetSum) {
				secondSplitIndex = j
				break
			}
		}

		if (secondSplitIndex === -1 || secondSplitIndex === arr.length - 1) {
			return [-1, -1] // No valid second split
		}

		return [firstSplitIndex, secondSplitIndex]
	}
}

/**
 * Time Complexity: O(n)
 * - The solution iterates through the array twice: once to calculate the total sum and
 * once for each partition search. Therefore, the overall time complexity is linear, O(n).
 *
 * Space Complexity: O(1)
 * - Only a few variables are used to track sums and indices, so the space complexity is constant, O(1).
 */
