/*  Write a function that produces a given number. 
    If the number is divisible by 3, replace with 'Fizz' 
    If the number is divisible by 5, replace with 'Buzz'
    If the number is divisible by both 3 & 5, replace with 'FizzBuzz'
*/

// function fizzBuzz(num) {
//   for (var i = 1; i <= num; i++) {
//     // if (i % 15 === 0) console.log("FizzBuzz");
//     if (i % 3 && i % 5 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
//   }
// }

// fizzBuzz(100);

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    if (output == "") output = i;

    console.log(output);
  }
}

fizzBuzz(100);
