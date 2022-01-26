function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        //Storing value to be inserted in the array
        let currentVal = arr[i];
        //If condition does not hold then iteration stops which means
        //the elements are all sorted till the iteration
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        //Inserting the stored value in correct position
        arr[j+1] = currentVal;
    }
    console.log(arr);
    return arr;
}

insertionSort([3,1,5,4,2]);