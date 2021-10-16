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
    const answer = [];
    // for each i add 1 if i is smaller than n and push i into the s array
    for (let i = 1; i <= n; i++) {
        s.push(i)
    }
    console.log(s);
    for (let i = 1; i <= s.length; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            answer.push("FizzBuzz");
        } else if (i % 5 == 0) {
            answer.push("Buzz");
        } else if (i % 3 == 0) {
            answer.push("Fizz")
        } else {
            answer.push(i);
        }
    }
    console.log(answer);
}

let n = 20;

fizzBuzz(n);

console.log(n);