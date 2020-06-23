// Create a private variable

function mainVariable() {
  let privateStr = "This code is private";
  return function () {
    return privateStr;
  };
}

let privateVariable = mainVariable();

console.log(privateVariable());
