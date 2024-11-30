// Problem: Check if Two Strings are Anagrams

/*
### **Given** two strings `s1` and `s2`, the objective is to determine if they are anagrams of each other. 
An anagram is a string that contains the same characters, but the order of characters may differ.

### **Steps for Solution**:
1. If the lengths of the strings `s1` and `s2` differ, they cannot be anagrams, so return `false`.
2. Sort both strings and compare if they are identical after sorting.
3. If the sorted versions of the strings are equal, they are anagrams; otherwise, they are not.

---

### **Examples**:

#### Example 1:
**Input**: `s1 = "geeks"`, `s2 = "kseeg"`  
**Output**: `true`  
**Explanation**: Both strings contain the same characters, so they are anagrams.

#### Example 2:
**Input**: `s1 = "allergy"`, `s2 = "allergic"`  
**Output**: `false`  
**Explanation**: The strings do not have the same characters, so they are not anagrams.

#### Example 3:
**Input**: `s1 = "g"`, `s2 = "g"`  
**Output**: `true`  
**Explanation**: Both strings contain the same character, so they are anagrams.

---

### Constraints:
- \( 1 \leq s1.size(), s2.size() \leq 10^5 \)
*/

class Solution {
	/**
	 * Function to check whether two strings are anagrams of each other.
	 * @param {string} a - First string.
	 * @param {string} b - Second string.
	 * @returns {boolean} - True if the strings are anagrams, otherwise false.
	 */
	areAnagrams(a, b) {
		// If lengths differ, they cannot be anagrams.
		if (a.length !== b.length) return false

		// Convert strings to arrays, sort them, and compare.
		const sortedA = a.split("").sort().join("")
		const sortedB = b.split("").sort().join("")

		return sortedA === sortedB // Return true if sorted strings match.
	}
}

/*
**Time Complexity**: O(n log n)
- Sorting the strings dominates the complexity, where n is the length of the strings.

**Space Complexity**: O(n)
- Additional space is required for the arrays created during the sorting process.
*/
