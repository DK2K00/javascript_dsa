function binarySearch(arr, num) {
    //Setting pointers
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while(arr[middle] !== num && left <= right) {
        //Change right pointer if middle element is greater
        if(num < arr[middle]){
            right = middle - 1;
        //Change left pointer if middle element is smaller
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    if(arr[middle] === num){
        console.log("Index is: ",middle);
        return middle;
    }
    console.log("Number not found");
    return -1;
}

binarySearch([1,2,3,4,5], 5);
binarySearch([2,5,6,9,13,15,28,30], 103)