/*6.	Create a JavaScript program to check if a given sentence is a palindrome, considering only 
the letters of the alphabet and ignoring any non-alphabet characters.*/

function isPalindrome(sentence) {
    // Remove non-alphabet characters and convert to lowercase
    let cleanSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');

    // Loop through the characters from both ends and compare
    for (let i = 0; i < cleanSentence.length / 2; i++) {
        // Check if the characters at the current positions are different
        if (cleanSentence[i] !== cleanSentence[cleanSentence.length - 1 - i]) {
            return false; // Not a palindrome
        }
    }

    return true; // Palindrome
}

function main() {
    let inputSentence = "A man, a plan, a canal, Panama!";
    if (isPalindrome(inputSentence)) {
        console.log(`"${inputSentence}" is a palindrome.`);
    } else {
        console.log(`"${inputSentence}" is not a palindrome.`);
    }
}
main();