const fibonacci = function(input) {
    const number = Number(input);
    if (number < 0) {
        return "OOPS";
    }
    if (number == 0) {
        return 0;
    }
    if (number <= 2) {
        return 1;
    }
    return fibonacci(number-1) + fibonacci(number-2);
};

for (let i = 1; i < 10; i++) {
    console.log(i + " = " + fibonacci(i));
}

// Do not edit below this line
module.exports = fibonacci;
