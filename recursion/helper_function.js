function collectOddValues(arr){
    //If recursion is used, then result will end up being initialized
    //as empty array repeatedly. So helper recursion function is used
    let result = [];

    function helper(helperInput){
        //Check if length of given arr is 0
        if(helperInput.length === 0) {
            return;
        }
        
        //Check for odd number
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        //The first element in given is sliced recursively
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    console.log(result);
    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])