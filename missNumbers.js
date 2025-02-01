// Given an array of numbers from 1 to n with one missing number, write a function to find the missing number.

let n=100;
const arr=Array.from({length:n},(el,i)=>i+1);
console.log(arr);

function MissingNumber(arr,number){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==number)
        {
            return i;
        }
       
    }
    return -1;
}
const result=MissingNumber(arr,66);
console.log(result);



