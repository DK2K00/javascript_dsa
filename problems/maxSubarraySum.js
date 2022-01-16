//Given an array of integers and a number, write a function which finds the maximum
//sum of a subarray with the length of the number passed to the function.
//Time: o(N)

function maxSubarraySum(arr, n) {
  //Set the initial maxSum as the first n elements in the array
  let i = 0;
  let maxSum = 0;
  let tempSum = 0;

  //Checking if length of array is less than given size.
  if (arr.length < n) return null;

  //Calculating initial maxSum to maintain time complexity
  for (i = 0; i < n; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  //Calculating maxSum for each subArray
  for (i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];

    if (tempSum > maxSum) maxSum = tempSum;
  }
  console.log(maxSum);
  return maxSum;
}

maxSubarraySum([100, 200, 300, 400], 2);
maxSubarraySum([23, 43, 65, 12, 98, 67, 88, 43, 65, 32, 98], 3);
