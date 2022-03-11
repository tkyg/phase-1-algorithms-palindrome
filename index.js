function reverse(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  return word === reversedWord
}

/* 
  Add your pseudocode here
  definition: word, phrase, or sequence that reads the same backwards as forward
  how to check a palindrome in JS
  reverse can be used in array, so split word, reverse, join
  use if else to check
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""))


}

module.exports = isPalindrome;
