const readline = require("readline"); // Import readline module

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

rl.question("Enter a number: ", (num) => {
    console.log("You entered:", num); // Debugging step
    num = parseInt(num);
    console.log("Parsed number:", num); // Debugging step
    console.log("Factorial:", factorial(num));
    rl.close();
});