/* Write a function that takes in a string and determines 
    if that string is a palindrome */

function isPalindrome(str) {
  str = str.toLowerCase();
  let charArr = str.split("");
  let validChars = "abcdefghijklmnopqrstuvwxyz".split("");

  let lettersArr = [];
  charArr.forEach((char) => {
    if (validChars.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
  else return false;
}

console.log(isPalindrome("Madam, I'm Adam"));
