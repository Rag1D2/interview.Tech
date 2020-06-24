// Write a function (maskify) which changes all but the last four characters of a credit card number
// Ex. maskify("4412345467582312") == "############2312"
// Ex. maskify("4412342312") == "######2312"
// Ex. maskify("12") == "12"
// Ex. maskify("") == ""

function maskify(cc) {
  return cc.split("").map((letter, idx) => idx < cc.length - 4 ? "#" : letter)
    .join("");
}

console.log(maskify("4412345467582312"));
console.log(maskify("4412342312"));
console.log(maskify("12"));
console.log(maskify("skippy"));
console.log("");
