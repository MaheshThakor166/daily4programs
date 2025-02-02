function Secondlargest(arr)
{
    let largest = -Infinity;
    let Secondlargest = -Infinity;

  for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            Secondlargest=largest;
            largest=arr[i];
        }
        else if(arr[i]>Secondlargest && arr[i]<largest)
        {
           Secondlargest=arr[i];
        }
    }
    return Secondlargest === -Infinity ? "No second largest number" : Secondlargest;   
}
const arr=[1,45,23,67,34,5];
const result=Secondlargest(arr);
console.log(result);



