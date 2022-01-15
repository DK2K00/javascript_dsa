//Implement a function which accepts a variable number of arguments, and check wheteher
//there are any dupllicates among the arguments passed in.

function areThereDuplicates(...args) {
  //Create an empty object to insert the arguments
  let a = {};

  //Use loop to insert arguments
  for (let ar of args) {
    a[ar] = (a[ar] || 0) + 1;
  }
  console.log(a);

  //Check if frequency of arguments is more than 1
  for (let ar in a) {
    if (a[ar] > 1) {
      console.log("Presence of duplicates");
      return true;
    }
  }

  console.log("No duplicates");
  return false;
}

areThereDuplicates(5,8,10);
areThereDuplicates(1, 2, 3, 1);
areThereDuplicates('a','b','c');
areThereDuplicates('a','b','c','a');