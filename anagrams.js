function anagram(stringA,stringB) {
    return anagramString(stringA) === anagramString(stringB)

}

function anagramString(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}

console.log(anagram('array','array'))