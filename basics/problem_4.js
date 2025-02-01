
// Swap Two Numbers

// Given two numbers a and b, the task is to swap them.

// Examples:

//     Input: a = 2, b = 3
//     Output: a = 3, b = 2

//     Input: a = 20, b = 0
//     Output: a = 0, b = 20

//     Input: a = 10, b = 10
//     Output: a = 10, b = 10 


// first method

var a = 10;
var b = 7;


var c = a;
console.log(c)
a = b;
b = c;

console.log(`${a} _________________ ${b}`)

//----------------------------------//

// Second method

[a, b] = [b, a];
console.log(`${a} _________________ ${b}`)



// Thirst Method

a = a + b; // 17
console.log(a);
b = a - b;
a = a - b;
console.log(b , a)


