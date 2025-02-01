// Check for Anagrams:
// Write a function that checks if two given strings are anagrams of each other.
let string1="mayurs";
let string2="rayums";


function checkNAnagrams(string1,string2)
{
    let s1=string1.replace(/\s+/g,'').toLowerCase();
    let s2=string2.replace(/\s+/g,'').toLowerCase();

    if(s1.length!==s2.length)
        return false;

    const sortedStr1 = s1.split('').sort().join('');
    const sortedStr2 = s2.split('').sort().join('');

    // Step 4: Compare the sorted strings
    return sortedStr1 === sortedStr2;
    

}
const result=checkNAnagrams(string1,string2);
console.log(result);