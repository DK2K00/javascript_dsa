//Created a class for Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Class for singly linked list
class SinglyLinkedList {
  //Initialization
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Function to attach a new node at the end of the list
  push(val) {
    let newNode = new Node(val);
    //Checking if list already exists
    if (!this.head) {
      //If not setting both head and tail as the new node
      this.head = newNode;
      this.tail = this.head;
      //Else attaching the new node at the end
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    console.log("Added: ", this);
    return this;
  }

  pop() {
    //Checking if list is empty
    if (!this.head) return undefined;

    let current = this.head;
    //Checking if list has only one element
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      console.log(current);
      return current;
    }
    //Variable to point to new tail
    let newTail = current;

    //Traversing through the list
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    //Setting the new tail by assigning the variable newTail
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    console.log("Popped", current);
    return current;
  }
}

let list = new SinglyLinkedList();
list.push("How's");
list.push("it");
list.push("going!");
list.pop();
