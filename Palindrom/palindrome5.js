/*5.	Implement a JavaScript function to check if a given string is a palindrome, 
considering only the letters of the alphabet and ignoring case.*/

function isPalindrome(str) {
    let cleanedString = str.toLowerCase().replace(/[^a-z]/g, '');
    let length = cleanedString.length;

    for (let i = 0; i < length / 2; i++) {
        if (cleanedString[i] !== cleanedString[length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function main() {
    let inputString = "A man, a plan, a canal, Panama!";
    if (isPalindrome(inputString)) {
        console.log(`"${inputString}" is a palindrome.`);
    } else {
        console.log(`"${inputString}" is not a palindrome.`);
    }
}

main();