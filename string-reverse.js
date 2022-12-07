function reverse(str) {
    const result = str.split('').reverse().join('')
    return result;
}

console.log(reverse('Hello World'))