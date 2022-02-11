class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //Creating new node
    let newNode = new Node(val);

    //Checking if list is empty
    //If so, set head and tail as the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //Else add after tail and set it as new tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    console.log(this);
    return this;
  }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
