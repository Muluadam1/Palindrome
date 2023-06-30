/*Write a JavaScript program to check if a given number is a palindrome, using mathematical 
operations without converting it to a string.*/

function isPalindrome(number) {
    if (number < 0) {
        return false; // Negative numbers are not palindromic
    }

    let reverse = 0;
    let temp = number;

    while (temp > 0) {
        let digit = temp % 10;
        reverse = (reverse * 10) + digit;
        temp = Math.floor(temp / 10);
    }

    return number === reverse;
}

function main() {
    let inputNumber = 12321;
    if (isPalindrome(inputNumber)) {
        console.log(`${inputNumber} is a palindrome.`);
    } else {
        console.log(`${inputNumber} is not a palindrome.`);
    }
}
main();