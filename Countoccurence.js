// Count the Occurrences of Each Character in a String
// Write a JavaScript function that counts how many times each character appears in a given string.

function CountOccurence(newStr)
{
   const  obj={};
    for(let i=0;i<newStr.length;i++)
    {
        if(obj[newStr[i]])
        {
          obj[newStr[i]]+=1;
        }
        else{
            obj[newStr[i]]=1
        }
    }

    return obj;
  
}

let str="Mahesh Dalle";
const result=CountOccurence(str);
console.log(result);
