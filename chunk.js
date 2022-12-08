function chunk(array,size) {
    const chunked = []

    for (let el of array) {
        const result = chunked[chunked.length -1]

        if (!result || result.length ===size) {
            chunked.push([el])
        }else {
            result.push(el)
        }
    }
    return chunked
}

console.log(chunk([1,2,3,4,5],2))

//---------------------------

function chunked(arr, size) {
    const chunk = [];
    let index = 0;

    while (index < arr.length) {
        chunk.push(arr.slice(index, index + size))
        index += size
    }
    return chunk
}

console.log(chunked([1,2,3,4,5,55,6,7,8,9],3))