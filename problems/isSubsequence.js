//Write a function which takes in two strings and checks whether the
//characters in the first string form a subsequence of the characters
//in the second string. In other words, the function should check whether
//the characters in the first string appear somewhere in the second string
//without their order changing.
//Time: o(N + M)

function isSubsequence(str1, str2) {
  //Set two pointers
  var left = 0;
  var right = 0;
  //If the first string is empty return true
  if (!str1) return true;
  while (right < str2.length) {
    //If character is present, increment left pointer
    if (str2[right] === str1[left]) left++;
    //If the left pointer is equal to the string1 length then that means all the
    //characters are present
    if (left === str1.length) {
        console.log("All characters are present");
        return true;
    }
    //Else keep incrementing the right pointer
    right++;
  }
  console.log("Not a subsequence");
  return false;
}

isSubsequence("hello", "hello world");
isSubsequence("yes", "not");
