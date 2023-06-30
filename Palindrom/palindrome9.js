/*Create a JavaScript function to check if a given sentence is a palindrome, 
considering only the words and ignoring case, 
punctuation, and whitespace.*/

function isPalindrome(sentence) {
    // Remove punctuation, whitespace, and convert to lowercase
    let cleanSentence = sentence.toLowerCase().replace(/[^\w\s]|_/g, '').replace(/\s+/g, '');

    // Split the sentence into words
    let words = cleanSentence.split(' ');

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
    let inputSentence = "A man, a plan, a canal: Panama!";
    if (isPalindrome(inputSentence)) {
        console.log(`"${inputSentence}" is a palindrome.`);
    } else {
        console.log(`"${inputSentence}" is not a palindrome.`);
    }
}
main();