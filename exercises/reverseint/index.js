// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// FIRST VERSION 
function reverseInt(n) {
    let isNegative = false;
    let reversedInt =  n.toString().split('').reduce((reversed, number) => {
        if (number != '-') {
            return number + reversed;
        } else {
            isNegative = true;
        }
    }, '')
    
    return isNegative ? parseInt(reversedInt) * -1 : parseInt(reversedInt);
}

// SECOND VERSION
// function reverseInt(n) {
//     let reversed = n.toString().split('').reverse().join('')

//     return parseInt(reversed) * Math.sign(n);
// }


module.exports = reverseInt;
