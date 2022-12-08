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