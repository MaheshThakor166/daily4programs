function firstNonRepeatingChar(str) {
    let charCount = {}; 
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; 
        
       
        if (charCount[char]) {
            charCount[char] += 1;
        
        } else {
            charCount[char] = 1;
        }
    }
    
    // Loop through the string again to find the first non-repeating character
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // Get the character at position i
        
        // If this character has a count of 1, it's the first non-repeating character
        if (charCount[char] === 1) {
            return char;
        }
    }

    return "No non-repeating character";
}


console.log(firstNonRepeatingChar("leetcode"));   // Output: "l"
console.log(firstNonRepeatingChar("loveleetcode"));// Output: "v"

