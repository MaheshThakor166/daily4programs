// Given an array of numbers and a target sum, return the indices of two numbers that add up to the target.
// const arr = [1, 6, 3, 5];
// let target=9;

// const newArr=[];

// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]+arr[j]==target)
//         {
//             newArr.push(i);
//             newArr.push(j);
//         }
//     }
// }
// console.log(newArr);

function twoSum(arr, target) {
    let map = {}; // Creating a HashMap
  
    for (let i = 0; i < arr.length; i++) {
      let complement = target - arr[i];
      console.log(complement); 
  
      if (map.hasOwnProperty(complement)) {
        console.log([map[complement],i]);
        return [map[complement], i]; // Found the pair
      }
  
      map[arr[i]] = i; // Store number and index
    }
  
    return []; 
  }
  
  console.log(twoSum([1, 6, 3, 10], 11)); // Output: [1, 2]
  