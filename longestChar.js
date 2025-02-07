// Write a function findLongestWord that takes a sentence (string) as input and returns the longest word in the sentence.

function findLongestWord(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ')
  let longestWord = ''

  // Iterate through the words to find the longest one
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  return longestWord
}

console.log(findLongestWord('The quick brown fox jumps')) // Output: "quick"
