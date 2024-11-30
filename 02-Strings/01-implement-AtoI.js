// Problem: Convert String to Integer (Implement atoi)

/*
### **Given** a string `s`, the objective is to convert it into integer format without utilizing any built-in conversion functions.

### **Cases for atoi() conversion**:
1. Skip any leading whitespaces.
2. Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
3. Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is reached. If no digits are present, return `0`.
4. Handle overflow:
   - If the integer is greater than \( 2^{31} - 1 \), return \( 2^{31} - 1 \) (\( 2147483647 \)).
   - If the integer is smaller than \( -2^{31} \), return \( -2^{31} \) (\( -2147483648 \)).

---

### **Examples**:

#### Example 1:
**Input**: `s = "-123"`  
**Output**: `-123`  
**Explanation**: The string `"-123"` can be converted directly to `-123`.

#### Example 2:
**Input**: `s = "  -"`  
**Output**: `0`  
**Explanation**: No digits are present, so the result is `0`.

#### Example 3:
**Input**: `s = " 1231231231311133"`  
**Output**: `2147483647`  
**Explanation**: The number exceeds the maximum limit \( 2^{31} - 1 \), so we return \( 2147483647 \).

#### Example 4:
**Input**: `s = "-999999999999"`  
**Output**: `-2147483648`  
**Explanation**: The number is smaller than \( -2^{31} \), so we return \( -2147483648 \).

#### Example 5:
**Input**: `s = "  -0012gfg4"`  
**Output**: `-12`  
**Explanation**: Parsing stops after `-12` because the next character `'g'` is not a digit.

---

### Constraints:
- \( 1 \leq |s| \leq 15 \)

*/

class Solution {
	/**
	 * @param {string} s - The input string to convert to an integer.
	 * @return {number} - The converted integer.
	 */
	myAtoi(s) {
		let sign = 1 // To store the sign of the number.
		let res = 0 // To store the result.
		let idx = 0 // Pointer to traverse the string.

		// Step 1: Ignore leading whitespaces.
		while (idx < s.length && s[idx] === " ") {
			idx++
		}

		// Step 2: Check for the sign of the number.
		if (idx < s.length && (s[idx] === "-" || s[idx] === "+")) {
			sign = s[idx] === "-" ? -1 : 1
			idx++
		}

		// Step 3: Construct the number digit by digit.
		while (idx < s.length && s[idx] >= "0" && s[idx] <= "9") {
			// Step 4: Handle overflow/underflow cases.
			if (
				res > Math.pow(2, 31) / 10 ||
				(res === Math.floor(Math.pow(2, 31) / 10) && s[idx] - "0" > 7)
			) {
				return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31)
			}

			// Append the current digit to the result.
			res = 10 * res + (s[idx] - "0")
			idx++
		}

		// Return the result after applying the sign.
		return res * sign
	}
}

/*
**Time Complexity**: O(n)
- The string is traversed once to process characters. Each step (ignoring whitespaces, checking the sign, or constructing the number) runs in O(n).

**Space Complexity**: O(1)
- No additional space is used apart from variables to store intermediate results.
*/
