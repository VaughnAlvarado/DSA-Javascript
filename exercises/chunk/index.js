// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// FIRST VERSION
// function chunk(array, size) {
//     let result = [];
//     let arrChunk = [];

//     while (array.length) {
//         arrChunk.push(array.shift())

//         if (arrChunk.length == size) {
//             result.push(arrChunk);
//             arrChunk = [];
//         }
//     }

//     if (arrChunk.length) {
//         result.push(arrChunk);
//     }

//     return result;
// }


// SECOND VERSION
// function chunk(array, size) {
//     const chunked = [];

//     for (let num of array) {
//         const last = chunked[chunked.length - 1];

//         if (!last || last.length === size) {
//             chunked.push([num]);
//         } else {
//             last.push(num);
//         }
//     }

//     return chunked;
// }

// THIRD VERSION
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    
    return chunked;
}

module.exports = chunk;
