/*7.	Write a JavaScript function to check if a given string is a palindrome, 
considering only the letters of the alphabet and 
ignoring case and non-alphabet characters.*/

function isPalindrome(str) {
    // Remove non-alphabet characters and convert to lowercase
    let cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');

    // Loop through the characters from both ends and compare
    for (let i = 0; i < cleanStr.length / 2; i++) {
        // Check if the characters at the current positions are different
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false; // Not a palindrome
        }
    }

    return true; // Palindrome
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

/*In this code, the isPalindrome function takes a string as input. 
It removes any non-alphabet characters using a 
regular expression ([^a-z] matches anything that is not a lowercase letter) 
and converts the string to lowercase. Then, 
it uses a for loop to compare characters from the beginning and end of the cleaned string. 
If any pair of characters doesn't match, the function returns false, indicating 
that the string is not a palindrome. Otherwise, if all characters match, 
the function returns true, indicating that the string is a palindrome.

The provided test example checks whether the string "A man, a plan, a canal, 
Panama!" is a palindrome. The expected output will be "A man, a plan, a canal, Panama!" 
is a palindrome. since the string is a palindrome when ignoring non-alphabet characters 
and considering case-insensitivity.*/