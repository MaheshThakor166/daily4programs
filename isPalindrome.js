function isPalindrome(str)
{  
    str=str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let ReverseStr=str.split('').reverse().join('');

    return str === ReverseStr;

}
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(isPalindrome("hello"));                      // Output: false
