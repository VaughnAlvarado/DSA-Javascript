// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// FIRST VERSION

// function palindrome(str) {
//     reversed = str.split('').reduce((rev, char) => char + rev , '')
//     return str == reversed
// }


// SECOND VERSION
// This uses the every function, which digests the array and you pass in the value you iterate 1st param with index as 2nd param
// if every result is true, it passes true otherwise its false, here we check that every beginning char matches the last
// ex 0 index matches last index, 1 index matches 2nd to last index, etc
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - (i + 1)]
    })
}



module.exports = palindrome;
