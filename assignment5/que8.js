let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random Number:", randomNum);

function fibonacciBelow(n) {
    let fib = [0, 1];
    let next = fib[0] + fib[1];

    while (next < n) {
        fib.push(next);
        next = fib[fib.length - 1] + fib[fib.length - 2];
    }

    return fib;
}


let fibNumbers = fibonacciBelow(randomNum);
console.log("Fibonacci Numbers below", randomNum, ":", fibNumbers);
