//Write a function where, given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of
//the pair equals the target average. There may be more than one pair that
//matches the average target. Array is sorted.
//Time: o(N)

function averagePair(arr, num){

    //Creating multiple pointers
    let left = 0
    let right = arr.length-1;
    while(left < right){
      //Checking if average is equal to target
      let avg = (arr[left]+arr[right]) / 2 
      if(avg === num) {
        console.log("Average is equal to target");
        return true;
      }
      //If average is less than target, then the left pointer is incremented
      else if(avg < num) left++
      //Else the right pointer is incremented
      else right--
    }
    console.log("Pair not available");
    return false;
  }
  

averagePair([1,2,3],2.5);
averagePair([3,6,9,12,15,17,24], 115);