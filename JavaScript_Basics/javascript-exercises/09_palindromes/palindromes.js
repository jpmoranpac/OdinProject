const isCharLowerAlphaNumeric = function (character) {
    const asciiCode = character.charCodeAt(0);
    const asciiA = "a".charCodeAt(0);
    const asciiZ = "z".charCodeAt(0);
    const ascii0 = "0".charCodeAt(0);
    const ascii9 = "9".charCodeAt(0);

    const isAlpha = asciiCode >= asciiA && asciiCode <= asciiZ;
    const isNumeric = asciiCode >= ascii0 && asciiCode <= ascii9;

    return isAlpha || isNumeric;
}

const palindromes = function (testString) {
    // Remove non alphabetic characters
    let filteredArray = testString.toLowerCase().split("")
                                  .filter(isCharLowerAlphaNumeric);

    // Split into two equal halves, check if the reversed second half is
    // identical to the first half
    const filteredLength = filteredArray.length;
    const halfwayPoint = Math.floor(filteredLength / 2);
    // If there is a character in the exact centre, it is irrelevant for
    // palandronic analysis
    if (filteredLength % 2 != 0) {
        filteredArray.splice(halfwayPoint, 1);
    }

    const frontHalf = filteredArray.slice(0, halfwayPoint).join('');
    const backHalf = filteredArray.slice(-halfwayPoint).reverse().join('');

    return frontHalf === backHalf;
};

// Do not edit below this line
module.exports = palindromes;
