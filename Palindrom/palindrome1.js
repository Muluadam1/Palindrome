/*Write a JavaScript function to check if a given string is a palindrome.*/

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
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

function main() {
    let inputString = "A man, a plan, a canal: Panama";
    let isInputPalindrome = isPalindrome(inputString);

    console.log(isInputPalindrome);
}
main();