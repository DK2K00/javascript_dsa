//Function to marge two sorted arrays
function mergeArray(arr1, arr2) {
  //Creating new array to store merged data
  let result = [];
  let i = 0;
  let j = 0;

  //Loop runs for the duration of equal array length
  //Will exit once either of the arrays are sorted
  while (i < arr1.length && j < arr2.length) {
    //Compares element from each array
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  //Will push remaining elements from array1 into sorted array
  //once above loop is executed
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  //Will push remaining elements from array2 into sorted array
  //once above loop is executed
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  console.log(result);
  return result;
}

//Function to split sorted array
function mergeSort(arr){
  //Returns only if array is finally split into single element
  if(arr.length <= 1) return arr;
  //Splitting array into half recursively
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));

  return mergeArray(left,right);
}

mergeSort([1,2,50,60,4,3,55,99,100]);
