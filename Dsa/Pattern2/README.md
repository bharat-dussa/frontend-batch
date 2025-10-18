<h1>🧩 Pattern #2 — Two Pointers </h1>

🔹 What It Is ?

A technique where you use two indices (pointers) to scan or compare elements in a sorted structure (usually an array or string).

Instead of trying all pairs `(O(n²))`, you smartly move the pointers toward each other or in one direction based on a condition — giving `O(n)` time.


**When to Use**

Look for these clues in a question:

> Find pair(s) that sum to X”

> “Remove duplicates from sorted array”

> “Compare / merge sorted arrays”

> “Reverse in place”

> “Palindrome check”

Basically, whenever:

1) Input is sorted (or can be sorted)
2) You need to find or modify something involving two ends or two indices

**⚙️ Why Use This Instead of Others**

| Pattern            | Why Not Ideal Here                              |
| ------------------ | ----------------------------------------------- |
| **Brute Force**    | Compares all pairs (O(n²))                      |
| **Sliding Window** | Works for contiguous ranges, not separate pairs |
| **HashMap**        | Needs extra memory                              |
| ✅ **Two Pointers** | Simple, O(n), in-place, constant space          |


**🧠 Two Variants**

1️⃣ Opposite Ends

Start from both sides → move inward (e.g., sum, palindrome, etc.)

2️⃣ Same Direction

Move one fast, one slow (e.g., remove duplicates, merging, cycle detection)


<br />
<h1>Pair Sum (Opposite Ends)</h1>
<h6>Find two numbers in a sorted array that add up to a target.</h6>

```javascript
function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}

console.log(twoSumSorted([1, 2, 3, 4, 6], 6));

Input: [1, 2, 3, 4, 6], target = 6
Output: [2, 4]
````


✅ Why:

Start small + large

Adjust pointers intelligently

No need for nested loops (O(n))




<h1>💻 Example 2 — Remove Duplicates (Same Direction)</h1>

Problem:
Remove duplicates from a sorted array in-place.

```javascript
function removeDuplicates(nums) {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1; // new array length
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4]));
```

Input: [1, 1, 2, 3, 3, 4]<br />
Output: [1, 2, 3, 4] (length 4)

✅ Why:<br/>
One pointer (slow) keeps track of unique section<br/>
Other (fast) scans the array