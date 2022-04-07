class MaxBinaryHeap {
  constructor() {
    //Array to hold the heap
    this.values = [];
  }

  //After inserting an element we need to
  //bubble it up to the right position
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  //Function to store element in correct position
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      //Formula to find parent node of child element
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      //If value is smaller than parent, no bubbling is necessary
      if (element <= parent) break;
      //Else swapping values
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      //Setting value of index as parentIndex and repeating bubbling
      idx = parentIdx;
    }
    console.log(this.values);
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
