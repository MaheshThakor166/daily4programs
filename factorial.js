// Find Factorial of a Number
// Write a function that takes a number as input and returns its factorial.
function factorial(n)
{
    if(n==1)
    {
        return 1;
    }
 return n*factorial(n-1);
}

const result=factorial(5);
console.log(result);