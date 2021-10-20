/* Given a string "s" determine if it's a palindrome considering only alpha numeric characters ignoring spaces

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var isPalindrome = (s) => {
    // change all cases to lower case
    let temp = "";
    s = s.toLowerCase();
    // iterate through the string to find characters within the ascii range of alphabets
    for (let i = 0; i < s.length; i++) {
        if ((s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) || (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90)) {
            // add the characters into a temp string
            temp += s[i];
        }
    };
    // check to see if CharAt(i) equals to CharAt(i) reversed
    return temp === temp.split('').reverse().join('');
};

let s = "A man, a plan, a canal: Banana"

console.log(isPalindrome(s))