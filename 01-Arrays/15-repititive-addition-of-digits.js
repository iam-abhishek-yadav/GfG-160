// Problem: Repetitive Addition of Digits (Digital Root)

/*
### **Given** a positive integer `n`, the objective is to repeatedly sum the digits of `n` until a single digit is obtained. This is also known as finding the digital root.

### **Approach**:
1. If `n` is 0, the result is 0.
2. If `n` is a multiple of 9, the result is 9 (since the sum of digits of any multiple of 9 is 9).
3. Otherwise, return the remainder when `n` is divided by 9, as this gives the final single digit.

### **Examples**:

#### Example 1:
**Input**: `n = 1234`  
**Output**: `1`  
**Explanation**:  
- Step 1: \(1 + 2 + 3 + 4 = 10\)  
- Step 2: \(1 + 0 = 1\)

#### Example 2:
**Input**: `n = 5674`  
**Output**: `4`  
**Explanation**:  
- Step 1: \(5 + 6 + 7 + 4 = 22\)  
- Step 2: \(2 + 2 = 4\)

#### Example 3:
**Input**: `n = 9`  
**Output**: `9`  
**Explanation**: Since 9 is already a single-digit number, the result is 9.

---

### Constraints:
- \( 1 \leq n \leq 10^9 \)
*/

class Solution {
	/**
	 * Function to find the single digit result by repeatedly summing the digits of n.
	 * This is also known as the digital root.
	 *
	 * @param {number} n - The input number.
	 * @returns {number} - The single digit result.
	 */
	singleDigit(n) {
		// If n is 0, return 0.
		if (n === 0) return 0

		// If n is a multiple of 9, return 9 as the digital root.
		if (n % 9 === 0) return 9

		// Return the remainder when n is divided by 9 as the digital root.
		return n % 9
	}
}

/**
 * Time Complexity: O(1)
 * - The function involves only a few basic arithmetic operations, so the time complexity is constant, O(1).
 *
 * Space Complexity: O(1)
 * - Only a few variables are used for the calculations, resulting in constant space complexity, O(1).
 */
