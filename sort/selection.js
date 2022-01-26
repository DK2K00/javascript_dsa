function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        //Setting first element as smallest
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            //Checking for smallest element in array
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        //Swapping positions of smallest element with index i
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    console.log(arr);
    return arr;
}

selectionSort([3,5,1,2,4]);