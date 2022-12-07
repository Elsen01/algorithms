function intReversal(int) {
    const result = int.toString().split('').reverse().join('');

    return parseInt(result) * Math.sign(int)
}

console.log(intReversal(-100))

//-----------------

function reversal(num) {
    const intRevers = num.toString().split('').reverse().join('')

if (num < 0) {
    return parseInt(intRevers) * -1
}
return parseInt(intRevers)
}

console.log(reversal(411))