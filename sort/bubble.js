function bubbleSort(arr){
    //Setting i as array length to reduce number of
    //comparisons after each iteration
    for(let i = arr.length; i > 0; i--){
        //If no swaps were made, then array is sorted
        let noSwap = true;
        for(let j = 0; j < arr.length; j++){
            //Sending largest number to the end of the array
            if(arr[j+1] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        //Checking if no swaps were made
        if(noSwap)  break;
    }
    console.log(arr);
    return arr;
}

bubbleSort([3,2,5,4,1]);