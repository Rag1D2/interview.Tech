// Given a string, reverse the letters

const stringRev = (str) => {
  const arr = str.split("");
  arr.reverse();
  str = arr.join("");

  console.log(str);
};

stringRev("Hello!");
