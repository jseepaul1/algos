// 1. Display

// Use classes, attributes, and methods in the JavaScript language for this challenge.
// Create display() that uses a while loop and a runner to return a string containing all list values.
// Build what you wish console.log(myList) did!

class Node {
  constructor(value) {
    this.data = value;
    this.next = value.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  display() {
    let str = "";
    if (this.head == null) {
      return str;
    }
    str = this.head.value;
    let runner = this.head.next;
    while (runner != null) {
      str += runner.value;
      runner = runner.next;
    }
    return str;
  }
}

mySLL = new SLL();
mySLL.display();