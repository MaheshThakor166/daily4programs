// Write a function that takes a string as input and returns the reversed version of it.

function reverseString (Str)
          {
        
       let reversed=" ";
       for(let i=Str.length-1;i>=0;i--){
            
           reversed+=Str[i];
         }
         return reversed;
       
    //    return Str.split('').reverse().join("");

}

const result=reverseString("mayur")
console.log(result);

