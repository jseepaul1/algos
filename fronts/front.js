// Add Front

// Write a method that accepts a value and create a new node,
// assign it to the list head, and return a pointer to the new head node.

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
    }
  }
}

let newSLL = new SLL();
// console.log(newSLL);
// newSLL.addFront(12);
// console.log(newSLL);
// newSLL.addFront(18);
// console.log(newSLL);

// Remove Front

// Write a method to remove the head node and return the new list head node.
// If the list is empty, return null.

class newNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  removeFront() {
    if (this.head == null) {
      return this.head;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
  }
}

let mySLL = new SinglyLinkedList();
// console.log(mySLL);
// mySLL.removeFront(2);
// console.log(mySLL);

// Front

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

class myNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class singlyLL {
  constructor() {
    this.head = null;
  }

  front(value) {
    if (value != null) {
      return value;
    } else {
      return null;
    }
  }
}

// let frontSLL = new singlyLL();
// let newVal = new myNode(5);
// frontSLL.head = newVal;
// console.log(frontSLL);
