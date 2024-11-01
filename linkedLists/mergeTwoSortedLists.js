/**
 * Merge Two Sorted Lists (LeetCode 21)
 * Difficulty: Easy
 *
 * Problem Description:
 * Given two sorted linked lists list1 and list2, merge them into one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 * Input: list1 = [1,2,4] list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Approach:
 * 1. Create a dummy node to handle edge cases
 * 2. Assign a variable called current and set it to dummy
 * 3. While both list1 and list2 exist:
 *    - Compare values: if list1.val <= list2.val
 *    - If true:
 *      • Set current.next to point to list1 node
 *      • Move list1 pointer: list1 = list1.next
 *    - If false:
 *      • Set current.next to point to list2 node
 *      • Move list2 pointer: list2 = list2.next
 *    - Move current pointer: current = current.next
 * 4. After loop ends, one list is empty
 *    - Attach remaining nodes: current.next = list1 || list2
 * 5. Return dummy.next as the head of merged list
 *
 * Time: O(min(n,m)) - only iterate until shorter list ends
 * Space: O(1) - only using pointers, no extra space
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (list1, list2) {
  // Create a dummy node to build the list
  let dummy = new ListNode();
  // Assign the dummy node
  let current = dummy;

  // Loop runs while both lists have nodes
  while (list1 && list2) {
    if (list1.val >= list2.val) {
      // Point current's next to the list2 node
      current.next = list2;
      // Move list2 to the next node
      list2 = list2.next;
      // Move current to where we just created
      current = current.next;
    } else {
      current.next = list1;
      list1 = list1.next;
      current = current.next;
    }
  }

  // Assign any remaining nodes to the current.next
  current.next = list1 || list2;
  // Return the first real node
  return dummy.next;
};

// Helper function to create linked list from array
function createLinkedList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array for testing
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Test cases
const test1_list1 = createLinkedList([1, 2, 4]);
const test1_list2 = createLinkedList([1, 3, 4]);
console.log(linkedListToArray(mergeTwoLists(test1_list1, test1_list2)));
// Expected output: [1, 1, 2, 3, 4, 4]

const test2_list1 = createLinkedList([]);
const test2_list2 = createLinkedList([0]);
console.log(linkedListToArray(mergeTwoLists(test2_list1, test2_list2)));
// Expected output: [0]

const test3_list1 = createLinkedList([]);
const test3_list2 = createLinkedList([]);
console.log(linkedListToArray(mergeTwoLists(test3_list1, test3_list2)));
// Expected output: []
