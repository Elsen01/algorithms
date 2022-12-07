function maxChar(str) {

    const char = []

    for(let el of str) {
        if(char[el]) {
            char[el]++
        }else {
            char[el] =1
        }
    }
    console.log(char)
}

maxChar('max char')