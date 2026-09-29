// const {test, expect} = require("@playwright/test")

// for (let i = 0; i<5; i++){
// console.log(i);
// }

// for (let i = 0; i < browsers.length; i++) {
//     console.log(browsers[i]);

//     try {
//     // automation code
// } catch (error) {
//     console.log(error);
// }
// }
//*********************************** */
// //map() creates a new array by applying a function to each element.
// let numbers = [1, 2, 3];
// let result = numbers.map(number => number * 2);
// console.log(result);

//*********************************** */
//filter() creates a new array containing elements that satisfy a condition.
//let numbers = [10, 20, 30, 40];
//let result = numbers.filter(number => number > 20);
//console.log(result);


let numbers = [10, 20, 30, 40];
let result = numbers.find(number => number === 20);
console.log(result);