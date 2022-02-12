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
    console.log("Push: ", this);
    return this;
  }

  //Function to remove last element in the list
  pop() {
    //Checking if list exists
    if (!this.head) return undefined;
    let poppedNode = this.tail;

    //If only single element exists
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      //Changing pointers
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length++;
    console.log("Pop: ", poppedNode);
    return poppedNode;
  }
}
let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.pop();
