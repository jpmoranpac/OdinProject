const reverseString = function(inputString) {
    let returnString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        returnString += inputString.at(i);
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
