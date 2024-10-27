class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAt(data, position) {
    if (position < 0 || position > this.size) {
      return false;
    }

    if (position === 0) {
      this.prepend(data);
      return true;
    }

    let newNode = new Node(data);
    let current = this.head;
    let prev = null;
    let index = 0;

    while (index < position) {
      prev = current;
      current = current.next;
      index++;
    }

    newNode.next = current;
    prev.next = newNode;
    this.size++;
    return true;
  }

  remove(data) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.data === data) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }

        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    let result = [];

    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(' -> ');
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();

// Add elements and print after each operation
list.append(10);
list.append(20);
list.append(30);

list.prepend(40);

list.insertAt(50, 1);
list.remove(40);

console.log(list.print());
console.log(list.getSize());
