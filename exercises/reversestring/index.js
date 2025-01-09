// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// FIRST VERSION
// function reverse(str) {
//     let newStr = '';
//     const len = str.length;

//     for (let i = len - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr
// }


// THIRD VERSION
function reverse(str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
        debugger;

    }
    return reversed
}


// SECOND VERSION
// function reverse(str) {
//     return str.split('').reverse().join('')
// }


// FOURTH VERSION
// function reverse(str) {
//     debugger;
//     return str.split('').reduce((reversed, char) => {
//         return char + reversed;
//     }, '');
    // can also format as 
    // return str.split('').reduce((reversed, char) => char + reversed, '');
// }
reverse('fgdfgdfgdf');

module.exports = reverse;
