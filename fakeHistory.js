/** @format */

function isPalindrome(word) {
  // Remove whitespace and convert to lowercase
  word = word.toLowerCase().replace(/\s/g, "");

  // Reverse the word
  var reversedWord = word.split("").reverse().join("");

  // Compare the original word with the reversed word
  return word === reversedWord;
}

console.log(isPalindrome("book"));
