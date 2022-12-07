function intReversal(int) {
    const result = int.toString().split('').reverse().join('');

    return parseInt(result) * Math.sign(int)
}

console.log(intReversal(-90))