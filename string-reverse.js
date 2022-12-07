

function reversed(str) {
    const revers = str.split('').reduce((curr,val)=> val + curr,'');
    return revers;
}

console.log(reversed('Reverse'))