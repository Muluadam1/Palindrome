/*Write a JavaScript program to check if a given number is a palindrome.*/

function isPalindrome(number) {
    let numString = number.toString();
    let length = numString.length;

    for (let i = 0; i < length / 2; i++) {
        if (numString[i] !== numString[length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function main() {
    let number = 45654;
    if (isPalindrome(number)) {
        console.log(number + ' is a palindrome.');
    } else {
        console.log(number + ' is not a palindrome.');
    }
}
main();