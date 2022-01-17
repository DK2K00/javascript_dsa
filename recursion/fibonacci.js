function fib(n){
    //Base case
    if (n <= 2) return 1;
    //Adding the two previous numbers
    return fib(n-1) + fib(n-2);
}
