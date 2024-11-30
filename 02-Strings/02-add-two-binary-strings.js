// Problem: Add Two Binary Strings

/*
### **Given** two binary strings `s1` and `s2`, the objective is to compute their sum as a binary string.

### **Steps for Binary Addition**:
1. Start from the least significant bit (rightmost) of both strings.
2. Add corresponding bits from `s1` and `s2`, along with any carry from the previous step.
3. If the sum of the bits exceeds 1, update the carry for the next step.
4. Continue until all bits in both strings are processed, along with any remaining carry.
5. Remove any leading zeros from the resulting binary string.

---

### **Examples**:

#### Example 1:
**Input**: `s1 = "1101"`, `s2 = "111"`  
**Output**: `"10100"`  
**Explanation**:
```
  1101
+  111
10100
```

#### Example 2:
**Input**: `s1 = "00100"`, `s2 = "010"`  
**Output**: `"110"`  
**Explanation**:
```
   100
+   10
   110
```

---

### Constraints:
- \( 1 \leq s1.size(), s2.size() \leq 10^6 \)
- Binary strings may contain leading zeros, but the output should not.

*/

class Solution {
	/**
	 * @param {string} s1 - First binary string.
	 * @param {string} s2 - Second binary string.
	 * @returns {string} - The sum of the binary strings as a binary string.
	 */
	addBinary(s1, s2) {
		let i = s1.length - 1 // Pointer for s1
		let j = s2.length - 1 // Pointer for s2
		let carry = 0 // Carry for addition
		let result = "" // Resultant binary string

		// Iterate while there are digits in s1, s2, or carry remains.
		while (i >= 0 || j >= 0 || carry > 0) {
			const bit1 = i >= 0 ? Number(s1[i]) : 0 // Extract bit from s1 or 0 if exhausted.
			const bit2 = j >= 0 ? Number(s2[j]) : 0 // Extract bit from s2 or 0 if exhausted.

			const sum = bit1 + bit2 + carry // Sum current bits and carry.
			result = (sum % 2) + result // Append the current binary digit to the result.
			carry = Math.floor(sum / 2) // Compute carry for the next step.

			i--
			j--
		}

		// Return the final result after trimming leading zeros.
		return result.replace(/^0+/, "") || "0"
	}
}

/*
**Time Complexity**: O(max(n, m))
- Where `n` and `m` are the lengths of `s1` and `s2`. The algorithm processes each character in both strings at most once.

**Space Complexity**: O(max(n, m))
- The result string is proportional to the length of the longer input string.
*/
