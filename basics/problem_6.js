// Find the number closest to n and divisible by m

function findClosedNumber(n, m) {
    if (m == 0) {
        console.log("m should not be equal to 0");
        return;
    }
    let a = n / m;

    let rounded = Math.floor(a);    

    let result1 = m * rounded;
    let result2 = m * (rounded + 1 + m);

    let closest = (Math.abs(n - result1) < Math.abs(n - result2) ? result1 : result2);
    console.log(closest);
}
findClosedNumber(-15, 6)