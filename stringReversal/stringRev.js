// Given a string input, reverse the letters and return the reversed string.

// (function revString(str) {
//   let stringArr = str.split("");
//   let reversedStringArr = stringArr.reverse();
//   let reversedString = reversedStringArr.join("");

//   console.log(reversedString);
// })("Matthew");

function revString(str) {
  return str.split("").reverse().join("");
}

console.log(revString("Brad Traversy"));
