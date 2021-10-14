// reverse string

// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// -----------------------------------------------------------------------------------------------------------------------------------------------

var reverseString = (s) => {
    // create a const reverseArray
    const reverseArray = [];
    // while s array length is greater than 0
    while (s.length > 0) {
        // remove the last item in the array and assign it to a variable
        let char = s.pop();
        // add the removed item to the reverseArray
        reverseArray.push(char);
    }
    // while reverseArray length is greater than 0
    while (reverseArray.length > 0) {
        // remove the first item in the array and push it to the s array
        s.push(reverseArray.shift());
    }
};

let characters = ["h","e","l","l","o"];

reverseString(characters);

console.log(characters);

// Try the recursive method