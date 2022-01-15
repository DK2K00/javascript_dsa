//Write a function called sameFrequency. Given two positive integers,
//find out if the two numbers have the same frequency of digits.
//Time: o(N)
function sameFrequency(n1,n2){
   //Convert numbers to string
    n1 = n1.toString();
    n2 = n2.toString();

   console.log(n1,n2);

   //Edge case to check if length of two numbers is the same
    if(n1.length !== n2.length){
        console.log("Different length");
        return false;
    }

   //Create objects for individual numbers
    let num1 = {};
    let num2 = {};

    //Insert each digit of the number into the object
    for(let s of n1){
        num1[s] = (num1[s] || 0) + 1;
    }
    console.log(num1);

    for(let s of n2){
        num2[s] = (num2[s] || 0) + 1;
    }
    console.log(num2);

    for(let s in num1){
        //Check if element is present in both objects.
        if(!(s in num2)){
            console.log("Not available");
            return false;
        }
    
        //Check if frequency of each key is the same
        if(num1[s] !== num2[s]){
            console.log("Frequency mismatch");
            return false;
        }
    }

    return true;
  }

sameFrequency(2,52);
sameFrequency(25,52);
sameFrequency(27,52);
sameFrequency(225,552);