const repeatString = function(inputString, repititions) {
    if (repititions < 0) {
        return "ERROR"
    }
    
    let returnString = "";
    for (let i = 0; i < repititions; i++) {
        returnString += inputString;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
