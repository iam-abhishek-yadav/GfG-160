class Solution {
	findMajority(arr) {
		// Variables to store potential candidates and their counts
		let cnt1 = 0,
			cnt2 = 0
		let el1 = null,
			el2 = null

		// Step 1: Boyer-Moore Voting Algorithm to find two potential candidates
		for (let num of arr) {
			if (el1 === num) {
				cnt1++
			} else if (el2 === num) {
				cnt2++
			} else if (cnt1 === 0) {
				el1 = num
				cnt1 = 1
			} else if (cnt2 === 0) {
				el2 = num
				cnt2 = 1
			} else {
				cnt1--
				cnt2--
			}
		}

		// Step 2: Verify if the candidates actually appear more than n/3 times
		cnt1 = 0
		cnt2 = 0
		for (let num of arr) {
			if (num === el1) cnt1++
			else if (num === el2) cnt2++
		}

		const req = Math.floor(arr.length / 3) + 1 // Threshold for majority
		const result = []
		if (cnt1 >= req) result.push(el1)
		if (cnt2 >= req) result.push(el2)

		// Step 3: Return the result sorted in ascending order
		return result.sort((a, b) => a - b)
	}
}

/*
**Time Complexity**: O(n)
- Step 1: The first loop runs through the array to find potential candidates (O(n)).
- Step 2: The second loop verifies the counts of the candidates (O(n)).
- Total: O(n) + O(n) = O(n).

**Space Complexity**: O(1)
- The algorithm uses constant extra space for counters and candidate variables.
*/
