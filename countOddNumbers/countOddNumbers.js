/*

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

*/

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var countOdds = (low, high) => {
    // create an array to hold numbers
    const nums = [];
    // create a loop that pushes low to high numbers into nums array
    for (let i = low; i <= high; i++) {
        nums.push(i);
    }
    // create a loop to iterate through the array to find odd numbers
    // add 1 to output if there is an odd number encountered
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] % 2 == 1) {
            output += 1;
        }
    }
}



let s = 10;

let a = 26;

var output = 0;

countOdds(s, a);

console.log (output);