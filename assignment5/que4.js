const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter temperature: ", (temp) => {
    temp = parseInt(temp);
    let category = temp < 0 ? "Freezing" : temp <= 15 ? "Cold" : temp <= 30 ? "Moderate" : "Hot";
    console.log("Temperature category:", category);
    rl.close();
});