// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// First Version
function anagrams(stringA, stringB) {
    const aStrMap = buildStrMap(stringA);
    const bStrMap = buildStrMap(stringB);

    if (Object.keys(aStrMap).length !== Object.keys(bStrMap).length) {
        return false;
    }

    for (let key in bStrMap) {
        if (bStrMap[key] !== aStrMap[key]) {
            return false
        }
    }   
    return true;
}

function buildStrMap(str) {

    const charMap = {}
    const strStripped = str.replace(/[^\w]/g, "").toLowerCase();

    for (let char of strStripped) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}


// Second Version 
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
// }


module.exports = anagrams;
