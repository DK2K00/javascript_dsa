function factorial(num){
    //BAse case
    if(num === 1 || num === 0)
        return 1;

    console.log(num * factorial(num-1))
    //Calling recursively
    return num * factorial(num-1);
}

factorial(5);