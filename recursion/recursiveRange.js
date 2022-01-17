//Write a function which adds all the numbers from
//0 to argument passed

function recursiveRange(num) {
  //Base case
  if (num === 0) return 0;
  //Calling recursively
  return num + recursiveRange(num - 1);
}
