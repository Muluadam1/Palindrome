/*Create a JavaScript function to check if a given string is a palindrome, 
considering only the alphanumeric characters 
and ignoring any non-alphanumeric characters.*/

function isPalindrome(str) {
    // Convert the string to lowercase
    let lowercaseStr = str.toLowerCase();

    // Remove non-alphanumeric characters and create a clean string
    let cleanStr = '';
    for (let i = 0; i < lowercaseStr.length; i++) {
        const char = lowercaseStr[i];
        if (isAlphanumeric(char)) {
            cleanStr += char;
        }
    }

    // Use a for loop to compare characters from start and end
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function isAlphanumeric(char) {
    let code = char.charCodeAt(0);
    return (
        (code >= 97 && code <= 122) || // lowercase letters
        (code >= 48 && code <= 57) // digits
    );
}

function main() {
    let inputString = "A man, a plan, a canal: Panama";
    const isInputPalindrome = isPalindrome(inputString);

    if (isInputPalindrome) {
        console.log("The string is a palindrome.");
    } else {
        console.log("The string is not a palindrome.");
    }
}
main();