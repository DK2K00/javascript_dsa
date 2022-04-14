//Simple hash function
function hash(key, arrayLen){
    let total = 0;
    //Prime number to reduce collisions
    let primeNo = 31;

    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        //Taking ASCII value of character
        let value = char.charCodeAt(0) - 96;
        total = (total * primeNo + value) % arrayLen;
    }

    console.log(total);
    return total;
}

hash("cyan", 5);
hash("red", 5);