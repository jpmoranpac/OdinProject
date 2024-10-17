const removeFromArray = function(inputArray, ...elementsToRemove) {
    for (const element of elementsToRemove) {
        let index = -1;
        do {
            index = inputArray.indexOf(element);
            if (index != -1) {
                inputArray.splice(index, 1);
            }
        } while (index != -1)
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
