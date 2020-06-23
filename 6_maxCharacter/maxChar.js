// Take in a string and return the character that appears most often in that string.

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";
  str.split("").forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxCharacter("javascript"));
