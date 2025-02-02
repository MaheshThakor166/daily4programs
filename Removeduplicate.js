// Remove Duplicates from an Array
// Write a function that takes an array and removes duplicate values, returning a new array with only unique elements.
function RemoveDuplicate(arr)
{
    const newArr=[];
for(let i=0;i<arr.length;i++)
{
   if(!newArr.includes(arr[i]))
   {
     newArr.push(arr[i]);
    
   }
}
return newArr;
}
const arr=[1,2,3,44,44,2,5,6,4];
const result=RemoveDuplicate(arr);
console.log(result);