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

  //Function to remove element from end of list
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

  //Function to remove element from beginning of list
  shift() {
    //Checking if list exists
    if (!this.head) return undefined;
    //Storing head value to return
    let currentHead = this.head;
    //Setting the next node as head
    this.head = currentHead.next;
    this.length -= 1;

    //If list becomes empty, then setting tail as null
    if (this.length === 0) this.tail = null;

    console.log("Shifted value: ", currentHead);
    return currentHead;
  }

  //Function to add element to beginning of list
  unshift(val) {
    //Creating new node
    let newNode = new Node(val);
    //Checking if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    //Else inserting node at the beginning and assigning it as head
      newNode.next = this.head;
      this.head = newNode;
    this.length += 1;
    console.log("Unshifted node: ", this);
    return this;
  }

  //Function to get node at a particular index
  get(index) {
    //Checking if index is non-existing
    if (index < 0 || index >= this.length) return null;
    //Using counter to traverse through list
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    console.log("Get: ", current);
    return current;
  }

  //Function to set value of node for particular index
  set(index, val) {
    //Getting value of node
    let foundNode = this.get(index);
    if (foundNode) {
      //Changing value
      foundNode.val = val;
      console.log("Set", foundNode);
      return true;
    }
    return false;
  }

  //Function to insert node in any position
  insert(index,val){
    //Edge cases
    if(index < 0 || index > this.index) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    //Getting previous node from index
    let prev = this.get(index-1);
    //Storing the next value of previous node and swapping
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push("How's");
list.push("it");
list.push("going");
list.push("Bro!!!");
list.pop();
list.shift();
list.unshift("How's");
list.get(2);
list.set(2, "dude!");
list.insert(4,"Nice to meet you");
