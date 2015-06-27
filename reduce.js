function countWords(arr) {
    return arr.reduce(function(countMap, word) {
        if(countMap[word]) {
            ++countMap[word]
        }
        else {
            countMap[word] = 1
        }
        return countMap
    }, {})
}

module.exports = countWords
