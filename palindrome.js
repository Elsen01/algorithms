function palindrome(str) {
    const result = str.split('').reverse().join('')
    return str === result
}

console.log(palindrome('palindrome'))