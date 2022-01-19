function linearSearch(arr,num){
    for(let i = 0; i < arr.length; i++){
        //Returns index of number to be searched
        if(arr[i] === num){
            console.log("Index is: ", i);
          return i;
        }
    }
    //If number is not present returns -1
    console.log("Number not found");
    return -1;
  }

linearSearch([1,2,3,4,5], 4);
linearSearch([1,2,3,4,5], 6);
