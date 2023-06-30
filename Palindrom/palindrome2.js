/*Implement a JavaScript program to check if a given sentence is a palindrome, 
considering only alphanumeric characters and ignoring case.*/

function isPalindrome(sentence) {
    // Convert sentence to lowercase
    let lowercaseSentence = sentence.toLowerCase();

    // Remove non-alphanumeric characters and create clean sentence
    let cleanSentence = "";
    for (let i = 0; i < lowercaseSentence.length; i++) {
        let char = lowercaseSentence[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanSentence += char;
        }
    }

    // Use a for loop to compare characters from start and end
    for (let i = 0; i < cleanSentence.length / 2; i++) {
        if (cleanSentence[i] !== cleanSentence[cleanSentence.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function main() {
    let inputSentence = "A man, a plan, a canal: Panama";
    let isInputPalindrome = isPalindrome(inputSentence);

    if (isInputPalindrome) {
        console.log("The sentence is a palindrome.");
    } else {
        console.log("The sentence is not a palindrome.");
    }
}
main();