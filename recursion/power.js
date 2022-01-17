//Write a function called power which accepts a base and an exponent.
//The function should return the power of the base to the exponent.

function power(base, exp) {
  //Base case
  if (exp === 0) return 1;
  //Exponent is decremented each recursive time
  return base * power(base, exp - 1);
}

power(2, 2);
