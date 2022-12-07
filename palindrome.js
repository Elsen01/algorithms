function palindrome(str) {
    const result = str.split('').reverse().join('')
    return str === result
}

console.log(palindrome('palindrome'))

//-----------------
function palindromes(str) {
    return str.split('').every((el,i) => {
        return el === str[str.length - i - 1]
    })
}

console.log(palindromes('palinderom'))