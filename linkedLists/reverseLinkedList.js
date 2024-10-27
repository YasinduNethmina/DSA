/**
 * Reverse Linked List (LeetCode 206)
 * Difficulty: Easy
 *
 * Problem Description:
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Approach:
 * 1. Initialize two pointers: prev (null) and current (head)
 * 2. Iterate through the list while current exists
 * 3. Store current.next in temporary variable to preserve the connection
 * 4. Reverse the pointer by setting current.next to prev
 * 5. Move prev to current position
 * 6. Move current to the stored next position
 * 7. Return prev as the new head of reversed list
 *
 * Time Complexity: O(n) - single pass through the linked list
 * Space Complexity: O(1) - only using pointers, no extra space needed
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    // Store next node
    let nextTemp = current.next;

    // Reverse the pointer
    current.next = prev;

    // Move pointers one step forward
    prev = current;
    current = nextTemp;
  }

  return prev;
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
const test1 = createLinkedList([1, 2, 3, 4, 5]);
console.log(linkedListToArray(reverseList(test1))); // [5, 4, 3, 2, 1]

const test2 = createLinkedList([1, 2]);
console.log(linkedListToArray(reverseList(test2))); // [2, 1]

const test3 = createLinkedList([]);
console.log(linkedListToArray(reverseList(test3))); // []
