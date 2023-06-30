/*Implement a JavaScript program to check if a given string is a palindrome, 
considering only the words 
and ignoring case and punctuation.*/

function isPalindrome(str) {
    // Remove punctuation and convert to lowercase
    let cleanStr = str.toLowerCase().replace(/[^\w\s]|_/g, '').replace(/\s+/g, '');

    // Split the string into words
    let words = cleanStr.split(' ');

    // Loop through the words from both ends and compare
    for (let i = 0; i < words.length / 2; i++) {
        // Check if the words at the current positions are different
        if (words[i] !== words[words.length - 1 - i]) {
            return false; // Not a palindrome
        }
    }

    return true; // Palindrome
}

function main() {
    let inputString = "A man, a plan, a canal: Panama!";
    if (isPalindrome(inputString)) {
        console.log(`"${inputString}" is a palindrome.`);
    } else {
        console.log(`"${inputString}" is not a palindrome.`);
    }
}
main();