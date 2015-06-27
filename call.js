function duckCount() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function dc(init, curr){
        if(Object.prototype.hasOwnProperty.call(curr, 'quack')) {
            return 1 + init
        }
        return init
    },0)
}

module.exports = duckCount
