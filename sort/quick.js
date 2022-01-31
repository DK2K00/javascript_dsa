//By default first element is seleceted as pivot for simplicity sake
function pivot(arr, start = 0, end = arr.length + 1) {
    //Function to swap between two numbers
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  //Setting first element as pivot
  let pivot = arr[start];
  //Variable to count index to be swapped
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  //Finally sorting the number into correct position
  swap(arr, start, swapIndex);
  return swapIndex;
}

//Setting two pointers to split array
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //Performing quicksort on left half
    quickSort(arr, left, pivotIndex - 1);
    //Performing quicksort on right half
    quickSort(arr, pivotIndex + 1, right);
  }

  console.log(arr);
  return arr;
}

quickSort([3, 5, 7, 2, 6, 1]);
quickSort([100,-3,2,4,6,9,1,2,5,3,23])
