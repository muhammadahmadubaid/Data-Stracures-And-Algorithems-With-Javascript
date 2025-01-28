// Print Multiplication Table from zero to hundered

let number = 100; // test another number

for (var i = 1; i <= number; i++) {
    let value = i * number;
    console.log(`${number} * ${i} = ${value}`);
}

// follow recursive approach


function multiplicaitonTable(n, i = 0) {
    if (i == 11) {
        return;
    }
    console.log(n + "*" + i + "=" + n * i);
    i++;
    multiplicaitonTable(n,i)
}

multiplicaitonTable(4);

