function reduce(arr, fn, initial) {
    return reduce(arr,fn,initial,0)
}

function reduce(arr, fn, initial, index) {
    if(!arr.length) return initial;
    initial = fn(initial, arr[0], index, arr);
    return reduce(arr.slice(1),fn,initial,index+1)
}

module.exports = reduce
