const sumAll = function(start, end) {
    // Validate input
    if (isNaN(start) || isNaN(end)) return 'ERROR';
    if (start < 0 || end < 0) return 'ERROR';
    if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';

    let runningSum = 0;
    for (let current = Math.min(start, end); current <= Math.max(start, end); current++) {
        runningSum += current;
    }
    return runningSum;
};

// Do not edit below this line
module.exports = sumAll;
