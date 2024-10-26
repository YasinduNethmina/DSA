/**
 * Baseball Game (LeetCode 682)
 * Difficulty: Easy
 *
 * Problem Description:
 * You are keeping score for a baseball game with strange rules. The game consists of several rounds,
 * where the scores of past rounds may affect future rounds' scores. At the beginning of the game,
 * you start with an empty record.
 *
 * These are the operations:
 * 1. Integer x: Record a new score of x
 * 2. "+": Record a new score that is the sum of the previous two scores
 * 3. "D": Record a new score that is double the previous score
 * 4. "C": Invalidate and remove the previous score
 *
 * Example:
 * Input: operations = ["-5","2","C","D","+"]
 * Output: 30
 * Explanation:
 * "-5" - Add -5 to record, record = [-5]
 * "2" - Add 2 to record, record = [-5, 2]
 * "C" - Remove 2, record = [-5]
 * "D" - Double previous score -5, record = [-5, -10]
 * "+" - Sum previous two scores -5 + -10 = -15, record = [-5, -10, -15]
 * Final sum = -5 + -10 + -15 = -30
 *
 * Approach:
 * 1. Initialize empty stack to store scores and sum variable
 * 2. Iterate through operations array
 * 3. For each operation:
 *    - If number: convert to integer and add to stack and sum
 *    - If "C": remove last score from stack and subtract from sum
 *    - If "D": double last score, add to stack and sum
 *    - If "+": add last two scores, add result to stack and sum
 * 4. Return final sum
 *
 * Time Complexity: O(n) - single pass through operations array
 * Space Complexity: O(n) - stack can grow up to size of input array
 *
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let stack = [];
  let sum = 0;

  for (const op of operations) {
    if (!isNaN(op)) {
      const num = Number(op);
      stack.push(num);
      sum += num;
    } else if (op === 'C') {
      const subtracted = stack.pop();
      sum -= subtracted;
    } else if (op === 'D') {
      const doubled = stack[stack.length - 1] * 2;
      stack.push(doubled);
      sum += doubled;
    } else if (op === '+') {
      const added = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(added);
      sum += added;
    }
  }

  return sum;
};

// Test case
console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])); // 27
