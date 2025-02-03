// Write a function that prints numbers from 1 to n. But:
// Print "Fizz" if the number is divisible by 3.
// Print "Buzz" if the number is divisible by 5.
// Print "FizzBuzz" if the number is divisible by both 3 and 5.
// Otherwise, print the number itself.

function fizzbuzz(n)
{
     for(let i=1;i<=n;i++)
         {
            if(i%3==0 && i%5===0)
            {
                console.log("FizzBuzz");
            }
            else if(i%3==0)
            {
                console.log("Fizz");
            }
            else if(i%5==0)
            {
                console.log("Buzz");
            }
            else{
                console.log(i);
            }
         }
};
fizzbuzz(15);
