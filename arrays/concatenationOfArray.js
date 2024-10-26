/**
 * Concatenation of Array (LeetCode 1929)
 * Difficulty: Easy
 *
 * Problem Description:
 * Given an integer array nums of length n, create and return an array ans of length 2n
 * where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n.
 *
 * Example:
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: For index i=0: ans[0]=nums[0] and ans[0+3]=nums[0]
 *              For index i=1: ans[1]=nums[1] and ans[1+3]=nums[1]
 *              For index i=2: ans[2]=nums[2] and ans[2+3]=nums[2]
 *
 * Approach:
 * 1. Create a new array of length 2n
 * 2. Loop through original array
 * 3. Set values at index i and i+n
 * 4. Return the new array
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - creating new array of size 2n
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const n = nums.length;
  const ans = new Array(2 * n);

  // Fill both halves of the array
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i]; // First half
    ans[i + n] = nums[i]; // Second half
  }

  return ans;
};

// Test cases
console.log(getConcatenation([1, 2, 1])); // [1,2,1,1,2,1]
console.log(getConcatenation([1, 3, 2, 1])); // [1,3,2,1,1,3,2,1]
