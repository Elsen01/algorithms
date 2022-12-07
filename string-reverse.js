function reverse(str) {
    const result = str.split('').reverse().join('')
    return result;
}

console.log(reverse('Hello World'))

//---------------------------------------

function reversed(str) {
    const revers = str.split('').reduce((curr,val)=> val + curr,'');
    return revers;
}

console.log(reversed('Reverse'))