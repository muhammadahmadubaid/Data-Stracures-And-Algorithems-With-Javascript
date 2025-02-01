// Program to find sum of first n natural numbers


let n = 1000;
let sum = 0;
for (var i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum)

// Program to find sum of first n natural numbers usign function recursion


function usingRecursion(num) {
    return (num * (num + 1)) / 2;
}

var fun = usingRecursion(10);

console.log(fun);