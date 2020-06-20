//  Given an array of numbers, remove all duplicate values from the array

let arr = [3, 6, 7, 5, 1, 3, 5, 4, 1, 8, 9, 7, 6, 5, 4, 3];

// obj = {};

// for (i of arr) {
//   obj[i] = true;
// }

// let keys = Object.keys(obj);

// console.log(keys);

let arrSet = [...new Set(arr)];
arrSet.sort();

console.log(arrSet);
