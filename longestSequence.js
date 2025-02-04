function longestConsecutiveSequence(arr) {
    if (arr.length === 0) return 0;
  
    arr.sort((a, b) => a - b);
  
    let maxLength = 1; 
    let currentLength = 1;
  
    for (let i = 1; i < arr.length; i++) {
      // If the current element is the same as the previous one, skip it (no sequence)
      if (arr[i] === arr[i - 1]) {
        continue;
      }
  
      // If the current element is consecutive to the previous one
      if (arr[i] === arr[i - 1] + 1) {
        currentLength++;
      } else {
        // Otherwise, reset the current sequence length
        maxLength = Math.max(maxLength, currentLength);
        currentLength = 1;  // Restart the count for the new sequence
      }
    }
  
    // Final update for the longest sequence after the loop
    maxLength = Math.max(maxLength, currentLength);
  
    return maxLength;
  }
  
  console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 1, 9]));  // Output: 10
  