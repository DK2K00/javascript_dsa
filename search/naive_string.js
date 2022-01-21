function naiveSearch(long, short) {
  let count = 0;
  //Moving each character of long str
  for (let i = 0; i < long.length; i++) {
    //Moving each character of short str
    for (let j = 0; j < short.length; j++) {
      //Checking if equal
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  console.log("Count is: ",count);
  return count;
}

naiveSearch("dsgagerggqwggsa", "gg");
