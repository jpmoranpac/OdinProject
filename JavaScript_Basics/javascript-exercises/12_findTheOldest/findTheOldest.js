const ageCompare = function(currentOldest, currentPerson) {
    if (currentOldest.yearOfDeath == undefined) {
        currentOldest.yearOfDeath = new Date().getFullYear();
    }
    let currentRecord = currentOldest.yearOfDeath - currentOldest.yearOfBirth;
    if (currentPerson.yearOfDeath == undefined) {
        currentPerson.yearOfDeath = new Date().getFullYear();
    }
    let candidateRecord = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    if (candidateRecord > currentRecord) {
        return currentPerson;
    }
    return currentOldest;
}

const findTheOldest = function(personMap) {
    let oldestPerson = personMap.reduce(ageCompare, {name: 0, yearOfBirth: 0, yearOfDeath: 0});
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
