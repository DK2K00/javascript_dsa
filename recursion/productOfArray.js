//Write a function which takes in an array of numbers and returns
//the product of them all

function productOfArray(arr) {
  //Base case
  if (arr.length === 0) return 1;
  //Parsing array to remove first element at each recursion
  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3]);
