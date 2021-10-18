/*  

Given an integer n return a string array which will be called answer (one indexed) 
Where answer[i] equals "FizzBuzz" if i is divisable by 3 and 5
Where answer[i] equals "Fizz" if i is divisable by 3
Where answer[i] equals "Buzz" if i is divisable by 5
Where answer[i] equals i if none of the above conditions are true

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]

Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

*/

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var fizzBuzz = (n) => {
    // Create a const variable for the sequence numbers
    const s = [];
    // create a const array for answer
    const array = [];
    // for each i add 1 if i is smaller than n and push i into the s array
    for (let i = 1; i <= n; i++) {
        s.push(i)
    }
    // assign n as an array
    // create for loop to iterate through the array with the following conditions
    for (let i = 1; i <= s.length; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            // if i equals to a remainder of 0 when divided by both 5 and 3 then push "FizzBuzz"
            array.push("FizzBuzz");
        } else if (i % 5 == 0) {
            // if i equals to a remainder of 0 when divided by 5 then push "Buzz"
            array.push("Buzz");
        } else if (i % 3 == 0) {
            // if i equals to a remainder of 0 when divided by 3 then push "Fizz"
            array.push("Fizz")
        } else {
            // if the following conditions are not met push the number i as a string
            array.push(i.toString());
        }
    }
    // use the while loop until you can find a solution for the concat method
    while (array.length > 0) {
        answer.push(array.shift());
    }
}

let n = 20;

let answer = [];

fizzBuzz(n);

console.log(answer);