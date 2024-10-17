const isDivisible = function(number, divisor) {
    return number % divisor == 0;
}

const leapYears = function(testYear) {
    return (isDivisible(testYear, 4) &&
       (!isDivisible(testYear, 100) || isDivisible(testYear, 400)))
};

// Do not edit below this line
module.exports = leapYears;
