function maxChar(str) {

    const char = []

    for(let el of str) {
        if(char[el]) {
            char[el]++
        }else {
            char[el] =1
        }
    }
return char
}

console.log(maxChar('max char'))

//------------------------

function maxChars(str) {

    const char = []
    let max = 0;
    let charMap = '';

    for(let el of str) {
        if(char[el]) {
            char[el]++
        }else {
            char[el] =1
        }
    }

    for (let el in char){
        if (char[el] > max) {
            max = char[el]
            charMap = el
        }
    }
    return charMap
}

console.log(maxChars('Programming'))